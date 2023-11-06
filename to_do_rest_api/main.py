import uvicorn


if __name__ == "__main__":
    print('App started')
    uvicorn.run("app.main:app", reload=True)