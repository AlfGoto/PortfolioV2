import { ReactNode } from "react";

export function Rectangle({
  width,
  height,
  depth,
  style,
  color,
  children,
}: {
  width?: number;
  height?: number;
  depth?: number;
  style?: object;
  color?: string;
  children?: ReactNode;
}) {
  const baseStyle = {
    "--brique-w": width ? `${width}px` : `100px`,
    "--brique-h": height ? `${height}px` : `100px`,
    "--brique-d": depth ? `${depth}px` : `100px`,
    "--color": color ? `${color}` : `#ffffff`,
    willChange: "transform",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
  } as React.CSSProperties;

  return (
    <div className="brique" style={{ ...baseStyle, ...style }}>
      <div className="back"></div>
      <div className="left"></div>
      <div className="right"></div>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="front">{children}</div>
    </div>
  );
}
