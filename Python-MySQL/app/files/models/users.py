from files import db
# from files.models.reports import Report


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True)
    job = db.Column(db.String(50), nullable=False)
    reports = db.relationship(
        "Report", backref="reporting_user")

    def __repr__(self):
        content = {'id': self.id, 'name': self.name,
                   'surname': self.surname, 'email': self.email, 'job': self.job}
        return f"{content}"
