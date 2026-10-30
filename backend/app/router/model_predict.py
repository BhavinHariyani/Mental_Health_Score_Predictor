from fastapi import APIRouter
from app.schemas.Student import Student, PredictionResponse
from app.util.model import load_model
import pandas as pd

router = APIRouter()


@router.get("/")
def home():
    return {"message": "Welcome To Mental Health Score Predictor"}


@router.get('/health')
def helath():
    return {}

@router.post("/predict", response_model=PredictionResponse)
def predict(data: Student):

    input_df = pd.DataFrame(
        {
            "Age": [data.age],
            "Gender": [data.gender],
            "Academic_Level": [data.academic_level],
            "Most_Used_Platform": [data.most_used_platform],
            "Purpose_Of_Use": [data.purpose_of_use],
            "Avg_Daily_Usage_Hours": [data.avg_daily_usage_hours],
            "Daily_Unlocks": [data.daily_unlocks],
            "Study_Hours": [data.study_hours],
            "Physical_Activity_Hours": [data.physical_activity_hours],
            "Sleep_Hours_Per_Night": [data.sleep_hours_per_night],
            "Stress_Level": [data.stress_level],
            "Grouped_country": [data.Grouped_country],
        }
    )

    model = load_model()
    prediction = model.predict(input_df)[0]

    return PredictionResponse(
        predicted_mental_health_score=(
            round(prediction, 2) if prediction else "Score Not Predict"
        )
    )
