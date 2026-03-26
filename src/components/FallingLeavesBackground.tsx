import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

interface LeafItem {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotationStart: number;
  rotationEnd: number;
  horizontalDrift: number;
}

const LEAF_COUNT = 25;

export const FallingLeavesBackground: React.FC = () => {
  const [leaves, setLeaves] = useState<LeafItem[]>([]);

  useEffect(() => {
    // Generate random leaves on mount so the server and client don't mismatch if SSR
    const generatedLeaves = Array.from({ length: LEAF_COUNT }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // random start horizontal position (vw)
      delay: Math.random() * 20, // initial delay
      duration: 10 + Math.random() * 15, // fall duration between 10-25 seconds
      size: 1 + Math.random() * 2, // 1 to 3 rem size
      rotationStart: Math.random() * 360,
      rotationEnd: Math.random() * 360 + 360 * (Math.random() > 0.5 ? 1 : -1),
      horizontalDrift: (Math.random() - 0.5) * 40, // +/- 20vw drift
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-green-500/10"
          initial={{
            left: `${leaf.x}vw`,
            top: "-10vh",
            rotate: leaf.rotationStart,
          }}
          animate={{
            left: `${leaf.x + leaf.horizontalDrift}vw`,
            top: "110vh",
            rotate: leaf.rotationEnd,
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Leaf
            style={{ width: `${leaf.size}rem`, height: `${leaf.size}rem` }}
            fill="currentColor"
            strokeWidth={1}
          />
        </motion.div>
      ))}
    </div>
  );
};
