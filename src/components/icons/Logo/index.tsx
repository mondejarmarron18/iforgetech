import { AnimatePresence, motion } from "framer-motion";
import React, { ComponentProps } from "react";

type Props = ComponentProps<"svg">;
const Logo = (props: Props) => {
  const fill = props.fill || "black";
  const height = props.height || 40;
  const width = props.width || 40;

  return (
    <AnimatePresence>
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 406 371"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          opacity: [0, 1],
          y: [-height, 0],
        }}
        transition={{
          duration: 2,
        }}
      >
        <motion.circle cx="193.42" cy="90" r="75" fill={fill} />
        <motion.g
          animate={{
            opacity: [0, 0, 1],
            rotate: ["0deg", "180deg", "360deg"],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.path
            d="M289.358 116C298.858 76 285.025 45 274.858 33C330.358 37 377.358 19.5 403.858 0C414.858 62 366.358 125.5 289.358 116Z"
            fill={fill}
            animate={{
              x: [-height, 0],
              rotate: ["-90deg", "0deg"],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
              delay: 0.3,
            }}
          />
          <motion.path
            d="M16.355 261C32.755 189 84.1915 150.167 107.358 140C78.0467 88.1109 102.346 41.4131 118.855 24C-3.15659 63.9942 -18.6418 190.5 16.355 261Z"
            fill={fill}
            animate={{
              x: [height, 0],
              rotate: ["90deg", "0deg"],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
              delay: 0.2,
            }}
          />
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M254.349 242.634C227.909 317.408 151.353 388.445 32.8582 367C76.3582 353 159.758 295.4 145.358 177C166.358 189.5 219.7 203.5 262.5 161.5C323.7 185.9 366 157 383 136C389.483 230.749 298.482 259.349 254.349 242.634Z"
            fill={fill}
            animate={{
              y: [-height, 0],
              rotate: ["-90deg", "0deg"],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
              delay: 0.1,
            }}
          />
        </motion.g>
      </motion.svg>
    </AnimatePresence>
  );
};

export default Logo;
