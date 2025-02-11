"use client";

import { useState, useEffect } from "react";

export function Rectangle() {
  const [W, setW] = useState(20);
  const [H, setH] = useState(20);
  const [D, setD] = useState(20);
  const [hover, setHover] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [activeFace, setActiveFace] = useState<
    "front" | "top" | "right" | null
  >(null);

  const agrandissement = 0.5;

  const style = {
    "--brique-w": `${W}svw`,
    "--brique-h": `${H}svw`,
    "--brique-d": `${D}svw`,
  } as React.CSSProperties;

  useEffect(() => {
    if (!isMouseDown) {
      const interval = setInterval(() => {
        setW((prevW) => (prevW > 20 ? prevW - agrandissement : prevW));
        setH((prevH) => (prevH > 20 ? prevH - agrandissement : prevH));
        setD((prevD) => (prevD > 20 ? prevD - agrandissement : prevD));
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isMouseDown]);

  useEffect(() => {
    if (isMouseDown && activeFace) {
      const interval = setInterval(() => {
        if (activeFace === "front") {
          setD((prevD) => Math.min(prevD + agrandissement, 50));
        } else if (activeFace === "top") {
          setH((prevH) => Math.min(prevH + agrandissement, 50));
        } else if (activeFace === "right") {
          setW((prevW) => Math.min(prevW + agrandissement, 50));
        }
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isMouseDown, activeFace]);

  return (
    <div className="brique" style={style}>
      <div className="back"></div>
      <div className="left"></div>
      <div
        className="right"
        onPointerDown={() => {
          setIsMouseDown(true);
          setActiveFace("right");
        }}
        onPointerUp={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
        onMouseLeave={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
      ></div>
      <div
        className="top"
        onPointerDown={() => {
          setIsMouseDown(true);
          setActiveFace("top");
        }}
        onPointerUp={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
        onMouseLeave={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
      ></div>
      <div className="bottom"></div>
      <div
        className="front"
        onPointerDown={() => {
          setIsMouseDown(true);
          setActiveFace("front");
        }}
        onPointerUp={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
        onMouseLeave={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
      ></div>
    </div>
  );
}
