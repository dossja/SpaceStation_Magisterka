from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.reports import Report

from .. import db, app


@app.route("/reports", methods=["GET"])
def get_reports():
    reports = Report.query.all()

    return f"{reports}"


@app.route('/reports/<string:id>', methods=['GET'])
def get_report(id):
    report = Report.query.get(id)
    if report is not None:
        return f"<h1>{report}</h1>"
    return jsonify(error="report not found"), 404


@app.route("/reports/add", methods=['POST'])
def add_report():
    datas = request.get_json()
    description = datas.get('description', '')
    if description == '':
        return jsonify(error="description is empty"), 400
    reporting_user_id = datas.get('reporting_user_id', '')
    if reporting_user_id == '':
        return jsonify(error="reporting_user_id is empty"), 400

    r = Report()
    r.description = description
    r.reporting_user_id = reporting_user_id

    db.session.add(r)
    db.session.commit()

    return "<h1>Added</h1>"
