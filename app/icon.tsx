import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 18,
        background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(6, 182, 212, 0.3)",
      }}
    >
      JD
    </div>,
    {
      ...size,
    },
  )
}
