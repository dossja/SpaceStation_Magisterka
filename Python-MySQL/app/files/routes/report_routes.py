from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.reports import Report

from .. import db, app


@app.route("/reports", methods=["GET"])
def get_reports():
    reports = Report.query.all()

    return jsonify(f"{reports}"), 200


@app.route('/reports/<string:id>', methods=['GET'])
def get_report(id):
    report = Report.query.get(id)
    if report is not None:
        return jsonify(f"{report}"), 200
    return jsonify(error="report not found"), 404


@app.route("/reports/add", methods=['POST'])
def add_report():
    datas = request.get_json()

    title = datas.get('title', '')
    if title == '':
        return jsonify(error="title is empty"), 400
    description = datas.get('description', '')
    if description == '':
        return jsonify(error="description is empty"), 400
    reporting_user_id = datas.get('reporting_user_id', '')
    if reporting_user_id == '':
        return jsonify(error="reporting_user_id is empty"), 400
    report_type_id = datas.get('report_type_id', '')
    if report_type_id == '':
        return jsonify(error="report_type_id is empty"), 400

    r = Report()
    r.title = title
    r.description = description
    r.reporting_user_id = reporting_user_id
    r.report_type_id = report_type_id
    r.report_status_id = 1

    db.session.add(r)
    db.session.commit()

    return jsonify(r.output()), 201


@app.route('/reports/update/<string:id>', methods=['PUT'])
def update_report(id):
    r = Report.query.get(id)
    datas = request.get_json()

    title = datas.get('title', '')
    description = datas.get('description', '')
    reporting_user_id = datas.get('reporting_user_id', '')
    report_type_id = datas.get('report_type_id', '')
    report_status_id = datas.get('report_status_id', '')
    end_date = datas.get('end_date', '')
    if end_date != "not specified":
        r.end_date = end_date

    r.title = title
    r.description = description
    r.reporting_user_id = reporting_user_id
    r.report_type_id = report_type_id
    r.report_status_id = int(report_status_id)

    db.session.add(r)
    db.session.commit()

    if r is not None:
        return jsonify(f"{r}"), 201
    return jsonify(error="report not updated"), 404
