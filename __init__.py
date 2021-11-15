from flask import Flask, request, render_template, session, url_for, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = b'secret/'

db = SQLAlchemy()

class User(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	pw = db.Column(db.String(30))

@app.route("//")
def home():
    return render_template('login.html')

@app.route('/api/auth/login', methods = ['POST'])
def login():
    user_imf = request.json
    id = user_imf['id']
    pw = user_imf['pw']
    try:
        user_data = User.query.filter_by(id=id, pw=pw).first()
        if user_data is not None:
            session['id'] = id
            return jsonify({"result" : id}), 200
        else:
            return jsonify({"result" : "ERROR"}), 412
    except:
        return jsonify({"result" : "ERROR"}), 412

@app.route('api/auth/logout', methods = ['GET'])
def logout():
    session.clear()
    return jsonify({"result" : "logout"}), 200




