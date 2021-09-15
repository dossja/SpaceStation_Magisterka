from files import db
from flask_login import UserMixin
# from files.models.reports import Report


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True)
    # job = db.Column(db.String(50), nullable=False)
    position_type_id = db.Column(db.Integer, db.ForeignKey("position_type.id"))
    manager = db.Column(db.Boolean, default=False)
    reports = db.relationship(
        "Report", backref="reporting_user")
    incidents_id = db.relationship(
        "Report", secondary="incidents", backref="user")
    # incidents = db.relationship("Report", back_populates="operating_user")

    def __repr__(self):

        return f"{{\"id\": \"{self.id}\", \"name\": \"{self.name}\", \"surname\": \"{self.surname}\", \"email\": \"{self.email}\", \"position_type_id\": \"{self.position_type_id}\", \"position_type\": \"{self.position_type.name}\", \"manager\": \"{self.manager}\"}}"
