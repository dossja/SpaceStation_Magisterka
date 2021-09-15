from files import db


class Incident(db.Model):
    __tablename__ = 'incidents'
    operating_user_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), primary_key=True)
    report_id = db.Column(db.Integer, db.ForeignKey(
        'reports.id'), primary_key=True)

    def __repr__(self):

        return f"{{\"operating_user_id\": \"{self.operating_user_id}\", \"report_id\": \"{self.report_id}\"}}"
