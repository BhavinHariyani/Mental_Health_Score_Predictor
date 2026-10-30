import FormField from "./FormField.jsx";

function EverydayBalanceFields({ form, onChange }) {
  return (
    <section className="form-section form-section-last">
      <div className="form-section-title">
        <span className="section-number">03</span>
        <h3>Your everyday balance</h3>
      </div>
      <div className="field-grid">
        <FormField label="Study time per day" htmlFor="study_hours">
          <div className="input-wrap">
            <input
              id="study_hours"
              name="study_hours"
              type="number"
              min="0"
              max="24"
              step="0.1"
              value={form.study_hours}
              onChange={onChange}
              required
            />
            <span className="input-suffix">hours</span>
          </div>
        </FormField>
        <FormField
          label="Physical activity per day"
          htmlFor="physical_activity_hours"
        >
          <div className="input-wrap">
            <input
              id="physical_activity_hours"
              name="physical_activity_hours"
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={form.physical_activity_hours}
              onChange={onChange}
              required
            />
            <span className="input-suffix">hours</span>
          </div>
        </FormField>
        <FormField label="Sleep per night" htmlFor="sleep_hours_per_night">
          <div className="input-wrap">
            <input
              id="sleep_hours_per_night"
              name="sleep_hours_per_night"
              type="number"
              min="0"
              max="24"
              step="0.1"
              value={form.sleep_hours_per_night}
              onChange={onChange}
              required
            />
            <span className="input-suffix">hours</span>
          </div>
        </FormField>
        <FormField
          label="How would you describe your stress?"
          htmlFor="stress_level"
        >
          <select
            id="stress_level"
            name="stress_level"
            value={form.stress_level}
            onChange={onChange}
            required
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Very High</option>
          </select>
        </FormField>
      </div>
    </section>
  );
}

export default EverydayBalanceFields;
