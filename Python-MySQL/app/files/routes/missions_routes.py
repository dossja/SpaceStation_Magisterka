from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.mission import Mission
import datetime as dt


@app.route("/missions", methods=["GET"])
def get_missions():
    missions = Mission.query.all()

    return jsonify(f"{missions}"), 200


@app.route("/missions/<string:id>/crew", methods=["GET"])
def get_mission_id_crew(id):
    missions = Mission.query.get(id)

    return jsonify(f"{missions.return_crew()}"), 200


@app.route("/missions/add", methods=['POST'])
def missions_add():
    missions = Mission.query.order_by(Mission.id.desc()).first()

    m = Mission()
    m.start_date = missions.end_date

    timedelta = dt.timedelta(weeks=8)
    m.end_date = m.start_date + timedelta

    db.session.add(m)
    db.session.commit()

    return jsonify(f"{m}"), 200
