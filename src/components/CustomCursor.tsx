import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const dotX = useSpring(0, { damping: 20, stiffness: 200 });
  const dotY = useSpring(0, { damping: 20, stiffness: 200 });
  
  const outlineX = useSpring(0, { damping: 30, stiffness: 100 });
  const outlineY = useSpring(0, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    dotX.set(position.x);
    dotY.set(position.y);
    outlineX.set(position.x);
    outlineY.set(position.y);
  }, [position, dotX, dotY, outlineX, outlineY]);

  return (
    <>
      <motion.div 
        className="cursor-dot"
        style={{ x: dotX, y: dotY, scale: isPointer ? 1.5 : 1 }}
      />
      <motion.div 
        className="cursor-outline"
        style={{ 
          x: outlineX, 
          y: outlineY,
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.8 : 0.4
        }}
      />
      <div className="noise-bg" />
    </>
  );
}
