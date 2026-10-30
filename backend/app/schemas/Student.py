from pydantic import BaseModel, Field, computed_field
from typing import Annotated, Literal
from app.util.model import grouped_countries


class Student(BaseModel):
    age: Annotated[int, Field(..., description="Enter Your Age", gt=0, le=120)]
    gender: Annotated[
        Literal["Male", "Female"],
        Field(..., description="Enter Your Gender", examples=["Male"]),
    ]
    country: Annotated[
        str, Field(..., description="Enter Your Counry", examples=["Canada"])
    ]
    academic_level: Annotated[
        Literal["Undergraduate", "Graduate", "High School"],
        Field(..., description="Enter Your Academic Level", examples=["Undergraduate"]),
    ]
    most_used_platform: Annotated[
        Literal[
            "Facebook",
            "LinkedIn",
            "Instagram",
            "Snapchat",
            "Twitter",
            "YouTube",
            "TikTok",
            "LINE",
            "KakaoTalk",
            "VKontakte",
            "WhatsApp",
            "WeChat",
        ],
        Field(..., description="Enter Your Most Used Platform", examples=["Instagram"]),
    ]
    purpose_of_use: Annotated[
        Literal["Networking", "Education", "Entertainment", "News"],
        Field(
            ...,
            description="Enter Your Purpose for Platform Used",
            examples=["Entertainment"],
        ),
    ]
    avg_daily_usage_hours: Annotated[
        float, Field(..., description="Enter Your Average Daily Usege Hours",ge=0,le=24)
    ]
    daily_unlocks: Annotated[int, Field(..., description="Enter Your Daily Unlocks",ge=0)]
    study_hours: Annotated[float, Field(..., description="Enter Your Study Hours",ge=0,le=24)]
    physical_activity_hours: Annotated[
        float, Field(..., description="Enter Your Physical Activity Hours",ge=0,le=10)
    ]
    sleep_hours_per_night: Annotated[
        float, Field(..., description="Enter Your Sleep Hours Per Night",ge=0,le=24)
    ]
    stress_level: Annotated[
        Literal["Medium", "Low", "Very High", "High"],
        Field(..., description="Enter Your Stress Level", examples=["Medium"]),
    ]

    @computed_field
    @property
    def Grouped_country(self) -> str:
        return grouped_countries(self.country)

class PredictionResponse(BaseModel):
    predicted_mental_health_score : float | str