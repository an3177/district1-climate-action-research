import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

load_dotenv()

app = FastAPI(
    title="District 1 Climate Action Research Website",
)

df = pd.read_csv("backend/district1_climate_ranked.csv")

allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "District 1 Climate Data API is running!"}

@app.get("/cities")
def get_all_cities():
    clean_df = df.fillna(0)
    cities = []
    for _, row in clean_df.iterrows():
       city = {
            "city": row["city"],
            "tier": row["tier"],
            "average_rank": round(float(row["average_rank"]), 2),
            "ghg_per_capita_current": round(float(row["ghg_per_capita_current"]), 2),
            "progress_toward_target": round(float(row["progress_toward_target"]), 2),
            "expected_progress": round(float(row["expected_progress"]), 2),
            "on_track_own": bool(row["on_track_own"]),
            "on_track_ca": bool(row["on_track_ca"]),
            "benchmark_status": str(row["benchmark_status"]),
            "cap_score": float(row["cap_score"]),
            "ev_per_capita": round(float(row["ev_per_capita"]), 2),
            "goal_per_capita": round(float(row["goal_per_capita"]), 2),
            "percent_of_ev_goal": round(float(row["percent_of_ev_goal"]), 2),
            "heat_pump_per_cap": round(float(row["heat_pump_per_cap"]), 2),
            "tree_canopy_coverage_percent": round(float(row["tree_canopy_coverage_percent"]), 1),
            "ghg_rank": int(row["ghg_rank"]),
            "ev_rank": int(row["ev_rank"]),
            "cap_rank": int(row["cap_rank"]),
            "hp_rank": int(row["hp_rank"]),
            "canopy_rank": int(row["canopy_rank"])
       }
       cities.append(city)

    return cities

