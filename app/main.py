from flask import Flask, render_template
import os

app = Flask(__name__)


@app.route("/")
def hello():
    return render_static("helloWorld")


@app.route("/<string:page_name>/")
def render_static(page_name):
    template = f"{os.getcwd()}/templates/{page_name}.html"
    print(template)
    return render_template(f"{page_name}.html")


# https://stackoverflow.com/questions/419163/what-does-if-name-main-do
if __name__ == "__main__":
    app.run()
