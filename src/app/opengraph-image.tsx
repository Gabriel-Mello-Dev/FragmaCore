import { ImageResponse } from "next/og";

export const alt = "Fragma Core";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0C0B0A", color: "#EDE8DC" }}>
        <div style={{ width: 120, height: 3, background: "#C8A04C", marginBottom: 40 }} />
        <div style={{ fontSize: 96, fontWeight: 700 }}>Fragma Core</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#9A9486" }}>Fragmentos que se unem. Códigos que se transformam.</div>
      </div>
    ),
    size,
  );
}
