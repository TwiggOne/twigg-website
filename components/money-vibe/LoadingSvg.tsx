"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const LoadingTwiggLogo = () => {
  const innerCtrl = useAnimation();
  const middleCtrl = useAnimation();
  const outerCtrl = useAnimation();

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        // Animate IN: inner -> middle -> outer
        await innerCtrl.start({ opacity: 1, transition: { duration: 0.5 } });
        await new Promise((r) => setTimeout(r, 120));
        await middleCtrl.start({ opacity: 1, transition: { duration: 0.5 } });
        await new Promise((r) => setTimeout(r, 120));
        await outerCtrl.start({ opacity: 1, transition: { duration: 0.5 } });
        await new Promise((r) => setTimeout(r, 350));

        // Animate OUT: outer -> middle -> inner
        await outerCtrl.start({ opacity: 0.1, transition: { duration: 0.5 } });
        await new Promise((r) => setTimeout(r, 120));
        await middleCtrl.start({ opacity: 0.1, transition: { duration: 0.5 } });
        await new Promise((r) => setTimeout(r, 120));
        await innerCtrl.start({ opacity: 0.1, transition: { duration: 0.5 } });
        await new Promise((r) => setTimeout(r, 350));
      }
    };

    loopAnimation();
  }, [innerCtrl, middleCtrl, outerCtrl]);

  return (
    <svg
      width="182"
      height="190"
      viewBox="0 0 182 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* INNER */}
      <motion.path
        d="M86.9466 109.142L74.8984 96.7552L77.9105 93.6584L86.9466 102.949L106.34 83.0098L109.352 86.1066L86.9466 109.142Z"
        fill="#FDF9F0"
        initial={{ opacity: 0.1 }}
        animate={innerCtrl}
      />

      {/* MIDDLE */}
      <motion.path
        d="M181.255 92.8584C181.255 112.646 177.508 131.509 167.509 148.614C152.892 173.612 131.1 187.437 102.865 189.214C73.8166 191.05 47.6034 182.06 26.2296 161.694C5.31482 141.817 -2.66767 116.3 0.771654 87.3317C4.18193 58.6135 17.0678 34.8674 39.1678 17.0474C56.4806 3.08476 76.797 -1.76821 98.6587 0.556915C117.25 2.53625 134.743 7.97347 149.563 20.0105C168.462 35.3563 178.478 55.8114 180.581 80.3802C180.935 84.5237 181.04 88.697 181.255 92.8584ZM169.24 89.8357C169.24 87.2006 169.362 84.5535 169.24 81.9243C168.166 61.8687 160.694 44.7939 145.944 31.493C136.834 23.3014 125.796 18.6809 114.327 15.1158C95.0916 9.12409 76.0766 10.3463 58.299 19.5514C29.7851 34.2831 14.7671 59.3766 11.6299 91.3441C8.69604 121.207 20.6407 145.156 44.4604 162.093C63.9111 175.907 86.075 179.979 109.453 176.652C122.153 174.864 133.627 170.243 143.149 160.967C163.123 141.537 170.42 117.308 169.24 89.8357Z"
        fill="#214838"
        fillOpacity={0.1}
        initial={{ opacity: 0.1 }}
        animate={middleCtrl}
      />

      {/* OUTER */}
      <motion.path
        d="M94.0631 27.0046C104.364 26.8794 115.977 30.0213 126.87 36.1262C145.972 46.8277 154.071 64.2543 155.338 85.6573C156.017 97.3366 155.651 109.141 152.102 120.314C144.549 144.125 127.44 161.272 100.274 162.679C79.2949 163.77 60.948 157.629 45.4885 143.273C31.3362 130.157 24.4924 113.374 25.9506 93.7893C27.9259 67.2173 40.8524 47.3345 63.1325 33.9621C71.8702 28.6978 81.8919 26.6588 94.0631 27.0046Z"
        fill="#214838"
        fillOpacity={0.1}
        initial={{ opacity: 0.1 }}
        animate={outerCtrl}
      />

      {/* OPTIONAL LAST PATH */}
      <motion.path
        d="M93.6819 53.8218C112.607 53.1972 134.683 67.9551 133.254 94.8477C131.838 121.597 117.842 137.01 94.957 136.81C65.1076 136.554 51.8657 113.703 52.4481 94.9664C53.1286 72.9639 72.1332 53.5782 93.6819 53.8218Z"
        fill="#214838"
        initial={{ opacity: 1 }}
        animate={outerCtrl}
      />
    </svg>
  );
};
