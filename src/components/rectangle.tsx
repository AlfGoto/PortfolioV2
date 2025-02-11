"use client";

import { useState, useEffect } from "react";

export function Rectangle() {
  const [W, setW] = useState(20); // Largeur
  const [H, setH] = useState(20); // Hauteur
  const [D, setD] = useState(20); // Profondeur
  const [hover, setHover] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false); // État pour le clic enfoncé
  const [activeFace, setActiveFace] = useState<"front" | "top" | "right" | null>(null); // Face active

  const agrandissement = 0.5

  // Style dynamique basé sur les dimensions
  const style = {
    "--brique-w": `${W}svw`,
    "--brique-h": `${H}svw`,
    "--brique-d": `${D}svw`,
  } as React.CSSProperties;

  // Effet pour réduire les dimensions progressivement
  useEffect(() => {
    if (!hover && !isMouseDown) {
      const interval = setInterval(() => {
        setW((prevW) => (prevW > 20 ? prevW - agrandissement : prevW));
        setH((prevH) => (prevH > 20 ? prevH - agrandissement : prevH));
        setD((prevD) => (prevD > 20 ? prevD - agrandissement : prevD));
      }, 16); // Environ 60 FPS

      return () => clearInterval(interval);
    }
  }, [hover, isMouseDown]);

  // Effet pour augmenter les dimensions pendant le clic
  useEffect(() => {
    if (isMouseDown && activeFace) {
      const interval = setInterval(() => {
        if (activeFace === "front") {
          setD((prevD) => Math.min(prevD + agrandissement, 50)); // Limite à 50svw
        } else if (activeFace === "top") {
          setH((prevH) => Math.min(prevH + agrandissement, 50)); // Limite à 50svw
        } else if (activeFace === "right") {
          setW((prevW) => Math.min(prevW + agrandissement, 50)); // Limite à 50svw
        }
      }, 16); // Environ 60 FPS

      return () => clearInterval(interval);
    }
  }, [isMouseDown, activeFace]);

  return (
    <div className="brique" style={style}>
      <div className="back"></div>
      <div className="left"></div>
      <div
        className="right"
        onMouseDown={() => {
          setIsMouseDown(true);
          setActiveFace("right");
        }}
        onMouseUp={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
      ></div>
      <div
        className="top"
        onMouseDown={() => {
          setIsMouseDown(true);
          setActiveFace("top");
        }}
        onMouseUp={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
      ></div>
      <div className="bottom"></div>
      <div
        className="front"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => {
          setIsMouseDown(true);
          setActiveFace("front");
        }}
        onMouseUp={() => {
          setIsMouseDown(false);
          setActiveFace(null);
        }}
      ></div>
    </div>
  );
}