import os
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

from server import app, db
from flask import g
from db import init_db


if __name__ == '__main__':
    migrate = Migrate(app, db)
    manager = Manager(app)

    manager.add_command('db', MigrateCommand)
    manager.run()
