from flask import Flask, render_template, request, session, jsonify
import pymysql

app = Flask(__name__)
app.secret_key = b'secret/'

db = pymysql.connect(host='', port=, user='', passwd='', db='', charset='utf8')
cur = db.cursor()

@app.route("/")
def start():
    no = -1
    if "uno" in session:
        no = session["uno"]
    return render_template('main.html', value=no)
# 회원가입
@app.route("/api/auth/join", methods=['POST'])
def join():
    new_user = request.json
    id = new_user['id']
    pw = new_user['pw']
    nickname = new_user['nickname']

    sql_2="SELECT * FROM Member"
    cur.execute(sql_2)
    rs2 = cur.fetchall()
    obt = 0

    for i in rs2:
        if i[1] == id:
            obt = 1

    if obt == 1:
        data = {"result":"Exist"}
        return jsonify(data), 412

    else:
        sql_3="INSERT INTO Member (id, pw, ninkname) VALUES(%s, %s, %s)"
        cur.execute(sql_3, (id, pw, nickname))
        db.commit()
        data = {"id" : id}
        return jsonify(data), 200
# 회원탈퇴
@app.route("/api/auth/withdraw", methods=['POST'])
def withdraw():
    drop_user = request.json
    id = drop_user['id']
    pw = drop_user['pw']
    nickname = drop_user['nickname']

    sql_1="SELECT * FROM Member"
    cur.execute(sql_1)
    rs1=cur.fetchall()
    obt = 0

    for i in rs1:
        if i[2] == pw:
            obt = 1
    
    if obt == 1:
        sql_2 = "DELETE FROM Member WHERE id = %s"
        cur.execute(sql_2, (id))
        db.commit()
        data = {"result":"end"}
        return jsonify(data)
    else:
        data = {"result":"disaccord"}
        return jsonify(data)

# login logout
 
@app.route('/api/auth/login', methods = ['POST'])
def login():
    user_imf = request.json
    id = user_imf['id']
    pw = user_imf['pw']
    
    sql_1="SELECT mno, id, pw, ninkname FROM Member WHERE id=%s "
    cur.execute(sql_1, (id))   
    rs1 = cur.fetchall()

    try:
        for i in rs1:
         if id == i[1] and pw == i[2]:
            session['id'] = id
            return jsonify({"result" : id}), 200
         else:
            return jsonify({"result" : "ERROR"}), 412
    except:
        return jsonify({"result" : "ERROR"}), 412

@app.route('/api/auth/logout', methods = ['GET'])
def logout():
    session.clear()
    return jsonify({"result" : "logout"}), 200   

if __name__ == "__main__":
    app.debug = True
    app.run()