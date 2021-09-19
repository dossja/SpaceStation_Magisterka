from files import db


class MissionCrew(db.Model):
    __tablename__ = 'mission_crew'
    user_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), primary_key=True)
    mission_id = db.Column(db.Integer, db.ForeignKey(
        'missions.id'), primary_key=True)

    def __repr__(self):

        return f"{{\"user_id\": \"{self.user_id}\", \"mission_id\": \"{self.mission_id}\"}}"
