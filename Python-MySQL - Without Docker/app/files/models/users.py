from files import db
from flask_login import UserMixin
# from files.models.reports import Report


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True)
    job = db.Column(db.String(50), nullable=False)
    manager = db.Column(db.Boolean, default=False)
    reports = db.relationship(
        "Report", backref="reporting_user")
    missions = db.relationship(
        "Mission", secondary=db.association_table, backref="users_mission")

    def __repr__(self):
        content = {'id': self.id, 'name': self.name, 'surname': self.surname,
                   'email': self.email, 'job': self.job, 'manager': self.manager}
        return f"{content}"
