import AboutYouFields from "./AboutYouFields.jsx";
import EverydayBalanceFields from "./EverydayBalanceFields.jsx";
import Icon from "./Icon.jsx";
import SocialHabitsFields from "./SocialHabitsFields.jsx";

function StudentForm({ form, error, isSubmitting, onChange, onSubmit }) {
  return (
    <section className="form-card" aria-labelledby="form-title">
      <div className="card-heading">
        <div>
          <span className="section-kicker">PERSONAL CHECK-IN</span>
          <h2 id="form-title">Tell us about your routine</h2>
          <p>All fields are required for an accurate estimate.</p>
        </div>
        <span className="step-pill">12 details</span>
      </div>

      <form onSubmit={onSubmit}>
        <AboutYouFields form={form} onChange={onChange} />
        <SocialHabitsFields form={form} onChange={onChange} />
        <EverydayBalanceFields form={form} onChange={onChange} />

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        <button
          className="submit-button flex items-center justify-center"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner" />
              Calculating your score…
            </>
          ) : (
            <>
              Get my wellbeing score
              <Icon name="arrow" size={19} />
            </>
          )}
        </button>
        <p className="privacy-note">
          <Icon name="shield" size={15} />
          Your information is only used to generate this estimate.
        </p>
      </form>
    </section>
  );
}

export default StudentForm;
