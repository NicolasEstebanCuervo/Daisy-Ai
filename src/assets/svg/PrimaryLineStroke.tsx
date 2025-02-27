import * as React from "react";
import type { SVGProps } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const PrimaryLineStroke = (props: SVGProps<SVGSVGElement>) => (
    <SVG
        xmlns="http://www.w3.org/2000/svg"
        width={107}
        height={18}
        fill="none"
        {...props}
    >
        <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
            stroke="#050505"
            strokeLinecap="round"
            strokeWidth={4}
            d="M2 15.424c7.31-2.91 26.65-8.265 35.54-9.33C54.384 4.079 87.783 3.057 105 2.5"
        />
    </SVG>
);
export default PrimaryLineStroke;

const SVG = styled.svg`
  @media (max-width: 500px) {
        display: none;
  }
`;