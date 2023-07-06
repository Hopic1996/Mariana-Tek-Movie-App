from fastapi import APIRouter, Depends
from ..middleware.auth import get_token_header
import os
import json

router = APIRouter(
    tags=["pdf-header"],
    # dependencies=[Depends(get_token_header)],
    responses={404: {"description": "Not found"}},
)

# Route to fetch the movie data from the external API
@router.get("/movies")
async def get_movies():
    file_path = os.path.join(os.path.dirname(__file__), "../static-data/movies.json")
    with open(file_path) as json_file:
        movies = json.load(json_file)
    return movies
