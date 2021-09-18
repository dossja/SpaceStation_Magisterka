from files import db

mission_crew = db.Table('mission_crew', db.Column('user_id', db.Integer, db.ForeignKey(
    'users.id')), db.Column('mission_id', db.Integer, db.ForeignKey('missions.id')))


class Mission(db.Model):
    __tablename__ = 'missions'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    start_date = db.Column(db.DateTime, nullable=True)
    end_date = db.Column(db.DateTime, nullable=True)
    crew = db.relationship("User", secondary=mission_crew, backref="missions")

    def __repr__(self):

        return f"{{\"id\": \"{self.id}\", \"start_date\": \"{self.start_date}\",\"end_date\": \"{self.end_date}\"}}"
