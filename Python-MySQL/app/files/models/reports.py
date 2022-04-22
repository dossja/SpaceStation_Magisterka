import datetime
from files import db
# from flask import jsonify
import json
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
    report_status_id = db.Column(db.Integer, db.ForeignKey("report_status.id"))

    operating_user_id = db.relationship(
        "User", secondary="incidents", backref="report")

    def __repr__(self):
        if self.operating_user_id:
            operating_user_id = self.operating_user_id[0].id,
            operating_user = f"{self.operating_user_id[0].name} {self.operating_user_id[0].surname}"
        else:
            operating_user_id = ""
            operating_user = ""

        if self.end_date:
            end_date = self.end_date
        else:
            end_date = "not specified"

        json_value = {
            "id": self.id,
            "description": self.description,
            "submit_date": self.submit_date,
            "end_date": end_date,
            "title": self.title,
            "reporting_user_id": self.reporting_user_id,
            "reporting_user": f"{self.reporting_user.name} {self.reporting_user.surname}",
            "report_status_id": self.report_status_id,
            "report_status": self.report_status.description,
            "report_type_id": self.report_type_id,
            "report_type": self.report_type.description,
            "operating_user_id": operating_user_id,
            "operating_user": operating_user
        }

        return json.dumps(json_value, default=str)

        # return f"{{\"id\": \"{self.id}\", \"description\": \"{self.description}\", \"submit_date\": \"{self.submit_date}\", \"end_date\": \"{end_date}\", \"title\": \"{self.title}\", \"reporting_user_id\": \"{self.reporting_user_id}\", \"reporting_user\": \"{self.reporting_user.name} {self.reporting_user.surname}\",\"report_status_id\": \"{self.report_status_id}\", \"report_status\": \"{self.report_status.description}\", \"report_type_id\": \"{self.report_type_id}\", \"report_type\": \"{self.report_type.description}\", {operating_user}}}"
