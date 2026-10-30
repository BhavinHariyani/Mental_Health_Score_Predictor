function PageIntro() {
  return (
    <section className="intro">
      <div className="intro-copy">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          A MINDFUL MOMENT, JUST FOR YOU
        </div>
        <h1>
          Check in with
          <br />
          <span>yourself.</span>
        </h1>
        <p>
          A little space to reflect on your day-to-day habits, and a fresh
          perspective on your wellbeing.
        </p>
        <div className="intro-meta">
          <span className="intro-meta-icon">✳</span>
          A gentle check-in · Takes about 2 minutes
        </div>
      </div>
      <div className="intro-art" aria-hidden="true">
        <div className="art-glow" />
        <div className="art-orbit art-orbit-outer" />
        <div className="art-orbit art-orbit-inner" />
        <div className="art-crystal">
          <span />
          <span />
          <span />
        </div>
        <div className="art-center">
          <svg viewBox="0 0 120 120" fill="none">
            <path
              d="M60 91c-18-11-32-26-32-43 0-12 8-20 19-20 8 0 13 5 13 12 0-7 6-12 14-12 11 0 19 8 19 20 0 17-14 32-33 43Z"
              fill="url(#heart)"
            />
            <path
              d="M43 57c4 8 10 12 18 12 7 0 13-4 17-12"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="heart"
                x1="33"
                y1="31"
                x2="95"
                y2="91"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D3E5B9" />
                <stop offset="1" stopColor="#8FB79A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="art-star art-star-one">✳</span>
        <span className="art-star art-star-two">✦</span>
        <span className="art-star art-star-three">✧</span>
        <div className="art-floating-bubble">✦</div>
        <div className="art-note">
          <span className="art-note-dot" />
          <span>
            <strong>Start where you are</strong>
            <small>There’s no right or wrong answer</small>
          </span>
        </div>
      </div>
    </section>
  );
}

export default PageIntro;
