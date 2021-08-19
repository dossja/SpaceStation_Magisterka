import datetime
from files import db


class Mission(db.Model):
    __tablename__ = 'mission'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    start_date = db.Column(db.DateTime,  default=datetime.datetime.utcnow)
    end_date = db.Column(db.DateTime, nullable=True)
    description = db.Column(db.String(500), nullable=False)
    crew = db.relationship(
        "User", secondary=db.association_table, backref="mission_user")

    def __repr__(self):
        content = {'id': self.id, 'start_date': self.start_date,
                   'end_date': self.end_date, 'description': self.description}
        return f"{content}"
