import FormField from "./FormField.jsx";

const countries = [
  "Other",
  "India",
  "USA",
  "Canada",
  "Australia",
  "UK",
  "Germany",
  "Mexico",
  "Turkey",
  "France",
];

function AboutYouFields({ form, onChange }) {
  return (
    <section className="form-section">
      <div className="form-section-title">
        <span className="section-number">01</span>
        <h3>A bit about you</h3>
      </div>
      <div className="field-grid field-grid-about">
        <FormField label="Your age" htmlFor="age">
          <div className="input-wrap">
            <input
              id="age"
              name="age"
              type="number"
              min="1"
              max="120"
              step="1"
              value={form.age}
              onChange={onChange}
              required
            />
            <span className="input-suffix">years</span>
          </div>
        </FormField>
        <FormField label="Gender" labelId="gender-label">
          <div
            className="choice-row"
            role="radiogroup"
            aria-labelledby="gender-label"
          >
            {["Female", "Male"].map((gender) => (
              <label
                className={`choice-card ${form.gender === gender ? "selected" : ""}`}
                key={gender}
              >
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={form.gender === gender}
                  onChange={onChange}
                />
                <span className="radio-dot" />
                {gender}
              </label>
            ))}
          </div>
        </FormField>
        <FormField
          label="Country"
          htmlFor="country"
          hint="Choose a supported country"
        >
          <select
            id="country"
            name="country"
            value={form.country}
            onChange={onChange}
            required
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country === "USA"
                  ? "United States (USA)"
                  : country === "UK"
                    ? "United Kingdom (UK)"
                    : country}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Current study level" htmlFor="academic_level">
          <select
            id="academic_level"
            name="academic_level"
            value={form.academic_level}
            onChange={onChange}
            required
          >
            <option>Undergraduate</option>
            <option>Graduate</option>
            <option>High School</option>
          </select>
        </FormField>
      </div>
    </section>
  );
}

export default AboutYouFields;
