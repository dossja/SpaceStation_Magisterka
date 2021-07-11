from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configuring DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@172.17.0.1/space_station'
db = SQLAlchemy(app)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True)
    job = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return "<Name {self.name}>"


@app.route("/<name>/<surname>", methods=["POST", "GET"])
def add_user(name, surname):
    if request.method == "POST":
        u = Users()
        u.name = name
        u.surname = surname
        u.email = u.name + "." + u.surname + "@firm.com"
        u.job = "Cat"
        db.session.add(u)
        db.session.commit()

        return "<h1>Added</h1>"
    else:
        value = db.session.query(Users).filter_by(name=name).first()

        return f"<h1> {value.name} {value.surname} {value.email} {value.job}</h1>"


@app.route("/")
def index():
    return "<h1>HI</h1>"


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True, host="0.0.0.0")
