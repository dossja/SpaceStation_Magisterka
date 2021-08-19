import datetime
from files import db
from files.models.users import User


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
    # reporting_user = db.relationship(
    #     "User", back_populates="reports")

    def __repr__(self):
        content = {'id': self.id, 'submit_date': self.submit_date,
                   'end_date': self.end_date, 'description': self.description}
        return f"{content}"
