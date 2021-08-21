from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from files import app, db
from files.models.mission import Mission


@app.route("/missions", methods=["GET"])
def get_missions():
    missions = Missions.query.all()

    return jsonify(f"{missions}"), 200
