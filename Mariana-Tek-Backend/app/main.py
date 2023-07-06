from fastapi import Depends, FastAPI
from .routers import MTMovies
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:8080",  # Add your frontend URL here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Marian Tek Sample Movie Search Assignment!!"}

app.include_router(MTMovies.router)
