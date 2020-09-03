from flask import Flask, sessions, g, request, send_file
from flask_sqlalchemy import SQLAlchemy
from db import init_db
import os
from flask_bcrypt import Bcrypt
import json
import io

## ADD A MAP TO KEEP TRACK OF SKILL_IDS

app = Flask(__name__)
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    SECRET_KEY='development key',
    USERNAME='admin',
    PASSWORD='default',
    SQLALCHEMY_DATABASE_URI="mysql://root:123@localhost/collabdb"
))
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
sid_start = 0
pid_start = 0

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True, default=0)
    full_name = db.Column(db.String(255), nullable=True, default=None)
    profile_picture = db.Column(db.BLOB, nullable=True, default=None)
    headline = db.Column(db.String(255), nullable=True, default=None)
    school = db.Column(db.String(255), nullable=True, default=None)
    rid = db.Column(db.Integer, nullable=True, default=None)
    eid = db.Column(db.Integer, nullable=True, default=None)
    email = db.Column(db.String(255), nullable=True, unique=True, default=None)
    password = db.Column(db.String(255), nullable=True, default=None)
    sid = db.Column(db.Integer, nullable=True, default=None)

class has_skill(db.Model):
    uid = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True, default=0)
    sid=db.Column(db.Integer, db.ForeignKey("skill.sid"))

class user_projects(db.Model):
    uid = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    pid = db.Column(db.Integer, db.ForeignKey("projects.pid"), nullable=True)
    type = db.Column(db.String(255), nullable=True)

class timeline(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    pid = db.Column(db.Integer,db.ForeignKey("projects.pid"), nullable=False)
    uid = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)

class skill_req(db.Model):
    post_id = db.Column(db.Integer, db.ForeignKey("projects.pid"), primary_key=True, nullable=False)
    skill_id = db.Column(db.Integer,db.ForeignKey("skill.sid"), nullable=True)

class skill_endorsement(db.Model):
    eid = db.Column(db.Integer, primary_key=True, nullable=False)
    uid = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    skill_id = db.Column(db.Integer, db.ForeignKey("skill.sid"), nullable=True)
    comment = db.Column(db.Integer, nullable=True)

class skill(db.Model):
    sid = db.Column(db.Integer, nullable=False, primary_key=True)
    skill_name = db.Column(db.String(255), nullable=True)
    mo_of_expereince = db.Column(db.Integer, nullable=True)

class recruitment(db.Model):
    pid = db.Column(db.Integer,db.ForeignKey("projects.pid"), nullable=False, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    participate = db.Column(db.Integer, nullable=True)

class rating(db.Model):
    rid = db.Column(db.Integer, nullable=False, primary_key=True)
    uid = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(255), nullable=True)

class projects(db.Model):
    pid = db.Column(db.Integer, nullable=False, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, unique=True)
    pic = db.Column(db.BLOB, nullable=True)
    status = db.Column(db.String(255), nullable=True)
    description = db.Column(db.String(255), nullable=False)

