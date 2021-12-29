from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.position_type import PositionType


@app.route("/position_type", methods=["GET"])
def get_position_type():
    position_types = PositionType.query.all()

    return jsonify(f"{{\"positionTypes\" : {position_types}}}"), 200
