from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.report_type import ReportType


@app.route("/report_type", methods=["GET"])
def get_reports_type():
    report_types = ReportType.query.all()
    return jsonify(f"{{\"reportTypes\" : {report_types}}}"), 200
    # return "HI"
