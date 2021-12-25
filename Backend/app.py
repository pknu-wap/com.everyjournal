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

    #
    sql = "SELECT wno, date, str FROM What"
    cur.execute(sql)
    rs = cur.fetchall()
    print(rs[0])


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
        sql_3="INSERT INTO Member (id, pw, nickname) VALUES(%s, %s, %s)"
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
    nickname = user_imf['nickname']
    
    sql_1="SELECT mno, id, pw, nickname FROM Member WHERE id=%s "
    cur.execute(sql_1, (id))   
    rs1 = cur.fetchall()

    try:
        for i in rs1:
         if id == i[1] and pw == i[2]:
            session['id'] = id
            session['nickname'] = nickname
            return jsonify({"result_id" : id},{"result_nick" : nickname}),  200
         else:
            return jsonify({"result" : "ERROR"}), 412
    except:
        return jsonify({"result" : "ERROR"}), 412

@app.route('/api/auth/logout', methods = ['GET'])
def logout():
    session.clear()
    return jsonify({"result" : "logout"}), 200
    
#일지 서버->클라이언트
@app.route('/api/journal/<type>/<id>', methods=['GET'])
def gived(type, id):
    if type == 'target':
        sql_1= "SELECT nickname FROM Member WHERE id = %s"
        cur.execute(sql_1, id)
        sel = cur.fetchall()
        nickname = sel[0][0]
        sql_2 = "SELECT id FROM Aim WHERE id = %s"
        cur.execute(sql_2, id)
        sel = cur.fetchall()
        owner = sel[0][0]
        sql_3 = "SELECT ano FROM Aim WHERE id = %s"
        cur.execute(sql_3, id)
        sel = cur.fetchall()
        ano = sel
        sql_4 = "SELECT task FROM Aim WHERE id = %s"
        cur.execute(sql_4, id)
        sel = cur.fetchall()
        task = sel
        sql_5 = "SELECT describe_ FROM Aim WHERE id = %s"
        cur.execute(sql_5, id)
        sel = cur.fetchall()
        describe = sel
        sql_6 = "SELECT category FROM Aim WHERE id = %s"
        cur.execute(sql_6, id)
        sel = cur.fetchall()
        category = sel
        sql_7 = "SELECT current_reps FROM Aim WHERE id = %s"
        cur.execute(sql_7, id)
        sel = cur.fetchall()
        currentReps = sel
        sql_8 = "SELECT currenttime FROM Aim WHERE id = %s"
        cur.execute(sql_8, id)
        sel = cur.fetchall()
        currentTime = sel
        sql_9 = "SELECT target_reps FROM Aim WHERE id = %s"
        cur.execute(sql_9, id)
        sel = cur.fetchall()
        targetReps = sel
        sql_10 = "SELECT target_time FROM Aim WHERE id = %s"
        cur.execute(sql_10, id)
        sel = cur.fetchall()
        targetTime = sel
        sql_11 = "SELECT target_date FROM Aim WHERE id = %s"
        cur.execute(sql_11, id)
        sel = cur.fetchall()
        targetDate = sel
        sql_12 = "SELECT complete_or_not FROM Aim WHERE id = %s"
        cur.execute(sql_12, id)
        sel = cur.fetchall()
        completeOrNot = sel
        sql_13 = "SELECT expired FROM Aim WHERE id = %s"
        cur.execute(sql_13, id)
        sel = cur.fetchall()
        expired = sel

        test_data = {'id' : ano,
                     'owner' : owner, 
                     'nickname' : nickname,
                     'describe' : describe,
                     'category' : category,
                     'currentReps' : currentReps,
                     'currentTime' : currentTime,
                     'targetReps' : targetReps,
                     'targetTime' : targetTime,
                     'targetDate' : targetDate,
                     'completeOrNot' : completeOrNot,
                     'expired' : expired}
        return jsonify(test_data)

    if type == 'past':
        sql_1= "SELECT nickname FROM Member WHERE id = %s"
        cur.execute(sql_1, id)
        sel = cur.fetchall()
        nickname = sel[0][0]
        sql_2 = "SELECT id FROM Past WHERE id = %s"
        cur.execute(sql_2, id)
        sel = cur.fetchall()
        owner = sel[0][0]
        sql_3 = "SELECT pno FROM Past WHERE id = %s"
        cur.execute(sql_3, id)
        sel = cur.fetchall()
        pno = sel
        sql_4 = "SELECT task FROM Past WHERE id = %s"
        cur.execute(sql_4, id)
        sel = cur.fetchall()
        task = sel
        sql_5 = "SELECT describe_ FROM Past WHERE id = %s"
        cur.execute(sql_5, id)
        sel = cur.fetchall()
        describe = sel
        sql_6 = "SELECT category FROM Past WHERE id = %s"
        cur.execute(sql_6, id)
        sel = cur.fetchall()
        category = sel
        sql_7 = "SELECT reps FROM Past WHERE id = %s"
        cur.execute(sql_7, id)
        sel = cur.fetchall()
        reps = sel
        sql_8 = "SELECT time FROM Past WHERE id = %s"
        cur.execute(sql_8, id)
        sel = cur.fetchall()
        time = sel
        sql_9 = "SELECT target_reps FROM Past WHERE id = %s"
        cur.execute(sql_9, id)
        sel = cur.fetchall()
        targetReps = sel
        sql_10 = "SELECT target_time FROM Past WHERE id = %s"
        cur.execute(sql_10, id)
        sel = cur.fetchall()
        targetTime = sel
        sql_11 = "SELECT date FROM Past WHERE id = %s"
        cur.execute(sql_11, id)
        sel = cur.fetchall()
        date = sel
        sql_12 = "SELECT complete_or_not FROM Past WHERE id = %s"
        cur.execute(sql_12, id)
        sel = cur.fetchall()
        completeOrNot = sel

        test_data = {'id' : pno,
                     'owner' : owner, 
                     'nickname' : nickname,
                     'describe' : describe,
                     'category' : category,
                     'reps' : reps,
                     'time' : time,
                     'targetReps' : targetReps,
                     'targetTime' : targetTime,
                     'date' : date,
                     'completeOrNot' : completeOrNot
                     }
        return jsonify(test_data)

