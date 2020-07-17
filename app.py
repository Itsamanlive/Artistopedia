from flask import Flask,request,jsonify,render_template,send_from_directory
from flask_cors import CORS

import jsondb 

app = Flask(__name__,template_folder="./templates")
CORS(app)

db = jsondb.connect("./data")

class Users:
    """REST Section For users"""
    def __init__(self):
        try:    
            self.db = db.users
        except:
            db.createDB("users")
            self.db = db.users

    def GET(self,request:request):
        return "GET"

    def POST(self,request:request):
        data = request.get_json()
        res = self.db.users.insertOne(data)
        if res['status']:
            return jsonify({
                "message":"Registered Successfully !",
                "status":True,
            })

        return jsonify({
            "message":"Account Already Exists !",
            "status":False
        })       

    def PUT(self,request):
        data = request.get_json()
        record = self.db.users[data['email']]()
        if len(record):
            if record['password'] == data['password']:
                return jsonify({
                    "status":True,
                    "message":"Login Successful"
                })
            return jsonify({
                "status":False,
                "message":"Wrong Password !"
            })
        return jsonify({
            "status":False,
            "message":"Account Does Not Exist !"
        })

    def DELETE(self,request):
        return "DELETE"

_users = Users()

@app.route("/user",methods=['GET','POST','PUT','DELETE'])
def users():
    return getattr(_users,request.method)(request)

@app.route("/static/<string:_type>/<string:_file>",methods=['GET'])
def serve_static(_type,_file):
    return send_from_directory(f"./templates/static/{_type}",_file,mimetype=f"text/{_type}")

@app.route("/upload",methods=['GET','POST'])
def upload():
    try:
        file = request.files.get("audio_file")
        file.save(f"./data/uploaded/{request.form['username']}-{file.filename}")
        return jsonify({
            "status":True,
            "msg":"File Uploaded !"
        })
    except:
        return jsonify({
            "status":True,
            "msg":"Error Occured !"
        })

@app.route("/",methods=['GET'])
@app.route("/area",methods=['GET'])
@app.route("/competitions",methods=['GET'])
@app.route("/competition",methods=['GET'])
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8080,debug=True)