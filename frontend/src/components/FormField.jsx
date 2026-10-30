function FormField({ label, hint, htmlFor, labelId, children, className = "" }) {
  return (
    <div className={`field ${className}`}>
      <div className="field-heading">
        <label className="field-label" htmlFor={htmlFor} id={labelId}>
          {label}
        </label>
        {hint && <span className="field-hint">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

export default FormField;
