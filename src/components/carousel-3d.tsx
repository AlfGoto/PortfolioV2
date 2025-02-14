"use client";

import { useEffect, useState } from "react";
import { Rectangle } from "./rectangle";
import { ProjectsType } from "../lib/Projects";
import ProjectCard from "./project-card";

export function Carousel3D({ projects }: { projects: ProjectsType }) {
  const [w, setW] = useState(200);
  const [h, setH] = useState(100);
  const [d, setD] = useState(25);

  const [toSwap, setToSwap] = useState(0);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (angle % 45 !== 0) {
        if (toSwap < 0) {
          setAngle((ang) => ang + 1);
        } else if (toSwap > 0) {
          setAngle((ang) => ang - 1);
        }
      } else setToSwap(0);
    }, 1);
  }, [toSwap, angle]);

  const childDivStyle =
    "w-[10svw] h-[10svw] gap-[1svw] flex items-center transform-3d bg-transparent";
  const parentStyle = `flex transform-3d  gap-[1svw]`;

  useEffect(() => {
    if (!document) return;
    let heightModif = 1;
    const screenWidth = window.innerWidth;
    const deform = 0.1;
    const width = screenWidth * deform;
    const deplacement = 4;

    if (screenWidth < 1000) heightModif = 2;
    if (screenWidth < 500) heightModif = 3;

    setW(width);
    setH((screenWidth / 2) * deform * heightModif);
    setD((screenWidth / 8) * deform);

    const section = document.getElementById("Projects");
    if (!section) return;

    let initialX: number | null = null;
    let initialY: number | null = null;

    function startTouch(e: TouchEvent) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    }

    const handleWheelScroll = (e: WheelEvent) => {
      handleScroll(e.deltaY);
    };

    function handleScroll(deltaY: number) {
      const rekt = section!.getBoundingClientRect();
      const descend = deltaY > 0;

      if (rekt.top < 10 && angle < 310 && descend) {
        if (rekt.top < -10) section!.scrollIntoView();
        slideCarousel(descend);
      } else if (rekt.top > -10 && angle > 5 && !descend) {
        if (rekt.top > 10) section!.scrollIntoView();
        slideCarousel(descend);
      } else {
        document.body.style.overflow = "auto";
      }
    }

    function slideCarousel(descend: boolean) {
      document.body.style.overflow = "hidden";
      if (descend && angle + deplacement < 320)
        setAngle((ang) => ang + deplacement);
      else if (angle - deplacement > 0) setAngle((ang) => ang - deplacement);
    }

    function moveTouch(e: TouchEvent) {
      if (initialY === null || initialX === null) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = initialX - currentX;
      const diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (toSwap !== 0) return;
        if (diffX > 0) {
          setAngle((ang) => ang + 1);
          setToSwap(-1);
        } else {
          setAngle((ang) => ang - 1);
          setToSwap(1);
        }
      }
      initialX = null;
      initialY = null;
    }

    // Attach event listeners
    window.addEventListener("wheel", handleWheelScroll);
    window.addEventListener("touchstart", startTouch);
    window.addEventListener("touchmove", moveTouch);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchstart", startTouch);
      window.removeEventListener("touchmove", moveTouch);
    };
  }, [angle, toSwap]);

  return (
    <div
      className={`flex flex-col gap-[1svw] transform-3d bg-transparent`}
      style={{
        transform: `translateZ(2000px) rotateX(90deg) rotateZ(${angle}deg)`,
        transformStyle: "preserve-3d",
        transformOrigin: "center",
        backfaceVisibility: 'hidden',
      }}
    >
      <div className={parentStyle}>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{
              transform: "rotateX(-90deg) rotateY(-135deg)",
            }}
          ><ProjectCard project={projects[2]} /></Rectangle>
        </div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{
              transform: `rotateX(-90deg) rotateY(180deg) translateZ(5svw)`,
            }}
          ><ProjectCard project={projects[3]} /></Rectangle>
        </div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{
              transform: "rotateX(-90deg) rotateY(135deg)",
            }}
          ><ProjectCard project={projects[4]} /></Rectangle>
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
          ><ProjectCard project={projects[5]} /></Rectangle>
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
          ><ProjectCard project={projects[6]} /></Rectangle>
        </div>
      </div>
      <div className={parentStyle}>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{
              transform: "rotateX(-90deg) rotateY(-45deg)",
            }}
          ><ProjectCard project={projects[7]} /></Rectangle>
        </div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{ transform: `rotateX(-90deg) translateZ(5svw)` }}
          ><ProjectCard project={projects[0]} /></Rectangle>
        </div>
        <div className={childDivStyle}>
          <Rectangle
            width={w}
            height={h}
            depth={d}
            style={{ transform: "rotateX(-90deg) rotateY(45deg)" }}
          ><ProjectCard project={projects[1]} /></Rectangle>
        </div>
      </div>
    </div>
  );
}