#일지 삭제
@app.route("/api/auth/journal/<type>/<id>", methods=['POST'])
def delete(type, id):
    if type == 'target':
        sql = "SELECT owner FROM Aim WHERE ano = %d"
        cur.execute(sql, id)
        rs = cur.fetchall()
        if rs[0][0] == session['id']:
            sql_1 = "DELETE FROM Aim WHERE ano = %d"
            cur.execute(sql_1, id)
            db.commit()
            return jsonify({"result" : "error"}), 200
        else:
            return jsonify({"result" : "error"}), 412

    if type == 'past':
        sql = "SELECT owner FROM Past WHERE pno = %d"
        cur.execute(sql, id)
        rs = cur.fetchall()
        if rs[0][0] == session['id']:
            sql_2 = "DELETE FROM Past WHERE pno = %d"
            cur.execute(sql_2, id)
            db.commit()
            return jsonify({"result" : "delete"}), 200
        else:
            return jsonify({"result" : "error"}), 412


#target_reps plus 1
@app.route("/api/journal/target/<id>/cur_reps/add", methods=['PUT'])        
def plus(id):
    ano = id
    sql_1 = "SELECT target_reps FROM Aim WHERE ano = %s"
    cur.execute(sql_1, ano)
    sel = cur.fetchall()
    num = sel[0][0]
    num = num + 1
    sql_2 = "UPDATE Aim SET target_reps = %s WEHRE ano = %s"
    cur.execute(sql_2, (num, ano))
    db.commit()

    return jsonify()   

if __name__ == "__main__":
    app.debug = True
    app.run()