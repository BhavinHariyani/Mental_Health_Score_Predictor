import { useEffect, useState } from "react";
import axios from "axios";
import BrandHeader from "./components/BrandHeader.jsx";
import PageIntro from "./components/PageIntro.jsx";
import StudentForm from "./components/StudentForm.jsx";
import WellbeingResult from "./components/WellbeingResult.jsx";
import "./App.css";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000"
).replace(/\/+$/, "");

const initialForm = {
  age: "21",
  gender: "Female",
  country: "India",
  academic_level: "Undergraduate",
  most_used_platform: "Instagram",
  purpose_of_use: "Entertainment",
  avg_daily_usage_hours: "4.5",
  daily_unlocks: "62",
  study_hours: "3.0",
  physical_activity_hours: "1.0",
  sleep_hours_per_night: "15.5",
  stress_level: "Medium",
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiStatus, setApiStatus] = useState("checking");

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(`${API_BASE_URL}/health`, {
        signal: controller.signal,
        timeout: 5000,
      })
      .then(() => setApiStatus("online"))
      .catch((requestError) => {
        if (!axios.isCancel(requestError)) setApiStatus("offline");
      });

    return () => controller.abort();
  }, []);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const payload = {
      ...form,
      age: Number(form.age),
      avg_daily_usage_hours: Number(form.avg_daily_usage_hours),
      daily_unlocks: Number(form.daily_unlocks),
      study_hours: Number(form.study_hours),
      physical_activity_hours: Number(form.physical_activity_hours),
      sleep_hours_per_night: Number(form.sleep_hours_per_night),
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/predict`, payload, {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
      });
      setResult(response.data.predicted_mental_health_score);
      setApiStatus("online");
    } catch (requestError) {
      if (requestError.response?.status === 422) {
        setError(
          "Some details were not accepted. Please check the fields and try again.",
        );
      } else if (requestError.response) {
        setError(
          `The prediction could not be completed (error ${requestError.response.status}). Please try again.`,
        );
      } else if (requestError.code === "ECONNABORTED") {
        setError("The request took too long. Check your connection and try again.");
      } else {
        setError(
          "We could not reach the prediction service. Make sure the backend is running at http://127.0.0.1:8000.",
        );
        setApiStatus("offline");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="app-shell">
      <BrandHeader apiStatus={apiStatus} />
      <main className="page-content">
        <PageIntro />
        <div className="workspace-grid">
          <StudentForm
            form={form}
            error={error}
            isSubmitting={isSubmitting}
            onChange={updateField}
            onSubmit={handleSubmit}
          />
          <WellbeingResult result={result} form={form} />
        </div>
        <footer className="page-footer">
          <span>Made for a more mindful you.</span>
          <span>Take care of yourself, one day at a time.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
