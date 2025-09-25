import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const gradient = "linear-gradient(90deg, #000E1C 0%, #002041 100%)";
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: gradient,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -1,
            color: "#CAB167",
            textAlign: "center",
          }}
        >
          Sportingbet ONE
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: "white",
            opacity: 0.85,
          }}
        >
          O jogo além do jogo
        </div>
      </div>
    ),
    { ...size }
  );
}
