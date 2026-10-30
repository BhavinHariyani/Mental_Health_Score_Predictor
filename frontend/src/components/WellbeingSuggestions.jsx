function getSuggestions(form) {
  const suggestions = [];
  const usage = Number(form.avg_daily_usage_hours);
  const activity = Number(form.physical_activity_hours);
  const sleep = Number(form.sleep_hours_per_night);
  const study = Number(form.study_hours);

  if (form.stress_level === "High" || form.stress_level === "Very High") {
    suggestions.push({
      category: "RESET",
      title: "Make room for a reset",
      description:
        "Try a few minutes of slow breathing or grounding, and consider reaching out to someone you trust.",
      color: "lavender",
    });
  }

  if (sleep > 0 && sleep < 7) {
    suggestions.push({
      category: "REST",
      title: "Build a gentle wind-down",
      description:
        "A consistent bedtime routine and a little less screen time before bed may help support restful sleep.",
      color: "peach",
    });
  } else if (sleep > 10) {
    suggestions.push({
      category: "REST",
      title: "Notice your sleep patterns",
      description:
        "If long sleep is usual and you still feel tired, consider tracking how you feel and discussing it with a health professional.",
      color: "peach",
    });
  }

  if (usage >= 6) {
    suggestions.push({
      category: "DIGITAL BALANCE",
      title: "Add a screen-free pause",
      description:
        "Try stepping away between scrolling sessions—even a short offline break can create breathing room.",
      color: "blue",
    });
  }

  if (activity < 1) {
    suggestions.push({
      category: "MOVEMENT",
      title: "Make a little room to move",
      description:
        "A comfortable short walk, stretch, or movement break is a simple place to start.",
      color: "mint",
    });
  }

  if (study >= 6) {
    suggestions.push({
      category: "STUDY BALANCE",
      title: "Give focused work a breather",
      description:
        "Break study time into focused blocks with short pauses to reset your attention.",
      color: "gold",
    });
  }

  if (suggestions.length === 0) {
    suggestions.push(
      {
        category: "KEEP IT UP",
        title: "Protect your everyday balance",
        description:
          "Keep making space for rest, activities you enjoy, and time away from your phone.",
        color: "mint",
      },
      {
        category: "CHECK IN",
        title: "Notice what helps you feel well",
        description:
          "A quick check-in with yourself can help you spot the routines that work for you.",
        color: "lavender",
      },
    );
  }

  return suggestions.slice(0, 3);
}

function WellbeingSuggestions({ form }) {
  const suggestions = getSuggestions(form);

  return (
    <section className="suggestions-section" aria-labelledby="suggestions-title">
      <div className="suggestions-heading">
        <span className="suggestions-heading-mark" aria-hidden="true">
          ✳
        </span>
        <div>
          <h3 id="suggestions-title">Small steps for your wellbeing</h3>
          <p>Ideas based on the routine you shared</p>
        </div>
      </div>
      <div className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <article
            className={`suggestion-card suggestion-${suggestion.color}`}
            key={suggestion.category}
          >
            <span className="suggestion-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="suggestion-copy">
              <span className="suggestion-category">{suggestion.category}</span>
              <h4>{suggestion.title}</h4>
              <p>{suggestion.description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="suggestions-disclaimer">
        These are general wellbeing ideas, not medical advice or a guarantee of
        a different score.
      </p>
    </section>
  );
}

export default WellbeingSuggestions;
