from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI(
    title="District 1 Climate Action Research Website",
)
df = pd.read_csv("backend/district1_climate_ranked.csv")

print(df)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "District 1 Climate Data API is running!"}

@app.get("/climate-data")
def get_climate_data():
    clean_df = df.fillna(0)
    return clean_df.to_dict(orient="records")