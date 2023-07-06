from fastapi import Header, HTTPException


async def get_token_header(x_token: str = Header()):
    if x_token != "fake-x-auth-token":
        raise HTTPException(status_code=400, detail="X-Auth-Token header invalid")