from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.users import User
from flask_login import login_user

# from . import api
from .. import db, app

# from ..models.users import User
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
    position_type_id = datas.get('position_type_id', '')
    if position_type_id == '':
        return jsonify(error="position_type_id is empty"), 400
    manager = datas.get('manager', '')

    u = User()
    u.name = name
    u.surname = surname
    u.email = f"{name}.{surname}@firm.com"
    u.position_type_id = position_type_id
    u.manager = manager

    db.session.add(u)
    db.session.commit()

    return jsonify(f"{u}"), 200


@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()

    return jsonify(f"{users}"), 200


@app.route('/users/<string:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)

    if user is not None:
        return jsonify(f"{user}"), 200
    return jsonify(error="user not found"), 404


@app.route('/users/update/<string:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    datas = request.get_json()

    name = datas.get('name', '')
    surname = datas.get('surname', '')
    email = datas.get('email', '')
    position_type_id = datas.get('position_type_id', '')
    manager = datas.get('manager', '')

    user.name = name
    user.surname = surname
    user.email = f"{name}.{surname}@firm.com"
    user.position_type_id = position_type_id
    user.manager = manager

    db.session.add(user)
    db.session.commit()

    if user is not None:
        return jsonify(f"{user}"), 200
    return jsonify(error="user not updated"), 404


@app.route('/users/login', methods=["POST"])
def login():
    datas = request.get_json()
    email = datas.get('email', '')
    if email == '':
        return jsonify(error="email is empty"), 400

    user = User.query.filter_by(email=email).first()

    if user is not None:
        # login_user(user, remember=True)
        return jsonify(f"{user}"), 200
    return jsonify(error="user not found"), 404


@app.route('/users/delete/<string:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.filter_by(id=id).delete()
    db.session.commit()

    return jsonify(f"User deleted"), 200
