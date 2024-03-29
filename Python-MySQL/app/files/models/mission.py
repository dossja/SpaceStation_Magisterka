import imp
from files import db
import json


class Mission(db.Model):
    __tablename__ = 'missions'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    start_date = db.Column(db.DateTime, nullable=True)
    end_date = db.Column(db.DateTime, nullable=True)
    crew = db.relationship("User", secondary="mission_crew", backref="mission")

    def __repr__(self):
        if self.crew:
            crew = True
        else:
            crew = False

        json_value = {
            "id": self.id,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "crew": crew
        }

        return json.dumps(json_value, default=str)
        # return f"{{\"id\": \"{self.id}\", \"start_date\": \"{self.start_date}\", \"end_date\": \"{self.end_date}\", \"crew\": \"{crew}\"}}"

    def output(self):
        if self.crew:
            crew = True
        else:
            crew = False
        return {
            "id": self.id,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "crew": crew
        }

    def return_crew(self):

        return f"{self.crew}"
