from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.report_status import ReportStatus


@app.route("/report_status", methods=["GET"])
def get_reports_status():
    report_status = ReportStatus.query.all()

    return jsonify(f"{report_status}"), 200
