"use client";

import { useEffect, useState } from "react";
import { Rectangle } from "./rectangle";

export function Carousel3D() {
  const [w, setW] = useState(200);
  const [h, setH] = useState(100);
  const [d, setD] = useState(25);

  const [angle, setAngle] = useState(0);

  const childDivStyle =
    "w-[10svw] h-[10svw] gap-[1svw] flex items-center transform-3d bg-transparent";
  const parentStyle = `flex transform-3d  gap-[1svw]`;

  useEffect(() => {
    if (!document) return;
    let heightModif = 1;
    const screenWidth = window.innerWidth;
    const deform = 0.1;
    const width = screenWidth * deform;

    if (screenWidth < 1000) heightModif = 2;
    if (screenWidth < 500) heightModif = 3;

    setW(width);
    setH((screenWidth / 2) * deform * heightModif);
    setD((screenWidth / 8) * deform);

    const section = document.getElementById("Projects");
    if (!section) return;

    const handleScroll = (e: WheelEvent) => {
      const rekt = section.getBoundingClientRect();
      if (rekt.top < 100 && angle < 315) {
        document.body.style.overflow = "hidden";
        section.scrollIntoView();

        if (e.deltaY > 0) setAngle((ang) => ang + 2);
        else setAngle((ang) => ang - 2);
      } else {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [angle]);

  return (
    <div
      className={`flex flex-col gap-[1svw] transform-3d bg-transparent`}
      style={{
        transform: `translateZ(2000px) rotateX(90deg) rotateZ(${angle}deg)`,
        transformStyle: "preserve-3d",
        transformOrigin: "center",
      }}
    >
      <div className={parentStyle}>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{ transform: "rotateX(-90deg) rotateY(-135deg)" }}
          />
        </div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{
              transform: `rotateX(-90deg) rotateY(180deg) translateZ(5svw)`,
            }}
          />
        </div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{ transform: "rotateX(-90deg) rotateY(135deg)" }}
          />
        </div>
      </div>
      <div className={parentStyle}>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{
              transform: `rotateX(-90deg) rotateY(-90deg) translateZ(5svw)`,
            }}
          />
        </div>
        <div className={childDivStyle}></div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{
              transform: `rotateX(-90deg) rotateY(90deg) translateZ(5svw)`,
            }}
          />
        </div>
      </div>
      <div className={parentStyle}>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{ transform: "rotateX(-90deg) rotateY(-45deg)" }}
          />
        </div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{ transform: `rotateX(-90deg) translateZ(5svw)` }}
          />
        </div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{ transform: "rotateX(-90deg) rotateY(45deg)" }}
          />
        </div>
      </div>
    </div>
  );
}
