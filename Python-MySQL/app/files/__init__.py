from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@172.17.0.1/space_station'

db = SQLAlchemy(app)
db.create_all()

from files.routes import user_routes, report_routes, report_type_routes, position_type_routes, missions_routes, incidents_route, mission_crew_route, report_status_routes
from files.models.report_type import ReportType
from files.models.position_type import PositionType
from files.models.report_status import ReportStatus
from sqlalchemy import event, DDL

event.listen(ReportType.__table__, 'after_create',
            DDL(""" INSERT INTO report_type (id, description) VALUES (1, 'repair'), (2, 'maintenance'), (3, 'medical') """))

event.listen(PositionType.__table__, 'after_create',
            DDL(""" INSERT INTO position_type (id, name) VALUES (1, 'HR'), (2, 'kitchen'), (3, 'engineer'), (4, 'service'), (5, 'researcher'), (6, 'medic') """))

event.listen(ReportStatus.__table__, 'after_create',
            DDL(""" INSERT INTO report_status (id, description) VALUES (1, 'not assigned'), (2, 'assigned'), (3, 'in progress'), (4, 'finished'), (5, 'cancelled') """))

db.create_all()
