from files import db


class ReportType(db.Model):
    __tablename__ = 'report_type'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    description = db.Column(db.String(50), nullable=False)
    reports = db.relationship("Reports")

    def __repr__(self):
        content = {'id': self.id, 'description': self.description}
        return f"{content}"