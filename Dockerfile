# --- Development Stage ---
# Use a robust Node image. Alpine is lightweight, but standard node is often better for dev tools.
FROM node:20

# Set environment variables
ENV NODE_ENV development
ENV PORT 3000

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install all dependencies (including devDependencies)
# This step is cached as long as package.json/package-lock.json don't change
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire application source code
COPY . .

# Next.js development server runs on port 3000 by default
EXPOSE 3000

# Command to start the application in development mode
# This relies on your package.json having a "dev" script set to "next dev"
CMD ["npm", "run", "dev"]
