from flask_wtf import FlaskForm
from wtforms  import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo


class StudentRegistrationForm(FlaskForm):
       username = StringField( 'Username (Student Number)' , validators=[DataRequired(), Length(min=2,max=20)])
	   email = StringField( 'Email', validators=[ DataRequired(), Email() ] )	   
	   password = PasswordField('Password', validators[DataRequired(),])
	   Confirm_Password = PasswordField('Confirm Password', validators=[DataRequired()], EqualTo('Password'))
	   submit = SubmitField('Register')
	   
	   
	   class StudentLoginForm(FlaskForm):
       username = StringField( 'Username (Student Number)' , validators=[DataRequired(), Length(min=2,max=20)])
	   password = PasswordField('Password', validators[DataRequired(),])
	   remember = BooleanField('Remember me')
	   submit = SubmitField('Login')