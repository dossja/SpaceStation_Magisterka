from flask import jsonify, request

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
    # name = datas.get('name', '')
    # if name is '':
    #     return jsonify(error="name is empty"), 400
    # surname = datas.get('surname', '')
    # if surname is '':
    #     return jsonify(error="surname is empty"), 400
    # job = datas.get('job', '')
    # if job is '':
    #     return jsonify(error="job is empty"), 400

    # u = User()
    # u.name = name
    # u.surname = surname
    # u.email = f"{name}.{surname}@firm.com"
    # u.job = job

    # db.session.add(u)
    # db.session.commit()

    return "<h1>SUCCESS</h1>"


@app.route('/users/<string:id>', methods=['GET'])
def get_user(id):
    user = User.query.filter(User.id.ilike(id)).first()
    if user is not None:
        return "<h1>SUCCESS</h1>"
    return jsonify(error="user not found"), 404
