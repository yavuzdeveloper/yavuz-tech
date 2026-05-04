import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0b0d",
        border: "1px solid #1e2128",
        borderRadius: "14px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      <span
        style={{
          fontSize: 32,
          fontWeight: 800,
          fontFamily: "system-ui, -apple-system, 'Syne', sans-serif",
          letterSpacing: "-1px",
          background: "linear-gradient(135deg, #a8ff3e 0%, #38bdf8 100%)",
          backgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 2px rgba(168,255,62,0.2)",
        }}
      >
        YT
      </span>
    </div>,
    {
      ...size,
    },
  );
}
