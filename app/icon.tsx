import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
        backgroundColor: "rgba(168,255,62,0.12)",
        borderRadius: "16px",
        padding: "3px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0b0d",
          borderRadius: "13px",
          border: "2px solid #a8ff3e",
        }}
      >
        <span
          style={{
            fontSize: 30,
            fontWeight: 800,
            fontFamily: "monospace",
            letterSpacing: "-2px",
            color: "#a8ff3e",
          }}
        >
          YT
        </span>
      </div>
    </div>,
    { ...size },
  );
}
