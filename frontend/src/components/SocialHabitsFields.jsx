import FormField from "./FormField.jsx";

const platforms = [
  "Instagram",
  "YouTube",
  "TikTok",
  "WhatsApp",
  "Facebook",
  "LinkedIn",
  "Snapchat",
  "Twitter",
  "LINE",
  "KakaoTalk",
  "VKontakte",
  "WeChat",
];

function SocialHabitsFields({ form, onChange }) {
  return (
    <section className="form-section">
      <div className="form-section-title">
        <span className="section-number">02</span>
        <h3>Your social media habits</h3>
      </div>
      <div className="field-grid">
        <FormField label="Most-used platform" htmlFor="most_used_platform">
          <select
            id="most_used_platform"
            name="most_used_platform"
            value={form.most_used_platform}
            onChange={onChange}
            required
          >
            {platforms.map((platform) => (
              <option key={platform}>{platform}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Main reason you use it" htmlFor="purpose_of_use">
          <select
            id="purpose_of_use"
            name="purpose_of_use"
            value={form.purpose_of_use}
            onChange={onChange}
            required
          >
            <option>Networking</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>News</option>
          </select>
        </FormField>
        <FormField
          label="Average daily usage"
          htmlFor="avg_daily_usage_hours"
          hint="Across all platforms"
        >
          <div className="input-wrap">
            <input
              id="avg_daily_usage_hours"
              name="avg_daily_usage_hours"
              type="number"
              min="0"
              max="24"
              step="0.1"
              value={form.avg_daily_usage_hours}
              onChange={onChange}
              required
            />
            <span className="input-suffix">hours</span>
          </div>
        </FormField>
        <FormField label="Daily phone unlocks" htmlFor="daily_unlocks">
          <div className="input-wrap">
            <input
              id="daily_unlocks"
              name="daily_unlocks"
              type="number"
              min="0"
              step="1"
              value={form.daily_unlocks}
              onChange={onChange}
              required
            />
            <span className="input-suffix">times</span>
          </div>
        </FormField>
      </div>
    </section>
  );
}

export default SocialHabitsFields;
