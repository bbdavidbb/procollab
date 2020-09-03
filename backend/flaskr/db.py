import sqlite3
from flask import current_app, g
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

def connect_db():
    print(current_app.config["SQLALCHEMY_DATABASE_URI"])
    rv = SQLAlchemy(current_app)
    return rv

def get_db():
    if not hasattr(g, 'db'):
        g.db = connect_db()
    return g.db

def init_db(db):
    with current_app.open_resource("CollabDB.sql", mode="r") as f:
        db.session.execute(f.read())
        db.session.commit()