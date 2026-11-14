import { ImageResponse } from "next/og";

export const alt = "cirround — tap or type to paint the screen with sound";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LETTERS: [string, string][] = [
  ["c", "#16a085"], ["i", "#2980b9"], ["r", "#9b59b6"], ["r", "#9b59b6"],
  ["o", "#8e44ad"], ["u", "#27ae60"], ["n", "#8e44ad"], ["d", "#e74c3c"],
];

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#000", color: "#fff", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 200, fontWeight: 700, letterSpacing: "-0.04em" }}>
          {LETTERS.map(([letter, color], index) =>
            letter === "o"
              ? <div key={index} style={{ width: 104, height: 104, margin: "0 8px", borderRadius: 999, background: color }} />
              : <span key={index} style={{ color }}>{letter}</span>,
          )}
        </div>
        <div style={{ fontSize: 40, color: "#9a9a9a" }}>Tap or type to paint the screen with sound</div>
      </div>
    ),
    size,
  );
}
