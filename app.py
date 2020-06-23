from flask import Flask,request,Response,make_response
from flask_cors import CORS

import jsondb 

app = Flask(__name__)
CORS(app)

db = jsondb.connect("./data")

class Users:
    """REST Section For users"""
    def __init__(self):
        self.db = db.users

    def GET(self):
        return "Hello"

    def POST(self):
        return "Hello"

    def PUT(self):
        return "Hello"

    def DELETE(self):
        return "Hello"

_users = Users()

@app.route("/users",methods=['GET','POST','PUT','DELETE'])
def users():
    print (_users.__dict__)
    return "Hello"

@app.route("/",methods=['GET'])
def index():
    return "Hello"


if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8080,debug=True)