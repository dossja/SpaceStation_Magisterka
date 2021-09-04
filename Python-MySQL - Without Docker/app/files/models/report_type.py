from files import db


class ReportType(db.Model):
    __tablename__ = 'report_type'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    description = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f"{{\"id\": \"{self.id}\", \"description\": \"{self.description}\"}}"
