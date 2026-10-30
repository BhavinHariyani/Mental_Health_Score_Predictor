import Icon from "./Icon.jsx";
import ScoreMeter from "./ScoreMeter.jsx";
import WellbeingSuggestions from "./WellbeingSuggestions.jsx";

function WellbeingResult({ result, form }) {
  const numericScore =
    typeof result === "number" && Number.isFinite(result) ? result : null;
  const scoreProgress =
    numericScore === null
      ? 0
      : Math.min(100, Math.max(0, (numericScore / 10) * 100));
  const scoreLabel =
    numericScore === null
      ? "Your result will appear here"
      : numericScore >= 7
        ? "Looking positive"
        : numericScore >= 4
          ? "Room to grow"
          : "Take a moment for yourself";

  return (
    <aside className="result-card" aria-live="polite">
      <div className="result-topline">
        <span className="result-icon">
          <Icon name="sparkle" size={20} />
        </span>
        <span className="section-kicker">YOUR SNAPSHOT</span>
      </div>

      <ScoreMeter score={numericScore} progress={scoreProgress} />

      <div className="score-summary">
        <h2>{scoreLabel}</h2>
        <p>
          {numericScore === null
            ? "Complete your check-in to see a personalized estimate based on your daily habits."
            : typeof result === "string"
              ? result
              : "A helpful starting point for reflecting on your everyday wellbeing."}
        </p>
      </div>

      <WellbeingSuggestions form={form} />

      <div className="result-divider" />
      <div className="insight-row">
        <span className="insight-icon">
          <Icon name="activity" size={18} />
        </span>
        <div>
          <strong>Built around your routine</strong>
          <span>Uses the habits and details you shared</span>
        </div>
        <Icon name="check" size={17} />
      </div>
      <div className="insight-row">
        <span className="insight-icon insight-icon-blue">
          <Icon name="clock" size={18} />
        </span>
        <div>
          <strong>A moment to check in</strong>
          <span>Small reflections can support self-awareness</span>
        </div>
        <Icon name="check" size={17} />
      </div>

      <div className="wellbeing-note">
        <span className="note-mark">“</span>
        <p>
          This score is an estimate, not a diagnosis. Your wellbeing is more
          than a number.
        </p>
      </div>
    </aside>
  );
}

export default WellbeingResult;
