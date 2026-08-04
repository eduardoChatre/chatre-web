import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#030303" }}>
      <div style={{ width: 610, height: 610, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ width: 430, height: 430, display: "flex", border: "62px solid #ff5a00", borderRightColor: "transparent", borderRadius: "50%", transform: "rotate(-8deg)" }} />
        <div style={{ width: 76, height: 76, display: "flex", position: "absolute", top: 44, right: 70, borderRadius: "50%", background: "#ff5a00" }} />
        <div style={{ width: 76, height: 76, display: "flex", position: "absolute", right: 28, bottom: 91, borderRadius: "50%", background: "#ff5a00" }} />
        <div style={{ width: 104, height: 16, display: "flex", position: "absolute", right: 72, top: 150, borderRadius: 8, background: "#ff5a00", transform: "rotate(-42deg)" }} />
        <div style={{ width: 108, height: 16, display: "flex", position: "absolute", right: 61, bottom: 180, borderRadius: 8, background: "#ff5a00", transform: "rotate(42deg)" }} />
      </div>
    </div>,
    {
      width: 1024,
      height: 1024,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": 'attachment; filename="chatre-meta-app-icon-1024.png"',
        "Cache-Control": "public, max-age=86400, immutable",
      },
    },
  );
}
