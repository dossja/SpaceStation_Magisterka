from files import db
import json


class PositionType(db.Model):
    __tablename__ = 'position_type'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    users = db.relationship("User", backref="position_type")

    def __repr__(self):
        json_value = {
            "id": self.id,
            "name": self.name
        }
        return json.dumps(json_value, default=str)
        # return f"{{\"id\": \"{self.id}\", \"name\": \"{self.name}\"}}"
