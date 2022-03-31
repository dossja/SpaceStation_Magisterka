from files import db
import json


class ReportType(db.Model):
    __tablename__ = 'report_type'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    description = db.Column(db.String(50), nullable=False)
    reports = db.relationship(
        "Report", backref="report_type")

    def __repr__(self):
        json_value = {
            "id": self.id,
            "description": self.description
        }
        return json.dumps(json_value, default=str)
        # return f"{{\"id\": \"{self.id}\", \"description\": \"{self.description}\"}}"
