from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_static("index")
	
@app.route("/")
def contact_us():
    return render_static("contact_us")

@app.route("/")
def accommodations():
    return render_static("accommodations")

@app.route("/")
def residence_students():
    return render_static("residence_students")


@app.route("/<string:page_name>/")
def render_static(page_name):
    return render_template(f"{page_name}.html")


# https://stackoverflow.com/questions/419163/what-does-if-name-main-do
if __name__ == "__main__":
    app.run()
