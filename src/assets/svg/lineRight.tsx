import * as React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

import type { SVGProps } from "react";
const LineRight = (props: SVGProps<SVGSVGElement>) => (
    <SVG
        xmlns="http://www.w3.org/2000/svg"
        width={131}
        height={7}
        fill="none"
        {...props}
    >
        <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            
            transition={{
                delay:1,
                duration: 1,
                ease: "easeInOut",
            }}
            stroke="#050505"
            strokeLinecap="round"
            strokeWidth={4}
            d="M2 4.6c5.865-.183 105.147-2.17 111.074-2.2 1.97-.011 15.207-.022 15.108 0-8.093 1.694.378.365-7.419 1.717"
        />
    </SVG>
);
export default LineRight;

const SVG = styled.svg`
    position: relative;
    bottom: 2px;
    right: 2px;

    @media (max-width: 500px) {
        display: none;
    }
`;
