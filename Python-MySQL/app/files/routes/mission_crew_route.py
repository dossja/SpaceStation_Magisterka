from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.mission_crew import MissionCrew


@app.route("/mission_crew", methods=["GET"])
def get_mission_crew():
    mission_crew = MissionCrew.query.all()

    return jsonify(f"{mission_crew}"), 200


@app.route("/mission_crew/add", methods=["POST"])
def add_mission_crew():
    datas = request.get_json()

    mission_id = datas.get('mission_id', '')
    if mission_id == '':
        return jsonify(error="mission_id is empty"), 400

    user_id = datas.get('user_id', '')
    if user_id == '':
        return jsonify(error="user_id is empty"), 400

    mission_crew = []

    for user in user_id:
        print(repr(user))
        mc = MissionCrew()
        mc.mission_id = mission_id
        mc.user_id = user
        mission_crew.append(mc)
        db.session.add(mc)
        db.session.commit()

    return jsonify(f"{mission_crew}"), 200


@app.route('/mission_crew/mission/<string:id>', methods=['GET'])
def get_mission_crew_mission(id):
    mission_crew = MissionCrew.query.filter_by(mission_id=id).all()
    if mission_crew is not None:
        return jsonify(f"{mission_crew}"), 200
    return jsonify(error="mission_crew not found"), 404


@app.route('/mission_crew/user/<string:id>', methods=['GET'])
def get_mission_crew_user(id):
    mission_crew = MissionCrew.query.filter_by(user_id=id).all()
    if mission_crew is not None:
        return jsonify(f"{mission_crew}"), 200
    return jsonify(error="mission_crew not found"), 404
