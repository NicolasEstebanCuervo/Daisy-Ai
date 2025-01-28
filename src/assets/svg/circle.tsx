import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Circle = () => (
    <SVG
        xmlns="http://www.w3.org/2000/svg"
        width={115}
        height={58}
        fill="none"
    >
        <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }} 
            transition={{
                duration: 2,
                ease: "easeInOut",
            }}
            stroke="#050505"
            strokeLinecap="round"
            strokeWidth={4}
            d="M40.465 54.31c7.444-.938 14.963-.713 22.414-1.63 10.497-1.294 24.788-6.364 34.532-10.715 6.969-3.111 14.38-9.472 15.528-18.098.45-3.378-1.655-7.41-3.875-9.649-2.892-2.915-6.954-4.541-10.66-5.833-6.44-2.244-13.115-3.798-19.82-4.801-13.787-2.064-28.466-2.51-42.046 1.108C30.875 6.2 25.36 8.26 20 10.725c-5.22 2.4-10.992 5.172-14.779 9.88-4.912 6.106-3.744 14.624.39 20.806 2.382 3.564 5.771 6.136 9.377 8.11 6.9 3.78 14.09 2.625 21.549 4.79 12.092 3.51 24.964.26 37.447 1.473"
        />
    </SVG>
);
export default Circle;


const SVG = styled.svg`
    position: absolute;
    top: 0px;
    left: -15px;

    @media (max-width: 500px) {
        display: none;
    }
`