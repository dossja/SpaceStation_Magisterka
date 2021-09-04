import datetime
from files import db
# from files.models.users import User


class Report(db.Model):
    __tablename__ = 'reports'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(50), nullable=False)
    submit_date = db.Column(db.DateTime,  default=datetime.datetime.utcnow)
    end_date = db.Column(db.DateTime, nullable=True)
    description = db.Column(db.String(500), nullable=False)
    reporting_user_id = db.Column(
        db.Integer, db.ForeignKey("users.id"))
    report_type_id = db.Column(db.Integer, db.ForeignKey("report_type.id"))
    # operating_user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # operating_user = db.relationship("User", back_populates="reports")

    def __repr__(self):

        return f"{{\"id\": \"{self.id}\", \"description\": \"{self.description}\", \"submit_date\": \"{self.submit_date}\", \"end_date\": \"{self.end_date}\", \"title\": \"{self.title}\", \"reporting_user_id\": \"{self.reporting_user_id}\", \"reporting_user\": \"{self.reporting_user.name} {self.reporting_user.surname}\", \"report_type_id\": \"{self.report_type_id}\", \"report_type\": \"{self.report_type.description}\"}}"
