from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.incidents import Incident


@app.route("/incidents", methods=["GET"])
def get_incidents():
    incidents = Incident.query.all()

    return jsonify(f"{incidents}"), 200


@app.route("/incidents/add", methods=["POST"])
def add_incidents():
    datas = request.get_json()

    report_id = datas.get('report_id', '')
    if report_id == '':
        return jsonify(error="report_id is empty"), 400

    operating_user_id = datas.get('operating_user_id', '')
    if operating_user_id == '':
        return jsonify(error="operating_user_id is empty"), 400

    i = Incident()
    i.report_id = report_id
    i.operating_user_id = operating_user_id

    db.session.add(i)
    db.session.commit()

    return jsonify(f"{i}"), 201


@app.route('/incidents/report/<string:id>', methods=['GET'])
def get_incident_report(id):
    incindent = Incident.query.filter_by(report_id=id).first()
    if incindent is not None:
        return jsonify(f"{incindent}"), 200
    return jsonify(error="incident not found"), 404
