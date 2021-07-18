from files import db


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True)
    job = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f"Name {self.name}\nSurname {self.surname}\nEmail {self.email}"
