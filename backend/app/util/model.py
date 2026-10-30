import joblib
from pathlib import Path

def load_model():
    current_dir = Path(__file__).resolve().parent
    model_path = current_dir.parent.parent / "models" / "Mental_Health_Model.pkl"

    model = joblib.load(model_path)
    return model

def grouped_countries(country : str) -> str:

    grouped_country = [
        "other",
        "india",
        "usa",
        "canada",
        "australia",
        "uk",
        "germany",
        "mexico",
        "turkey",
        "france",
    ]
    
    country = country.lower()
    if country in grouped_country:
        return country
    return 'other'