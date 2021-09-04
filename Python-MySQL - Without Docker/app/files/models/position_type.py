from files import db


class PositionType(db.Model):
    __tablename__ = 'position_type'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f"{{\"id\": \"{self.id}\", \"name\": \"{self.name}\"}}"
