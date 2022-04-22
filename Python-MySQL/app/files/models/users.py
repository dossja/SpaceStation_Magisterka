from files import db
from flask_login import UserMixin
import json
# from files.models.reports import Report


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True)
    position_type_id = db.Column(db.Integer, db.ForeignKey("position_type.id"))
    manager = db.Column(db.Boolean, default=False)

    reports = db.relationship(
        "Report", backref="reporting_user")
    incidents_id = db.relationship(
        "Report", secondary="incidents", backref="user")
    mission_id = db.relationship(
        "Mission", secondary="mission_crew", backref="user")

    def __repr__(self):
        json_value = {
            'id': self.id,
            'name': self.name,
            'surname': self.surname,
            'email': self.email,
            'position_type_id': self.position_type_id,
            'position_type': self.position_type.name,
            'manager': self.manager
        }
        return f"{json_value}"
        # return json.dumps(json_value, default=str)

    # return f"{{\"id\": \"{self.id}\", \"name\": \"{self.name}\", \"surname\": \"{self.surname}\", \"email\": \"{self.email}\", \"position_type_id\": \"{self.position_type_id}\", \"position_type\": \"{self.position_type.name}\", \"manager\": \"{self.manager}\"}}"
