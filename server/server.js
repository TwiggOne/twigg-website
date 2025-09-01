const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;






app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})