class post_projects(db.Model):
    post_id = db.Column(db.Integer, db.ForeignKey("projects.pid"), nullable=False, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

class participate_projects(db.Model):
    post_id = db.Column(db.Integer, db.ForeignKey("projects.pid"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True,primary_key=True)

class endorsed_by(db.Model):
    user_id = db.Column(db.Integer, nullable=True)
    endorse_id = db.Column(db.Integer, nullable=False, primary_key=True)


# print(db.engine.table_names())
# print(users.query.all())
# print(skill_req.query.filter_by(post_id=0).all())
# skill2 = skill(sid=0, skill_name="surfing", mo_of_expereince=0)
# new_user = users(
#             full_name="Samyak",
#             email="skumar413@gmail.com",
#             password="$2b$12$UiODIhakrdMCIEHGspHKguyp1xc7naXieQGza5MsimAwG0SodZk2G",
#             school="Gatech",
#             headline="HEADLINE"
#         )
# user_sel = users.query.filter_by(id=4).first()
# print(user_sel.id)
# db.session.add(new_user)
# db.session.commit()
# skill1 = skill_req(post_id=1, skill_id=2)
# db.session.add(skill1)
# db.session.commit()
# print(skill_req.query.all())
@app.cli.command('initdb')
def initdb_command():
    """Initializes the database."""
    init_db(db)
    print('Initialized the database.')

@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()

@app.route("/signup", methods=["POST"])
def signup():
    global db, users
    if request.method == "POST":
        data = request.form
        image = request.files["profile_picture"].read()
        hash_pass = bcrypt.generate_password_hash(data["password"]).decode("utf8")
        new_user = users(
            full_name=data["full_name"],
            email=data["email"],
            password=hash_pass,
            school=data["school"],
            headline=data["headline"],
            profile_picture=image
        )
        try:
            db.session.add(new_user)
            db.session.commit()
        except:
            return "Error"
        user_selected = users.query.filter_by(email=data["email"]).first()
        res = {
            "user_id": user_selected.id
        }
        return json.dumps(res)

@app.route("/completeProfile", methods=["POST"])
def completeProfile():
    if request.method == "POST":
        data = request.json
        sid = sid_start
        sid_start+=1
        skill_name = data["skill_name"]
        mo_of_expereince = data["mo_of_experience"]
        uid = data["user_id"]
        user_selected = users.query.filter_by(id=uid)
        new_skill = skill(sid=sid, skill_name=skill_name, mo_of_expereince=mo_of_expereince)
        new_has_skill = has_skill(uid=uid, sid=sid)
        user_selected.sid = sid
        db.session.add(new_skill)
        db.session.add(new_has_skill)
        db.session.commit()
        return json.dumps({
            "success": True
        })



@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        data = request.json
        email = data["email"]
        password = data["password"]
        user_selected = users.query.filter_by(email=email).first()
        user_password = user_selected.password
        if (bcrypt.check_password_hash(user_password, password)):
            res = {
                "success": True,
                "user_id": user_selected.id
            }
            return json.dumps(res)
        else:
            res = {
                "success": False
            }
            return json.dumps(res)

@app.route("/createProject", methods=["POST"])
def createProject():
    if request.method == "POST":
        print('here')
        pid = pid_start # generate this
        pid_start += 1
        uid = request.form["uid"]
        status = request.form["status"]
        description = request.form["description"]
        type_ = request.form["type"]
        skill_req_ = request.form["skill_req"]
        image = request.files["pic"]
        new_project = projects(
            pid=pid,
            user_id=uid,
            status=status,
            description=description,
            pic=image.read()
        )
        new_user_project = user_projects(uid=uid, pid=pid, type=type_)
        new_skill_req = skill_req(post_id=pid, skill_id=skill_req_)
        db.session.add(new_project)
        db.session.add(new_user_project)
        db.session.add(new_skill_req)
        db.session.commit()
        return json.dumps({
            "success": True,
            "pid": pid,
            "uid": uid,
            "status": status,
            "description": description
        })

@app.route("/getUserProfile", methods=["POST"])
def getUserProfile():
    if request.method == "POST":
        uid = request.json["uid"]
        user_selected = users.query.filter_by(id=uid).first()
        user_rating = rating.query.filter_by(uid=uid).all()
        projcets_user = projects.query.filter_by(user_id=uid).all()
        profile = {
            "user_data": {
                "uid": uid,
                "full_name": user_selected.full_name,
                "headline": user_selected.headline,
                "school": user_selected.school,
                "email": user_selected.email,
                "ratings": [(i.rating, i.comment) for i in user_rating],
                "projects": [(i.pid, i.status, i.description) for i in projcets_user]
            }
        }
        return json.dumps(profile)

@app.route("/getProfileFromEmail", methods=["POST"])
def getProfileFromEmail():
    if request.method == "POST":
        email = request.json["email"]
        user_selected = users.query.filter_by(email=email).first()
        uid = user_selected.id
        user_rating = rating.query.filter_by(uid=uid).all()
        projcets_user = projects.query.filter_by(user_id=uid).all()
        profile = {
            "user_data": {
                "uid": uid,
                "full_name": user_selected.full_name,
                "headline": user_selected.headline,
                "school": user_selected.school,
                "ratings": [(i.rating, i.comment) for i in user_rating],
                "projects": [(i.pid, i.status, i.description) for i in projcets_user]
            }
        }
        return json.dumps(profile)

@app.route("/getProfilePicFromEmail", methods=["POST"])
def getProfilePicFromEmail():
    if request.method == "POST":
        email = request.json["email"]
        user_selected = users.query.filter_by(email=email).first()
        uid = user_selected.id
        image = user_selected.profile_picture
        return send_file(
            io.BytesIO(image),
            mimetype="image/png",
            as_attachment=True,
            attachment_filename="%s.png" % uid
            )

@app.route("/getProfilePic", methods=["POST"])
def getUserProfilePicture():
    if request.method == "POST":
        uid = request.json["uid"]
        user_selected = users.query.filter_by(id=uid).first()
        image = user_selected.profile_picture
        return send_file(
            io.BytesIO(image),
            mimetype="image/png",
            as_attachment=True,
            attachment_filename="%s.png" % uid
            )

@app.route("/addRating", methods=["POST"])
def addRating():
    if request.method == "POST":
        uid = request.json["uid"]
        rating_sub = request.json["rating"]
        comment = request.json["comment"]
        new_rating = rating(
            rid=request.json["rid"],
            uid=uid,
            rating=rating_sub,
            comment=comment
        )
        db.session.add(new_rating)
        db.session.commit()
        return json.dumps({
            "success": True,
                "rid": request.json["rid"],
                "uid": uid,
                "rating": rating_sub,
                "comment": comment
        })

@app.route("/addSkillEndorsement", methods=["POST"])
def addSkillEndorsement():
    if request.method == "POST":
        uid = request.json["uid"]
        skill_id = request.json["skill_id"]
        comment = request.json["comment"]
        eid = request.json["eid"]
        new_skill_endorsement = skill_endorsement(
            eid=eid,
            uid=uid,
            skill_id=skill_id,
            comment=comment
        )
        db.session.add(new_skill_endorsement)
        db.session.commit()
        return json.dumps({
            "success":  True,
            "eid": eid,
            "uid": uid,
            "skill_id": skill_id,
            "comment": comment
        })
        
@app.route("/editProject", methods=["POST"])
def editProject():
    if request.method == "POST":
        curr_project = projects.query.filter_by(pid=request.json["pid"]).first()
        curr_project.status = request.form["status"]
        curr_project.description = request.form["description"]
        curr_project.pic = request.files["pic"]
        db.session.commit()
        return json.dumps({
            "success": True
        })

@app.route("/deleteProject", methods=["POST"])
def deleteProject():
    if request.method == "POST":
        curr_project = projects.query.filter_by(pid=request.json["pid"]).first()
        db.session.delete(curr_project)
        db.session.commit()
        return json.dumps({
            "success": True
        })

@app.route("/applyToProject", methods=["POSTS"])
def applyToProject():
    if request.method == "POST":
        pid = request.json["pid"]
        user_id = request.json["user_id"]
        participate = False
        new_recruitment = recruitment(pid=pid, user_id=user_id, participate=participate)
        db.session.add(new_recruitment)
        db.session.commit()
        return json.dumps({
            "success": True
        })

@app.route("/addToProject")
def addToProject():
    if request.method == "POST":
        pid = request.json["pid"]
        user_id = request.json["user_id"]
        type_ = request.json["type"]
        curr_recruitment_entry = recruitment.query.filter_by(user_id=user_id).first()
        new_participate_projects = participate_projects(user_id=user_id, post_id=pid)
        new_user_projects = user_projects(pid=pid, uid=user_id, type=type_)

        curr_recruitment_entry.participate = True
        db.session.add(new_participate_projects)
        db.session.add(new_user_projects)
        db.session.commit()
        return json.dumps({
            "success": True
        })

@app.route("/getTimeline/<uid>")
def getTimeline(uid):
    print("looking for user with id " + uid)
    user_selected = users.query.filter_by(id=uid).first()
    # Get all projects
    all_projects = projects.query.all()
    print(all_projects)


if __name__ == "__main__":
    print(g.db)
    app.run()