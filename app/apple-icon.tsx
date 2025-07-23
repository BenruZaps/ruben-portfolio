import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 80,
        background: "linear-gradient(135deg,rgb(8, 129, 85) 0%, rgb(10, 167, 115) 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
          borderRadius: "20px",
        }}
      />
      RS
    </div>,
    {
      ...size,
    },
  )
}
