from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.users import User

# from . import api
from .. import db, app

from ..models.users import User
# from ..schemas.user import user_schema, users_schema


@app.route("/")
def index():
    return "<h1>HI2</h1>"


@app.route("/users/signup", methods=['POST'])
def signup_user():
    datas = request.get_json()
    print(datas)
    name = datas.get('name', '')
    if name == '':
        return jsonify(error="name is empty"), 400
    surname = datas.get('surname', '')
    if surname == '':
        return jsonify(error="surname is empty"), 400
    job = datas.get('job', '')
    if job == '':
        return jsonify(error="job is empty"), 400

    u = User()
    u.name = name
    u.surname = surname
    u.email = f"{name}.{surname}@firm.com"
    u.job = job

    db.session.add(u)
    db.session.commit()

    return "<h1>SUCCESS</h1>"


@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()

    return f"{users}"


@app.route('/users/<string:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if user is not None:
        return f"<h1>{user} \n{user.reports}</h1>"
    return jsonify(error="user not found"), 404
