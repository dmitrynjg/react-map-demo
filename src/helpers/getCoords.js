export default function getCoords(payload) {
  return payload && payload.points && Array.isArray(payload.points)
    ? payload.points.map((wayPoint) => [+wayPoint.lat, +wayPoint.lon])
    : [];
}
