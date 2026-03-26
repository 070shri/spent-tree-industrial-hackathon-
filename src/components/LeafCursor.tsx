import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { Leaf } from "lucide-react";

interface TrailLeafProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  index: number;
}

const TrailLeaf: React.FC<TrailLeafProps> = ({ mouseX, mouseY, index }) => {
  // Stagger the spring physics to create a trailing effect (slower and heavier)
  const stiffness = 120 - index * 15;
  const damping = 25 + index * 3;
  
  const x = useSpring(mouseX, { stiffness, damping });
  const y = useSpring(mouseY, { stiffness, damping });

  return (
    <motion.div
      className="absolute pointer-events-none text-green-500/80"
      style={{
        x,
        y,
        rotate: index * -15 + 45, // Add some natural rotation
        scale: 1 - index * 0.1,   // Leaves get smaller at the end of the trail
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <Leaf 
          className="w-8 h-8 drop-shadow-md" 
          fill="currentColor" 
          strokeWidth={1.5} 
        />
      </div>
    </motion.div>
  );
};

export const LeafCursor: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);
    
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Render 6 leaves in the trail */}
      {Array.from({ length: 6 }).map((_, i) => (
        <TrailLeaf 
          key={i} 
          mouseX={mouseX} 
          mouseY={mouseY} 
          index={i} 
        />
      ))}
    </div>
  );
};
