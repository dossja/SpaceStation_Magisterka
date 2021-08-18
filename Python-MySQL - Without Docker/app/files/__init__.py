from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost:3306/space_station'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@127.0.0.1/space_station'
db = SQLAlchemy(app)

login_manager = LoginManager(app)

# @login_manager.user_loader
# def load_user(id):
#     return User.query.get(int(id))

# login_manager = LoginManager(app)
# login_manager.login_view = 'login'
# login_manager.login_message_category = 'info'
from files.routes import user_routes, report_routes

db.create_all()
