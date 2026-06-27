import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
    >
      <div
        className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-[120px] transition-all duration-150"
        style={{
          left: position.x - 160,
          top: position.y - 160,
        }}
      />
    </div>
  );
}

export default CursorGlow;