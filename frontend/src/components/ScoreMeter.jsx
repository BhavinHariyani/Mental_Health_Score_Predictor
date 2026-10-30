function createSegmentPath(startAngle, endAngle) {
  const centerX = 130;
  const centerY = 122;
  const outerRadius = 91;
  const innerRadius = 57;
  const point = (radius, angle) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radians),
      y: centerY - radius * Math.sin(radians),
    };
  };
  const outerStart = point(outerRadius, startAngle);
  const outerEnd = point(outerRadius, endAngle);
  const innerEnd = point(innerRadius, endAngle);
  const innerStart = point(innerRadius, startAngle);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

const segments = [
  { className: "gauge-segment-poor", start: 180, end: 137 },
  { className: "gauge-segment-low", start: 133, end: 92 },
  { className: "gauge-segment-fair", start: 88, end: 47 },
  { className: "gauge-segment-good", start: 43, end: 0 },
];

function ScoreMeter({ score, progress }) {
  const hasScore = typeof score === "number" && Number.isFinite(score);
  const pointerProgress = hasScore ? progress : 0;
  const pointerRotation = -90 + pointerProgress * 1.8;
  const scoreText = hasScore ? score.toFixed(1) : "0.0";

  return (
    <div className="gauge-wrap">
      <div className="gauge-heading">
        <span className="gauge-overline">YOUR WELLBEING SCORE</span>
        <span className="gauge-scale">SCORE SCALE · 0–10</span>
      </div>

      <svg
        className="semicircle-gauge"
        viewBox="0 0 260 158"
        role="img"
        aria-label={
          hasScore
            ? `Wellbeing score ${scoreText} out of 10`
            : "Your wellbeing score will appear here"
        }
      >
        <defs>
          <filter
            id="needleShadow"
            x="98"
            y="35"
            width="64"
            height="105"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="needleGradient" x1="124" y1="50" x2="138" y2="122">
            <stop stopColor="#4a405d" />
            <stop offset="1" stopColor="#211d2b" />
          </linearGradient>
        </defs>
        {segments.map((segment) => (
          <path
            className={segment.className}
            d={createSegmentPath(segment.start, segment.end)}
            key={segment.className}
          />
        ))}
        <path
          className="gauge-inner-face"
          d="M 73.1 122 A 56.9 56.9 0 0 1 186.9 122 Z"
        />
        <g
          className="gauge-needle"
          style={{
            transform: `rotate(${pointerRotation}deg)`,
            transformOrigin: "130px 122px",
          }}
        >
          <path
            className="gauge-needle-shadow"
            d="M 130 47 L 125 124 L 130 131 L 135 124 Z"
            transform="translate(2 3)"
            filter="url(#needleShadow)"
          />
          <path
            className="gauge-needle-shape"
            d="M 130 47 L 124 124 L 130 131 L 136 124 Z"
            fill="url(#needleGradient)"
          />
        </g>
        <circle className="gauge-hub-outer" cx="130" cy="122" r="13" />
        <circle className="gauge-hub-inner" cx="130" cy="122" r="5.5" />
      </svg>

      <div className="gauge-labels" aria-hidden="true">
        <span>POOR</span>
        <span>FAIR</span>
        <span>GOOD</span>
      </div>
      <div className="gauge-score-readout">
        <strong>{scoreText}</strong>
        <span>/ 10</span>
      </div>
    </div>
  );
}

export default ScoreMeter;
