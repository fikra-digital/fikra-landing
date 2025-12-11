import React from 'react'
import { motion } from "framer-motion";

const AfricanDrawingAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="african-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M20 100 Q50 20 80 100 T140 100"
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="20"
              fill="rgba(59, 130, 246, 0.05)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#african-pattern)"
        />

        <motion.path
          d="M50 50 C60 40, 80 40, 90 50 S120 60, 130 50 M90 50 L90 80 C80 90, 70 90, 60 80 L60 60"
          fill="none"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M200 20 L220 20 L220 40 L200 40 Z M240 40 L260 40 L260 60 L240 60 Z"
          fill="rgba(59, 130, 246, 0.1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M300 100 C320 80, 340 80, 360 100 C360 120, 340 140, 320 140 C300 140, 280 120, 300 100 Z"
          fill="none"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="3"
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M400 200 L420 160 L440 200 M410 200 L430 170 L450 200 M420 200 V220"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="3"
          fill="none"
          initial={{ scaleY: 0.8 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

export default AfricanDrawingAnimation