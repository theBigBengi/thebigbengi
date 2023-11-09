"use client";

export function Analytics() {
  const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
  if (!token) {
    return null;
  }
  return (
    <script
      src='https://beamanalytics.b-cdn.net/beam.min.js'
      data-token='a6eaa6b4-8d01-47c3-9070-1623c992a85d'
      async
    ></script>
  );
}
