"use client";

import { useState, useEffect } from "react";

export function Rectangle() {
  const baseHeight = 50;
  const [W, setW] = useState(baseHeight);
  const [H, setH] = useState(baseHeight);
  const [D, setD] = useState(baseHeight);
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
        setW((prevW) => (prevW > baseHeight ? prevW - agrandissement : prevW));
        setH((prevH) => (prevH > baseHeight ? prevH - agrandissement : prevH));
        setD((prevD) => (prevD > baseHeight ? prevD - agrandissement : prevD));
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isMouseDown]);

  useEffect(() => {
    if (isMouseDown && activeFace) {
      const interval = setInterval(() => {
        if (activeFace === "front") {
          setD((prevD) => Math.min(prevD + agrandissement, baseHeight * 2));
        } else if (activeFace === "top") {
          setH((prevH) => Math.min(prevH + agrandissement, baseHeight * 2));
        } else if (activeFace === "right") {
          setW((prevW) => Math.min(prevW + agrandissement, baseHeight * 2));
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
