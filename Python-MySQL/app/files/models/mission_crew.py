from files import db
import json


class MissionCrew(db.Model):
    __tablename__ = 'mission_crew'
    user_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), primary_key=True)
    mission_id = db.Column(db.Integer, db.ForeignKey(
        'missions.id'), primary_key=True)

    def __repr__(self):
        json_value = {
            "user_id": self.user_id,
            "mission_id": self.mission_id
        }
        return json.dumps(json_value, default=str)
        # return f"{{\"user_id\": \"{self.user_id}\", \"mission_id\": \"{self.mission_id}\"}}"
