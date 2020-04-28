from flask import Flask, render_template, url_for

app = Flask(__name__)
#app.config['SECRET_KEY'] = '5y78e59wt9d6633s11a78994y3e2c6'


@app.route("/")
def home():
    return render_static("index")
	
@app.route("/Contact us")
def contact_us():
    return render_static("contact_us", title='Contact us')

@app.route("/Accommodations")
def accommodations():
    return render_static("accommodations", title='Accommodations')

@app.route("/Residence Students'")
def residence_students():
    return render_static("residence_students", title='Residence Students')
	
@app.route("/Student Register")
def Student_Register():
	form = StudentRegistrationForm()
	return render_static("Student_Register.html", title='Student Register')
	
@app.route("/Student Login")
def Student_Login():
	form = StudentLoginForm()
	return render_static("Student_Login.html", title='Student Login')


@app.route("/<string:page_name>/")
def render_static(page_name):
    return render_template(f"{page_name}.html")


# https://stackoverflow.com/questions/419163/what-does-if-name-main-do
# AppId: 5y78e59wt9d6633s11a78994y3e2c6

if __name__ == "__main__":
    app.run()
