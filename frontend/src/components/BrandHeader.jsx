import Icon from "./Icon.jsx";

function BrandHeader({ apiStatus }) {
  const statusText = {
    checking: "Connecting to service",
    online: "Service is ready",
    offline: "Service unavailable",
  };

  return (
    <header className="topbar">
      <a className="brand" href="#" aria-label="Mindful home">
        <span className="brand-mark">
          <Icon name="sparkle" size={21} />
        </span>
        <span>
          mindful<span className="brand-period">.</span>
        </span>
      </a>
      <div className={`api-status api-status-${apiStatus}`} role="status">
        <span className="status-dot" />
        {statusText[apiStatus]}
      </div>
    </header>
  );
}

export default BrandHeader;
