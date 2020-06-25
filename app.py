from flask import Flask,request,Response,make_response,jsonify
from flask_cors import CORS

import jsondb 

app = Flask(__name__)
CORS(app)

db = jsondb.connect("./data")

class Users:
    """REST Section For users"""
    def __init__(self):
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

@app.route("/",methods=['GET'])
def index():
    return "Hello"


if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8080,debug=True)