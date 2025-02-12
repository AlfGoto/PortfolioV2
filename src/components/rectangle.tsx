export function Rectangle({
  width,
  height,
  depth,
  style,
}: {
  width?: number;
  height?: number;
  depth?: number;
  style?: object;
}) {
  const baseStyle = {
    "--brique-w": width ? `${width}px` : `100px`,
    "--brique-h": height ? `${height}px` : `100px`,
    "--brique-d": depth ? `${depth}px` : `100px`,
  } as React.CSSProperties;

  return (
    <div className="brique" style={{ ...baseStyle, ...style }}>
      <div className="back"></div>
      <div className="left"></div>
      <div className="right"></div>
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="front"></div>
    </div>
  );
}
