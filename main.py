import time

from fastapi import FastAPI, File, UploadFile
from fastapi.staticfiles import StaticFiles
import shutil
from fastapi.responses import RedirectResponse, PlainTextResponse, HTMLResponse, FileResponse

app = FastAPI()




@app.post("/upload_file")
async def upload_file(file: UploadFile):
    # file2 = await file.read()
    # with open(file.filename, "wb") as f:
    #     f.write(file2)
    time.sleep(3)
    return {"filename": file.content_type}
    # return RedirectResponse("/", status_code=302)


@app.get("/")
def root():
    return FileResponse("templates/index.html")

# @app.get("/")
# async def root():
#     with open("templates/index.html", "r") as f:
#         content = f.read()
#     return HTMLResponse(content)

# @app.post("/")
# async def post_root():
#     return RedirectResponse("/", status_code=302)


app.mount("/", StaticFiles(directory="templates", html=True), name="static")
