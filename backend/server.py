from flask import Flask
from flask_cors import CORS, cross_origin
from datetime import datetime, timedelta
from flask import request
from flask import Response
from flask_socketio import SocketIO
from flask_socketio import send, emit
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
from bson.json_util import dumps
from pymongo import MongoClient
import pymongo
import os
import binascii
import smtplib
import string
import random
import time
import cloudinary.api
import socket
import smtplib
import dns.resolver

def format_iso8601(obj, timezone):
	updated = '%Y-%m-%dT%H:%M:%S' + timezone
	return obj.strftime(updated)

class SiteMap(object):
	def __init__(self, *args, **kwargs):
		self.timezone = kwargs.get('timezone', 'Z')
		domain = kwargs.get('domain', None)
		self._out = [
			'<?xml version="1.0" encoding="UTF-8"?>',
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
		]
		if domain:
			self.add(loc=domain, priority=1)

	def add(self, *args, **kwargs):
		assert 'loc' in kwargs, 'loc is required'
		assert len(kwargs['loc']) <= 2048, 'exceeded the maximum number of characters'
		out = ['\t<url>']
		out.append('\t\t<loc>%s</loc>' % kwargs['loc'])
		out.append('\t\t<xhtml:link href="%s" hreflang="en" rel="alternate"></xhtml:link>' % kwargs['loc'])
		if 'lastmod' in kwargs:
			out.append('\t\t<lastmod>%s</lastmod>' % format_iso8601(kwargs['lastmod'], self.timezone))
		if 'changefreq' in kwargs:
			assert kwargs['changefreq'] in ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'], 'changefreq not correct'
			out.append('\t\t<changefreq>%s</changefreq>' % kwargs['changefreq'])
		if 'priority' in kwargs:
			assert 0.0 <= kwargs['priority'] <= 1.0, 'priority out of range'
		out.append('\t\t<priority>%s</priority>' % float(kwargs['priority'] if 'priority' in kwargs else 0.5))
		out.append('\t</url>')
		self._out.append("\n".join(out))

	def to_string(self):
		self._out.append('</urlset>')
		return "\n".join(self._out).encode('UTF-8')

cloudinary.config(
  cloud_name = '*****',
  api_key = '******',
  api_secret = '******'
)

api = Flask(__name__)
CORS(api, origins=['https://www.portal.allawaken.com', 'https://portal.allawaken.com'])
socketio = SocketIO(api, manage_session=False)

@socketio.on('connect', namespace='/api/chat')
def connect():
    print('Client connected ' + request.headers['X-Real-Ip'])

@socketio.on('disconnect', namespace='/api/chat')
def disconnect():
    print('Client disconnected '+ request.headers['X-Real-Ip'])

@socketio.on('stiga', namespace='/api/chat')
def handle_my_custom_event():
    emit('stiga', "whatever", broadcast=True)

client = MongoClient('localhost:*****')
db=client.test

site = SiteMap()
site.add(
        loc = 'https://www.portal.allawaken.com',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 1)
site.add(
        loc = 'https://www.portal.allawaken.com/topstories',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.5 )
site.add(
        loc = 'https://www.portal.allawaken.com/partners',
        lastmod = datetime.now(),
        changefreq = 'monthly',
        priority = 0.2 )
site.add(
        loc = 'https://www.portal.allawaken.com/community',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.4 )
site.add(
        loc = 'https://www.portal.allawaken.com/community/mostpopular',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.4 )
site.add(
        loc = 'https://www.portal.allawaken.com/contact',
        lastmod = datetime.now(),
        changefreq = 'never',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/myprofile',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/myprofile/posts',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/myprofile/comments',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/myprofile/connections',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/myprofile/chat',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/myprofile/settings',
        lastmod = datetime.now(),
        changefreq = 'weekly',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/login',
        lastmod = datetime.now(),
        changefreq = 'never',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/register',
        lastmod = datetime.now(),
        changefreq = 'never',
        priority = 0.1 )
site.add(
        loc = 'https://www.portal.allawaken.com/forgotpassword',
        lastmod = datetime.now(),
        changefreq = 'never',
        priority = 0.1 )
ppposts = db.post.find()
for post in ppposts:
    if post["postby"] == "******":
        site.add(
            loc = 'https://www.portal.allawaken.com/post/' + post["title"],
            lastmod = datetime.now(),
            changefreq = 'never',
            priority = 0.7 )
    elif post["postby"] == "Awaken":
        site.add(
            loc = 'https://www.portal.allawaken.com/post/' + post["title"],
            lastmod = datetime.now(),
            changefreq = 'never',
            priority = 0.7 )
    else:
        site.add(
            loc = 'https://www.portal.allawaken.com/post/' + post["title"],
            lastmod = datetime.now(),
            changefreq = 'never',
            priority = 0.4 )

pprofiles = db.user.find()
for profile in pprofiles:
	site.add(
		loc = 'https://www.portal.allawaken.com/post/' + profile["name"],
		lastmod = datetime.now(),
		changefreq = 'never',
		priority = 0.7 )

f = open("/home/****/****/sitemap.xml", "w+")
f.write(site.to_string())
f.close()

@api.before_request
def handle_every_request():
    if request.referrer != None:
        if "https://www.portal.allawaken.com" in request.referrer:
            pass
	elif "https://portal.allawaken.com" in request.referrer:
	    pass
        else:
            return "Secure!", 200
    else:
        return "Secure!", 200

@api.route("/api/", methods=["GET"])
def get_my_ip():
    if request.referrer != None:
        if "https://www.portal.allawaken.com" in request.referrer:
            return "You are in!", 200
        elif "https://portal.allawaken.com" in request.referrer:
	    return "You are in!", 200
	else:
        return "Secure!", 200
    else:
        return "Secure!", 200

@api.route("/api/islog", methods=['POST'])
def islog():
    rdata = request.data
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "fingerprint": rdata })
    guser = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "fingerprint": "GoogleLogged"})
    if user != None:
        return dumps(user), 200
    elif guser != None:
        return dumps(guser), 200
    else:
        return dumps("Out"), 200

@api.route("/api/ispostlog", methods=['GET'])
def ispostlog():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user != None:
        return dumps(user), 200
    else:
        return dumps("Out"), 200

@api.route("/api/logout", methods=['GET'])
def logout():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    if user != None:
        db.user.update_one({'ip': user['ip'], "logged": "yes"},{'$set': {'logged': 'no'}}, upsert=False)
        return "LoggedOut", 200
    else:
        return "UserNotLoggedIn", 200

@api.route("/api/validate", methods=['POST'])
def validate():
  rdata = request.data
  ip = request.headers['X-Real-Ip']
  email, password, fingerprint = rdata.split("//", 2)
  selected = db.user.find_one({"email": email, "password": password})
  if selected != None:
      if selected['confirmed'] == "yes":
          db.user.update_one({'_id': selected['_id']},{'$set': {'logged': 'yes','ip': ip, "fingerprint": fingerprint}}, upsert=False)
          return "Success", 200
      else:
          return "ConfirmEmail", 200
  else:
      return "GoRegister", 200

@api.route("/api/validate_google", methods=['POST'])
def validate_google():
    rdata = request.data
    ip = request.headers['X-Real-Ip']
    name, email, fingerprint, imageUrl = rdata.split("//", 3)
    selected = db.user.find_one({"email": email})
    if name != "*****" and name != "*****":
        if selected != None:
            db.user.update_one({'_id': selected['_id']},{'$set': {'logged': 'yes','ip': ip, "fingerprint": fingerprint}}, upsert=False)
            return "Success", 200
        else:
		password = "**************************"
                new_user = {"name": name, "email": email, "password": password, "ip": ip, "logged": "yes", "confirmed": "yes","fingerprint": "GoogleLogged" ,"imageUrl": imageUrl }
                db.user.insert_one(new_user)
                new_profile = {"email": email, "name": name, "subtitle": "Awaken", "profession": "Activist", "causes": "All Awaken", "interests": "All Awaken", "aboutme": "Someone who is trying to change the world.", "profileimg": imageUrl, 'profimgid': "n", "backimg": "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "backimgid": "n" }
                db.profile.insert_one(new_profile)
                db.message.insert_one({"from": "All Awaken", "to": name, "txt": "Welcome to All Awaken Portal. You can make a difference!", "seen": "no"})
                return "Success", 200
    else:
        return "Fail", 200

@api.route("/api/register", methods=['POST'])
def register():
    rdata = request.data
    ip = request.headers['X-Real-Ip']
    name, email, password = rdata.split("//", 2)
    if name != "All Awaken" and name != "Awaken":
        mailname, domain = email.split("@", 1)
        records = dns.resolver.query(domain, 'MX')
        mxRecord = records[0].exchange
        mxRecord = str(mxRecord)

        host = socket.gethostname()
        server = smtplib.SMTP()
        server.connect(mxRecord)
        server.starttls()
        server.set_debuglevel(0)
        server.ehlo(host)
        server.mail('no-reply@allawaken.com')
        code, message = server.rcpt(str(email))
        server.quit()

        if code == 250:
            selected = db.user.find_one({"email": email})
            if selected == None:
                token = binascii.hexlify(os.urandom(24))
                gmail_user = 'no-reply@allawaken.com'
                gmail_password = '*******'

                email_text = MIMEMultipart()
                email_text['From'] = gmail_user
                email_text['To'] = email
                email_text['Subject'] = "Account confirmation"
                message = "Your confirmation link is: https://www.portal.allawaken.com/confirm/" + token
                email_text.attach(MIMEText(message))

                server = smtplib.SMTP('smtp.zoho.eu', 587)
                server.ehlo()
                server.starttls()
                server.login(gmail_user, gmail_password)
                server.sendmail(gmail_user, email, email_text.as_string())
                new_user = {"token": token, "name": name, "email": email, "password": password, "ip": ip, "logged": "yes", "confirmed": "no", "imageUrl": "https://res.cloudinary.com/awaken/image/upload/w_200,h_200,f_auto/v1549533587/portal/theavatar.jpg" }
                db.user.insert_one(new_user)
                new_profile = {"email": email, "name": name, "subtitle": "Awaken", "profession": "Activist", "causes": "All Awaken", "interests": "All Awaken", "aboutme": "Someone who is trying to change the world.", "profileimg": "https://res.cloudinary.com/awaken/image/upload/w_200,h_200,f_auto/v1549533587/portal/theavatar.jpg", 'profimgid': "n", "backimg": "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "backimgid": "n" }
                db.profile.insert_one(new_profile)
                db.message.insert_one({"from": "All Awaken", "to": name, "txt": "Welcome to All Awaken Portal. You can make a difference!", "seen": "no"})
                site = SiteMap()
                site.add(
                        loc = 'https://www.portal.allawaken.com',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 1)
                site.add(
                        loc = 'https://www.portal.allawaken.com/topstories',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.5 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/partners',
                        lastmod = datetime.now(),
                        changefreq = 'monthly',
                        priority = 0.2 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/community',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.4 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/community/mostpopular',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.4 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/contact',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/posts',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/comments',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/connections',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/chat',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/settings',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/login',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/register',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/forgotpassword',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/profile/' + name,
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                os.remove("/home/aap/src/sitemap.xml")
                f = open("/home/aap/src/sitemap.xml", "w+")
                f.write(site.to_string())
                f.close()

                return "Success", 200
            else:
                return "Exists", 200
        else:
            return 'Bad', 200
    else:
        return 'Fail', 200

@api.route("/api/confirm/<token>", methods=['GET'])
def confirm_email(token):
    db.user.update_one({
    'token': token
      },{
        '$set': {
          'confirmed': 'yes'
        }
      }, upsert=False)
    return "AccountConfrimed", 200

@api.route("/api/recover", methods=['POST'])
def recover():
    email = request.data
    selected = db.user.find_one({"email": email})
    if selected != None:
        gmail_user = 'no-reply@allawaken.com'
        gmail_password = '*****'

        email_text = MIMEMultipart()
        email_text['From'] = gmail_user
        email_text['To'] = email
        email_text['Subject'] = "Password recovery"
        message = "Your current password is: " + selected["password"]
        email_text.attach(MIMEText(message))

        server = smtplib.SMTP('smtp.zoho.eu', 587)
        server.ehlo()
        server.starttls()
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, email, email_text.as_string())
        return "Success", 200
    else:
        return "NotExists", 200

@api.route("/api/myprofile", methods=['GET'])
def myprofile():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    profile = db.profile.find_one({"email": user["email"]})
    return dumps(profile), 200

@api.route("/api/setprofile", methods=['POST'])
def setprofile():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'] , "logged": "yes"})
    rdata = request.data
    name, subtitle, causes, interests, profession, aboutme = rdata.split("//", 5)
    if name == "******":
        name = "Awake"
    db.profile.update_one({ "email": user["email"]},{ '$set': { 'name': name, 'subtitle': subtitle, 'causes': causes, 'interests': interests, 'profession': profession, 'aboutme': aboutme }}, upsert=False)
    db.user.update_one({"email": user["email"]}, {'$set': { 'name': name }})
    return "ok", 200;

@api.route("/api/setprofimage", methods=['POST'])
def setprofimage():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    rdata = request.data
    profimg, profimgid = rdata.split("///", 1)
    base, rest = profimg.split("upload/", 1)
    profimg = base + "/upload/h_350,f_auto/" + rest
    profile = db.profile.find_one({ "email": user["email"]})
    if profile["profimgid"] != "n":
        id = profile["profimgid"]
        cloudinary.api.delete_resources([id])
    db.profile.update_one({ "email": user["email"]},{ '$set': { 'profileimg': profimg, 'profimgid': profimgid }}, upsert=False)
    db.user.update_one({ "email": user["email"]},{ '$set': { 'imageUrl': profimg }}, upsert=False)
    return "ok", 200

@api.route("/api/setbackimage", methods=['POST'])
def setbackimage():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip']})
    rdata = request.data
    backimg, backimgid = rdata.split("///", 1)
    base, rest = backimg.split("upload/", 1)
    backimg = base + "/upload/h_350,f_auto/" + rest
    profile = db.profile.find_one({ "email": user["email"]})
    if profile["backimgid"] != "n":
        id = profile["backimgid"]
        cloudinary.api.delete_resources([id])
    db.profile.update_one({ "email": user["email"]},{ '$set': { 'backimg': backimg, 'backimgid': backimgid }}, upsert=False)
    return "ok", 200

@api.route("/api/changepassword", methods=['POST'])
def changepassword():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip']})
    rdata = request.data
    oldpassword, newpassword = rdata.split("///", 1)
    if user["password"] == oldpassword:
        db.user.update_one({ "email": user["email"]},{ '$set': { 'password': newpassword }}, upsert=False)
        return "ok" , 200
    else:
        return "oldpasswrong", 200

@api.route("/api/profile/<pname>", methods=['GET'])
def profile(pname):
    profile = db.profile.find_one({"name": pname})
    return dumps(profile), 200


@api.route("/api/posts", methods=['GET'])
def posts():
    posts = db.post.find({ 'postby': { '$eq': 'All Awaken' } })
    for post in posts:
        whe = post["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = "0"
        db.post.update_one({"title": post["title"]}, { "$set": { 'poston': full , 'cc': cc }}, upsert=False)

    posts = db.post.find({ 'postby': { '$eq': 'All Awaken' } }).sort('epoch', pymongo.DESCENDING)
    return dumps(posts), 200

@api.route("/api/post/<ptitle>", methods=['GET'])
def post(ptitle):
    ttt = ptitle.replace('-', ' ')
    post = db.post.find_one({"title": ttt})
    cc = db.comment.find({"id": post["_id"]}).count()
    if cc == None:
        cc = "0"
    db.post.update_one({"title": post["title"]}, { "$set": { 'cc': cc }}, upsert=False)
    posst = db.post.find_one({"title": ttt})
    return dumps(posst), 200

@api.route("/api/randomposts", methods=['POST'])
def randomposts():
	tt = request.data
	rposts = db.post.aggregate([{"$sample": {"size": 3}}])
	clean = []
	current = "";
	for rpost in rposts:
		if rpost["title"] != tt:
			if current == "":
				clean.append(rpost)
				current = rpost["title"]
			elif rpost["title"] != current:
				clean.append(rpost)
				current = rpost["title"]
	return dumps(clean), 200

@api.route("/api/cc", methods=['POST'])
def cc():
    rdata = request.data
    post = db.post.find_one({"title": rdata})
    return dumps(post["cc"]), 200

@api.route("/api/postlike", methods=['POST'])
def like():
    rdata = request.data
    ip = request.headers['X-Real-Ip']
    post = db.post.find_one({"title": rdata})
    plikes = int(post["likes"]) + 1
    mlikes = int(post["likes"]) - 1
    id = post["_id"]
    if db.like.find_one({"id": id, "ip": ip}) == None:
        db.like.insert_one({"id": id, "ip": ip})
        db.post.update_one({"_id": id}, { "$set": { 'likes': plikes }}, upsert=False)
        return "liked", 200
    else:
        db.like.delete_one({"id": id, "ip": ip})
        db.post.update_one({"_id": id}, { "$set": { 'likes': mlikes }}, upsert=False)
        return "removedlike", 200

@api.route("/api/rr", methods=['POST'])
def rr():
    rdata = request.data
    name, content = rdata.split("//", 1)
    comment = db.comment.find_one({"user": name, "content": content})
    return dumps(comment["rr"]), 200


@api.route("/api/commentlike", methods=['POST'])
def clike():
    rdata = request.data
    name, content = rdata.split("//", 1)
    ip = request.headers['X-Real-Ip']
    comment = db.comment.find_one({"user": name, "content": content})
    plikes = int(comment["likes"]) + 1
    mlikes = int(comment["likes"]) - 1
    id = comment["_id"]
    if db.like.find_one({"id": id, "ip": ip}) == None:
        db.like.insert_one({"id": id, "ip": ip})
        db.comment.update_one({"_id": id}, { "$set": { 'likes': plikes }}, upsert=False)
        return "liked", 200
    else:
        db.like.delete_one({"id": id, "ip": ip})
        db.comment.update_one({"_id": id}, { "$set": { 'likes': mlikes }}, upsert=False)
        return "removedlike", 200


@api.route("/api/upcomments", methods=['GET'])
def upcomments():
    comments = db.comment.find()
    for comment in comments:
        whe = comment["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        db.comment.update_one({"_id": comment["_id"]}, { "$set": { 'commenton': full }}, upsert=False)
    return "success", 200;

@api.route("/api/comments", methods=['POST'])
def comments():
    rdata = request.data
    post = db.post.find_one({"title": rdata})
    id = post["_id"]
    comments = db.comment.find({"id": id}).sort('epoch', pymongo.DESCENDING)
    if comments == None:
        return dumps({"none": "yes"}), 200
    else:
        return dumps(comments), 200

@api.route("/api/replies", methods=['POST'])
def replies():
    rdata = request.data
    name, content = rdata.split("//", 1)
    comment = db.comment.find_one({"user": name, "content": content})
    rr = db.reply.find({"id": comment["_id"]}).count()
    if rr == None:
        rr = "0"
    db.comment.update_one({"_id": comment["_id"]}, { "$set": { 'rr': rr }}, upsert=False)
    if comment == None:
        return dumps({"none": "yes"}), 200
    else:
        replies = db.reply.find({ "id": comment["_id"] }).sort('epoch', pymongo.DESCENDING)
        return dumps(replies), 200

@api.route("/api/replylike", methods=['POST'])
def rlike():
    rdata = request.data
    name, content = rdata.split("//", 1)
    ip = request.headers['X-Real-Ip']
    reply = db.reply.find_one({"user": name, "content": content})
    plikes = int(reply["likes"]) + 1
    mlikes = int(reply["likes"]) - 1
    id = reply["_id"]
    if db.like.find_one({"id": id, "ip": ip}) == None:
        db.like.insert_one({"id": id, "ip": ip})
        db.reply.update_one({"_id": id}, { "$set": { 'likes': plikes }}, upsert=False)
        return "liked", 200
    else:
        db.like.delete_one({"id": id, "ip": ip})
        db.reply.update_one({"_id": id}, { "$set": { 'likes': mlikes }}, upsert=False)
        return "removedlike", 200

@api.route("/api/addcomment", methods=['POST'])
def addcomment():
    rdata = request.data
    ip = request.headers['X-Real-Ip']
    now = int(time.time())
    title, content = rdata.split("//", 1)
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    post = db.post.find_one({"title": title})
    if user != None:
        comment = { "user": user["name"], "imge": user["imageUrl"] , "id": post["_id"], "epoch": now, "content": content, "likes": "0", "commenton": "Just now" , "rr": "0" }
        db.comment.insert_one(comment)
        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = 0
        db.post.update_one({"_id": post["_id"]}, { "$set": { 'cc': cc }}, upsert=False)
        return "success", 200
    else:
        comment = { "user": "Anonymous", "imge": "https://res.cloudinary.com/awaken/image/upload/w_200,h_200,f_auto/v1549533587/portal/theavatar.jpg" , "id": post["_id"], "epoch": now, "content": content, "likes": "0", "commenton": "Just now", "rr": "0" }
        db.comment.insert_one(comment)
        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = 0
        db.post.update_one({"_id": post["_id"]}, { "$set": { 'cc': cc }}, upsert=False)
        return "success", 200

@api.route("/api/deletecomment", methods=['POST'])
def deletecomment():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    content, name = request.data.split("//", 1)
    user2 = db.user.find_one({"name": "All Awaken", "ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user2 != None:
        db.comment.delete_one({"user": name, "content": content })
        if db.reply.find({"id": comment["_id"]}).count() != None:
            db.reply.delete_many({"id": comment["_id"]})
        cc = db.comment.find({"id": comment["id"]}).count()
        if cc == None:
            cc = 0
        db.post.update_one({"_id": comment["id"]}, { "$set": { 'cc': cc }}, upsert=False)
        return "Success", 200
    elif user != None:
        comment = db.comment.find_one({"user": user["name"], "content": content })
        db.comment.delete_one({"user": user["name"], "content": content })
        if db.reply.find({"id": comment["_id"]}) != None:
            db.reply.delete_many({"id": comment["_id"]})
        cc = db.comment.find({"id": comment["id"]}).count()
        if cc == None:
            cc = 0
        db.post.update_one({"_id": comment["id"]}, { "$set": { 'cc': cc }}, upsert=False)
        return "Success", 200
    else:
        return "Nah", 200

@api.route("/api/addreply", methods=['POST'])
def addreply():
    rdata = request.data
    ip = request.headers['X-Real-Ip']
    now = int(time.time())
    name, content, newcontent = rdata.split("//", 2)
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    comment = db.comment.find_one({"user": name, "content": content})
    if user != None:
        reply = { "user": user["name"], "imge": user["imageUrl"] , "id": comment["_id"], "epoch": now, "content": newcontent, "likes": "0", "commenton": "Just now" }
        db.reply.insert_one(reply)
        rr = db.reply.find({"id": comment["_id"]}).count()
        if rr == None:
            rr = "0"
        db.comment.update_one({"_id": comment["_id"]}, { "$set": { 'rr': rr }}, upsert=False)
        return "success", 200
    else:
        reply = { "user": "Anonymous", "imge": "https://res.cloudinary.com/awaken/image/upload/w_200,h_200,f_auto/v1549533587/portal/theavatar.jpg" , "id": comment["_id"], "epoch": now, "content": newcontent, "likes": "0", "commenton": "Just now" }
        db.reply.insert_one(reply)
        rr = db.reply.find({"id": comment["_id"]}).count()
        if rr == None:
            rr = "0"
        db.comment.update_one({"_id": comment["_id"]}, { "$set": { 'rr': rr }}, upsert=False)
        return "success", 200

@api.route("/api/deletereply", methods=['POST'])
def deletereply():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    content, name = request.data.split("//", 1)
    user2 = db.user.find_one({"name": "All Awaken", "ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user2 != None:
        rep = db.reply.find_one({"user": name, "content": content })
        qr = rep["id"]
        db.reply.delete_one({"user": name, "content": content })
        rr = db.reply.find({"id": qr}).count()
        if rr == None:
            rr = "0"
        db.comment.update_one({"_id": qr}, { "$set": { 'rr': rr }}, upsert=False)
        return "Success", 200
    elif user != None:
        rep = db.reply.find_one({"user": user["name"], "content": content })
        qr = rep["id"]
        db.reply.delete_one({"user": user["name"], "content": content })
        rr = db.reply.find({"id": qr}).count()
        if rr == None:
            rr = "0"
        db.comment.update_one({"_id": comment["_id"]}, { "$set": { 'rr': rr }}, upsert=False)
        return "Success", 200
    else:
        return "Nah", 200

@api.route("/api/upreplies", methods=['GET'])
def upreplies():
    replies = db.reply.find()
    for reply in replies:
        whe = reply["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        db.reply.update_one({"_id": reply["_id"]}, { "$set": { 'commenton': full }}, upsert=False)
    return "success", 200;

@api.route("/api/isimage", methods=['GET'])
def isimage():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user != None:
        return dumps(user), 200
    else:
        return dumps({"imageUrl": "https://res.cloudinary.com/awaken/image/upload/w_200,h_200,f_auto/v1549533587/portal/theavatar.jpg"}), 200


@api.route("/api/composts", methods=['GET'])
def composts():
    posts = db.post.find({ "postby": { "$ne": "All Awaken" } })
    for post in posts:
        whe = post["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = "0"
        db.post.update_one({"title": post["title"]}, { "$set": { 'poston': full , 'cc': cc }}, upsert=False)

    posts = db.post.find({ "postby": { "$nin": ["All Awaken", "Awaken"] } }).sort('_id', pymongo.DESCENDING)
    return dumps(posts), 200

@api.route("/api/topposts", methods=['GET'])
def topposts():
    posts = db.post.find({ "postby": { "$eq": "All Awaken" } })
    for post in posts:
        whe = post["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = "0"
        db.post.update_one({"title": post["title"]}, { "$set": { 'poston': full , 'cc': cc }}, upsert=False)

    posts = db.post.find({ "postby": { "$eq": "All Awaken" } })
    for post in posts:
        rate = int(post['cc']) + int(post['likes'])
        if rate == None:
            rate = 0
        db.post.update_one({"title": post["title"]}, { "$set": { "rate": rate }}, upsert=False)

    threedaysago = datetime.now() - timedelta(days=3)
    here = threedaysago.strftime('%s')

    topposts = db.post.find({ "postby": "All Awaken",  "epoch": { "$gte": int(here) } }).sort('rate', -1)
    lessposts = db.post.find({ "postby": "All Awaken",  "epoch": { "$lte": int(here) } }).sort('rate', -1)
    endres = []
    for toppost in topposts:
        endres.append(toppost)
    for lesspost in lessposts:
        endres.append(lesspost)

    return dumps(endres), 200

@api.route("/api/topcomposts", methods=['GET'])
def topcomposts():
    posts = db.post.find({ "postby": { "$ne": "All Awaken" } })
    for post in posts:
        whe = post["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = "0"
        db.post.update_one({"title": post["title"]}, { "$set": { 'poston': full , 'cc': cc }}, upsert=False)

    posts = db.post.find({ "postby": { "$ne": "All Awaken" } })
    for post in posts:
        rate = int(post['cc']) + int(post['likes'])
        if rate == None:
            rate = 0
        db.post.update_one({"title": post["title"]}, { "$set": { "rate": rate }}, upsert=False)
    posts = db.post.find({ "postby": { "$ne": "All Awaken" } }).sort('rate', -1)
    return dumps(posts), 200

@api.route("/api/myactivity", methods=['GET'])
def myactivity():
    posts = db.post.find()
    for post in posts:
        whe = post["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = "0"
        db.post.update_one({"title": post["title"]}, { "$set": { 'poston': full , 'cc': cc }}, upsert=False)

    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if db.comment.find({"user": user["name"] }) != None:
    	comments = db.comment.find({"user": user["name"] })
   	extraposts = []
    	for comment in comments:
        	if db.post.find_one({"_id": comment["id"]}) == None:
        		pass
        	else:
        		extraposts.append(db.post.find_one({"_id": comment["id"]}))
    	posts = db.post.find({ "postby": user["name"] })
    	for post in posts:
        	extraposts.append(post)
    	return dumps(extraposts), 200
    else:
    	return dumps({"No": "No"}) , 200

@api.route("/api/activity", methods=['POST'])
def activity():
    posts = db.post.find()
    for post in posts:
        whe = post["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = "0"
        db.post.update_one({"title": post["title"]}, { "$set": { 'poston': full , 'cc': cc }}, upsert=False)

    comments = db.comment.find({"user": request.data })
    extraposts = []
    for comment in comments:
        if db.post.find_one({"_id": comment["id"]}) == None:
            pass
        else:
            extraposts.append(db.post.find_one({"_id": comment["id"]}))
    posts = db.post.find({ "postby": request.data })
    for post in posts:
        extraposts.append(post)

    return dumps(extraposts), 200

@api.route("/api/myposts", methods=['GET'])
def myposts():
    posts = db.post.find()
    for post in posts:
        whe = post["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = "0"
        db.post.update_one({"title": post["title"]}, { "$set": { 'poston': full , 'cc': cc }}, upsert=False)

    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    extraposts = []
    posts = db.post.find({ "postby": user["name"] })
    for post in posts:
        extraposts.append(post)

    return dumps(extraposts), 200

@api.route("/api/mycomments", methods=['GET'])
def mycomments():
    posts = db.post.find()
    for post in posts:
        whe = post["epoch"]
        now = int(time.time())
        diff = now - int(whe)

        d = divmod(diff,86400)  # days
        h = divmod(d[1],3600)  # hours
        m = divmod(h[1],60)  # minutes

        if d[0] == 1:
            full = "1 day ago"
        elif d[0] != 0:
            full = str(d[0]) + " days ago"
        elif h[0] == 1:
            full = "1 hour ago"
        elif h[0] != 0:
            full = str(h[0]) + " hours ago"
        elif m[0] == 1:
            full = "1 minute ago"
        elif m[0] != 0:
            full = str(m[0]) + " minutes ago"
        else:
            full = "Just now"

        cc = db.comment.find({"id": post["_id"]}).count()
        if cc == None:
            cc = "0"
        db.post.update_one({"title": post["title"]}, { "$set": { 'poston': full , 'cc': cc }}, upsert=False)

    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    comments = db.comment.find({"user": user["name"] })
    extraposts = []
    for comment in comments:
        if db.post.find_one({"_id": comment["id"]}) == None:
            pass
        else:
            extraposts.append(db.post.find_one({"_id": comment["id"]}))

    return dumps(extraposts), 200

@api.route("/api/createpost", methods=['POST'])
def createpost():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    rdata = request.data
    if user != None:
        if user["name"] == "All Awaken":
            title, desc, content, postimg = rdata.split("//", 3)
            base, rest = postimg.split("upload/", 1)
            postimg = base + "/upload/h_350,f_auto/" + rest
            now = int(time.time())
            new_compost = {"imgUrl": postimg, "title": title, "description": desc, "content": content, "postby": "All Awaken", "profimg": "https://res.cloudinary.com/awaken/image/upload/w_400,h_814,f_auto/v1549533587/portal/logo.webp", "likes": "0", "cc": "0", "epoch": int(now), "poston": "Just Now" }
            check = db.post.find_one({"title": title, "description": desc})
            if check == None:
                db.post.insert_one(new_compost)
                site = SiteMap()
                site.add(
                        loc = 'https://www.portal.allawaken.com',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 1)
                site.add(
                        loc = 'https://www.portal.allawaken.com/topstories',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.5 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/partners',
                        lastmod = datetime.now(),
                        changefreq = 'monthly',
                        priority = 0.2 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/community',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.4 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/community/mostpopular',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.4 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/contact',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/posts',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/comments',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/connections',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/chat',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/settings',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/login',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/register',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/forgotpassword',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )

                ppposts = db.post.find()
                for post in ppposts:
                    if post["postby": "All Awaken"]:
                        site.add(
                            loc = 'https://www.portal.allawaken.com/post/' + title,
                            lastmod = datetime.now(),
                            changefreq = 'never',
                            priority = 0.7 )
                    elif post["postby": "Awaken"]:
                        site.add(
                            loc = 'https://www.portal.allawaken.com/post/' + title,
                            lastmod = datetime.now(),
                            changefreq = 'never',
                            priority = 0.7 )
                    else:
                        site.add(
                            loc = 'https://www.portal.allawaken.com/post/' + title,
                            lastmod = datetime.now(),
                            changefreq = 'never',
                            priority = 0.4 )

                os.remove("/home/aap/src/sitemap.xml")

                f = open("/home/aap/src/sitemap.xml", "w+")
                f.write(site.to_string())
                f.close()

                return "Success", 200
            else:
                return "SameName", 200
        else:
            return "AccessDenied", 200
    else:
        return "AccessDenied", 200

@api.route("/api/createblop", methods=['POST'])
def createblop():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    rdata = request.data
    if user != None:
        if user["name"] == "All Awaken":
            title, desc, content, postimg = rdata.split("//", 3)
            base, rest = postimg.split("upload/", 1)
            postimg = base + "/upload/h_350,f_auto/" + rest
            now = int(time.time())
            new_compost = {"imgUrl": postimg, "title": title, "description": desc, "content": content, "postby": "Awaken", "profimg": "https://res.cloudinary.com/awaken/image/upload/w_400,h_814,f_auto/v1549533587/portal/logo.webp", "likes": "0", "cc": "0", "epoch": int(now), "poston": "Just Now" }
            check = db.post.find_one({"title": title, "description": desc})
            if check == None:
                db.post.insert_one(new_compost)
                site = SiteMap()
                site.add(
                        loc = 'https://www.portal.allawaken.com',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 1)
                site.add(
                        loc = 'https://www.portal.allawaken.com/topstories',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.5 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/partners',
                        lastmod = datetime.now(),
                        changefreq = 'monthly',
                        priority = 0.2 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/community',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.4 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/community/mostpopular',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.4 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/contact',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/posts',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/comments',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/connections',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/chat',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/myprofile/settings',
                        lastmod = datetime.now(),
                        changefreq = 'weekly',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/login',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/register',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )
                site.add(
                        loc = 'https://www.portal.allawaken.com/forgotpassword',
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.1 )

                ppposts = db.post.find()
                for post in ppposts:
                    if post["postby": "All Awaken"]:
                        site.add(
                            loc = 'https://www.portal.allawaken.com/post/' + title,
                            lastmod = datetime.now(),
                            changefreq = 'never',
                            priority = 0.7 )
                    elif post["postby": "Awaken"]:
                        site.add(
                            loc = 'https://www.portal.allawaken.com/post/' + title,
                            lastmod = datetime.now(),
                            changefreq = 'never',
                            priority = 0.7 )
                    else:
                        site.add(
                            loc = 'https://www.portal.allawaken.com/post/' + title,
                            lastmod = datetime.now(),
                            changefreq = 'never',
                            priority = 0.4 )

                os.remove("/home/aap/src/sitemap.xml")

                f = open("/home/aap/src/sitemap.xml", "w+")
                f.write(site.to_string())
                f.close()

                return "Success", 200
            else:
                return "SameName", 200
        else:
            return "AccessDenied", 200
    else:
        return "AccessDenied", 200

@api.route("/api/deleteblop", methods=['POST'])
def deleteblop():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    rdata = request.data
    if user != None:
        if user["name"] == "All Awaken":
            db.post.delete_one({"postby": "Awaken", "title": rdata})

            site = SiteMap()
            site.add(
                    loc = 'https://www.portal.allawaken.com',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 1)
            site.add(
                    loc = 'https://www.portal.allawaken.com/topstories',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.5 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/partners',
                    lastmod = datetime.now(),
                    changefreq = 'monthly',
                    priority = 0.2 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/community',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.4 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/community/mostpopular',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.4 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/contact',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/posts',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/comments',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/connections',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/chat',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/settings',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/login',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/register',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/forgotpassword',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )

            ppposts = db.post.find()
            for post in ppposts:
                if post["postby": "All Awaken"]:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.7 )
                elif post["postby": "Awaken"]:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.7 )
                else:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.4 )

            os.remove("/home/aap/src/sitemap.xml")

            f = open("/home/aap/src/sitemap.xml", "w+")
            f.write(site.to_string())
            f.close()

            return "Success", 200
        else:
            return "AccessDenied", 200
    else:
        return "AccessDenied", 200

@api.route("/api/deletepartner", methods=['POST'])
def deletepartner():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    rdata = request.data
    if user != None:
        if user["name"] == "All Awaken":
            db.partner.delete_one({"name": rdata})
            return "Success", 200
        else:
            return "AccessDenied", 200
    else:
        return "AccessDenied", 200

@api.route("/api/createcompost", methods=['POST'])
def createcompost():
    rdata = request.data
    title, desc, content, postimg = rdata.split("//", 3)
    base, rest = postimg.split("upload/", 1)
    postimg = base + "/upload/h_350,f_auto/" + rest
    now = int(time.time())
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user != None:
        profile = db.profile.find_one({"email": user["email"]})
        check = db.post.find_one({"title": title, "description": desc})
        if check == None:
            new_compost = {"imgUrl": postimg, "title": title, "description": desc, "ccontent": content, "postby": profile["name"], "profimg": profile["profileimg"], "likes": "0", "cc": "0", "epoch": int(now), "poston": "Just Now" }
            db.post.insert_one(new_compost)
            site = SiteMap()
            site.add(
                    loc = 'https://www.portal.allawaken.com',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 1)
            site.add(
                    loc = 'https://www.portal.allawaken.com/topstories',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.5 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/partners',
                    lastmod = datetime.now(),
                    changefreq = 'monthly',
                    priority = 0.2 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/community',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.4 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/community/mostpopular',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.4 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/contact',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/posts',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/comments',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/connections',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/chat',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/settings',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/login',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/register',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/forgotpassword',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            ppposts = db.post.find()
            for post in ppposts:
                if post["postby": "All Awaken"]:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.7 )
                elif post["postby": "Awaken"]:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.7 )
                else:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.4 )

            os.remove("/home/aap/src/sitemap.xml")

            f = open("/home/aap/src/sitemap.xml", "w+")
            f.write(site.to_string())
            f.close()
            return "Success", 200
        else:
            return "Post exists", 200
    else:
        return "UserNotLoggedIn", 200

@api.route("/api/deletecompost", methods=['POST'])
def deletecompost():
    title = request.data
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    user2 = db.user.find_one({"name": "All Awaken", "ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user2 != None:
        db.post.delete_one({"title": title})
        return "Success", 200
    elif user != None:
        check = db.post.find_one({"title": title, "postby": user["name"]})
        if check != None:
            db.post.delete_one({"title": title, "postby": user["name"]})
            site = SiteMap()
            site.add(
                    loc = 'https://www.portal.allawaken.com',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 1)
            site.add(
                    loc = 'https://www.portal.allawaken.com/topstories',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.5 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/partners',
                    lastmod = datetime.now(),
                    changefreq = 'monthly',
                    priority = 0.2 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/community',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.4 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/community/mostpopular',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.4 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/contact',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/posts',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/comments',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/connections',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/chat',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/myprofile/settings',
                    lastmod = datetime.now(),
                    changefreq = 'weekly',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/login',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/register',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )
            site.add(
                    loc = 'https://www.portal.allawaken.com/forgotpassword',
                    lastmod = datetime.now(),
                    changefreq = 'never',
                    priority = 0.1 )

            ppposts = db.post.find()
            for post in ppposts:
                if post["postby": "All Awaken"]:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.7 )
                elif post["postby": "Awaken"]:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.7 )
                else:
                    site.add(
                        loc = 'https://www.portal.allawaken.com/post/' + title,
                        lastmod = datetime.now(),
                        changefreq = 'never',
                        priority = 0.4 )

            os.remove("/home/aap/src/sitemap.xml")

            f = open("/home/aap/src/sitemap.xml", "w+")
            f.write(site.to_string())
            f.close()
            return "Success", 200
        else:
            return "NotExists", 200
    else:
        return "UserNotLoggedIn", 200

@api.route("/api/connectionrequest", methods=['POST'])
def connectionrequest():
    rdata = request.data
    mname, nname, texxxt = rdata.split("//", 2)
    mprofile = db.profile.find_one({"name": mname})
    nprofile = db.profile.find_one({"name": nname})
    chek = db.conrequest.find_one({"mprofid": mprofile["_id"], "nprofid": nprofile["_id"]})
    if chek == None:
        newcon = { "mprofid": mprofile["_id"], "nprofid": nprofile["_id"], "text": texxxt }
        db.conrequest.insert_one(newcon)
        return "Success", 200
    else:
        return "Already sent", 200

@api.route("/api/checkrequest", methods=['POST'])
def checkrequest():
    mprof = request.data
    mid = db.profile.find_one({ "name": mprof })
    chek = db.conrequest.find({ "nprofid": { '$eq': mid["_id"] } }).count()
    if chek != None:
        return dumps(chek), 200
    else:
        return "None", 200

@api.route("/api/loadrequests", methods=['GET'])
def loadrequests():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    mpro = db.profile.find_one({"email": user["email"]})
    invites = db.conrequest.find({ "nprofid": { '$eq': mpro["_id"] } })
    if invites != None:
        profiles = []
        for invite in invites:
            profiles.append(db.profile.find_one({"_id": invite["mprofid"]}))
        return dumps(profiles), 200
    else:
        return "None", 200

@api.route("/api/loadreqtext", methods=['GET'])
def loadreqtext():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    mpro = db.profile.find_one({"email": user["email"]})
    invites = db.conrequest.find({ "nprofid": { '$eq': mpro["_id"] } })
    if invites != None:
        return dumps(invites), 200
    else:
        return "None", 200

@api.route("/api/addconnection", methods=['POST'])
def addconnection():
    nprofile = db.profile.find_one({ "name": request.data })
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    mprofile = db.profile.find_one({"email": user["email"]})
    db.conrequest.delete_one({"mprofid": nprofile["_id"], "nprofid": mprofile["_id"]})
    if db.connection.find_one({"mprofid": nprofile["_id"], "nprofid": mprofile["_id"]}) == None:
        newcon = { "mprofid": nprofile["_id"], "nprofid": mprofile["_id"] }
        db.connection.insert_one(newcon)
        return "Success", 200
    else:
        return "Already a connection", 200

@api.route("/api/checkconn", methods=['POST'])
def checkconn():
    mpro = db.profile.find_one({"name": request.data})
    connections = db.connection.find({ "nprofid": { '$eq': mpro["_id"] } }).count()
    conns = db.connection.find({ "mprofid": { '$eq': mpro["_id"] } }).count()
    eq = int(conns) + int(connections)
    return str(eq), 200

@api.route("/api/loadconnections", methods=['GET'])
def loadconnections():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    mpro = db.profile.find_one({"email": user["email"]})
    connections = db.connection.find({ "nprofid": { '$eq': mpro["_id"] } })
    conns = db.connection.find({ "mprofid": { '$eq': mpro["_id"] } })
    if connections != None:
        profiles = []
        for connection in connections:
            profiles.append(db.profile.find_one({"_id": connection["mprofid"]}))
        for conn in conns:
            profiles.append(db.profile.find_one({"_id": conn["nprofid"]}))
        return dumps(profiles), 200
    else:
        return "None", 200

@api.route("/api/checkconnections", methods=['GET'])
def checkconnections():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    mpro = db.profile.find_one({"email": user["email"]})
    connections = db.connection.find({ "nprofid": { '$eq': mpro["_id"] } }).count()
    conns = db.connection.find({ "mprofid": { '$eq': mpro["_id"] } }).count()
    eq = int(conns) + int(connections)
    return str(eq), 200

@api.route("/api/deleteconnection", methods=['POST'])
def deleteconnection():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    nprofile = db.profile.find_one({"email": user["email"]})
    mprofile = db.profile.find_one({"name": request.data })
    db.connection.delete_one({ "mprofid": mprofile["_id"], "nprofid": nprofile["_id"] })
    db.connection.delete_one({ "mprofid": nprofile["_id"], "nprofid": mprofile["_id"] })
    return "Deleted", 200

@api.route("/api/deleterequest", methods=['POST'])
def deleterequest():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    nprofile = db.profile.find_one({"email": user["email"]})
    mprofile = db.profile.find_one({"name": request.data })
    db.conrequest.delete_one({ "mprofid": mprofile["_id"], "nprofid": nprofile["_id"] })
    return "Deleted", 200

@api.route("/api/loadmessages", methods=['POST'])
def loadmessages():
    fellow = request.data
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    if user != None:
        messages = []
        mf = db.message.find({"$or":[ {"from": user["name"], "to": fellow}, {"from": fellow, "to": user["name"]}]}).sort("_id", -1)
        for m in mf:
            messages.append(m)
        return dumps(messages), 200
    else:
        return "GetOutOfHere!", 200

@api.route("/api/addmessage", methods=['POST'])
def addmessage():
    fellow, txt = request.data.split("//", 1)
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    friend = db.user.find_one({"name": fellow, "logged": "yes"})
    if user != None:
        if friend != None:
            db.message.insert_one({"from": user["name"], "to": fellow, "txt": txt, "seen": "yes"})
            return "Success", 200
        else:
            db.message.insert_one({"from": user["name"], "to": fellow, "txt": txt, "seen": "no"})
            return "Success", 200
    else:
        return "GetOutOfHere!", 200

@api.route("/api/sendmail", methods=['POST'])
def sendmail():
    usermail, name, txt = request.data.split("//", 2)
    gmail_user = 'no-reply@allawaken.com'
    gmail_password = '******'
    email = "tyotov@allawaken.com"

    email_text = MIMEMultipart()
    email_text['From'] = gmail_user
    email_text['To'] = email
    email_text['Subject'] = "Contact Form"
    message = "Message from " + usermail + "\n " + name + "\n " + txt
    email_text.attach(MIMEText(message))

    server = smtplib.SMTP('smtp.zoho.eu', 587)
    server.ehlo()
    server.starttls()
    server.login(gmail_user, gmail_password)
    server.sendmail(gmail_user, email, email_text.as_string())
    server.quit()
    return "Success", 200

@api.route("/api/notifications", methods=['POST'])
def notifications():
    mprof = request.data
    mid = db.profile.find_one({ "name": mprof })
    reqs = 0
    mess = 0
    if db.conrequest.find() != None:
        reqs = db.conrequest.find({ "nprofid": { '$eq': mid["_id"] } }).count()
    if db.message.find() != None:
        mess = db.message.find({ "to": mid["name"], "seen": "no" }).count()

    obshto = str(reqs) + "//" + str(mess)
    return obshto, 200

@api.route("/api/notmess", methods=['GET'])
def notmess():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    froms = db.message.find({"to": user["name"], "seen": "no" }).distinct('from')
    endresult = []
    for fro in froms:
        endresult.append({"from": fro, "num": db.message.find({"from": fro, "to": user["name"], "seen": "no" }).count()})
    return dumps(endresult), 200

@api.route("/api/seen", methods=['POST'])
def seen():
    fromprof = request.data
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes"})
    db.message.update({"from": fromprof, "to": user["name"], "seen": "no" }, {'$set': {'seen': 'yes'}}, multi=True)
    return "Success", 200

@api.route("/api/partners", methods=['GET'])
def partners():
    partners = db.partner.find().sort("position", pymongo.ASCENDING)
    return dumps(partners), 200

@api.route("/api/blops", methods=['GET'])
def blops():
    blops = db.post.find({"postby": "Awaken"}).sort("epoch", pymongo.DESCENDING)
    return dumps(blops), 200

@api.route("/api/topblops", methods=['GET'])
def topblops():
    posts = db.post.find({ "postby": { "$eq": "Awaken" } })
    for post in posts:
        rate = int(post['cc']) + int(post['likes'])
        if rate == None:
            rate = 0
        db.post.update_one({"title": post["title"]}, { "$set": { "rate": rate }}, upsert=False)

    threedaysago = datetime.now() - timedelta(days=3)
    here = threedaysago.strftime('%s')

    topposts = db.post.find({ "postby": "Awaken",  "epoch": { "$gte": int(here) } }).sort('rate', -1)
    lessposts = db.post.find({ "postby": "Awaken",  "epoch": { "$lte": int(here) } }).sort('rate', -1)
    endres = []
    for toppost in topposts:
        endres.append(toppost)
    for lesspost in lessposts:
        endres.append(lesspost)
    return dumps(endres), 200

@api.route("/api/broadcastmessage", methods=['POST'])
def broadcastmessage():
    txt = request.data
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user != None:
        if user["name"] == "******":
            users = db.user.find()
            for user in users:
                db.message.insert_one({"from": "All Awaken", "to": user["name"], "txt": txt, "seen": "no"})
    return "Success", 200

@api.route("/api/createpartner", methods=['POST'])
def createpartner():
    name, vision, description, causes, website, newpos, immg = request.data.split("//", 6)
    base, rest = immg.split("upload/", 1)
    immg = base + "/upload/h_200,f_auto/" + rest
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user != None:
        if user["name"] == "*******":
            if db.partner.find_one({"name": name}) == None:
                if db.partner.find() != None:
                    for partner in db.partner.find():
                        if int(partner["position"]) >= int(newpos):
                            x = int(partner["position"]) + 1
                            db.partner.update_one({"_id": partner["_id"]}, { "$set": {"position": int(x)} })
                db.partner.insert_one({"name": name, "causes": causes, "vision": vision, "desc": description, "link": website, "img": immg, "position": newpos})
    return "Success", 200

@api.route("/api/accounts", methods=['GET'])
def accounts():
    user = db.user.find_one({"ip": request.headers['X-Real-Ip'], "logged": "yes", "confirmed": "yes"})
    if user != None:
        if user["name"] == "********":
            ac = db.user.find().count()
            return dumps(ac), 200
        else:
            return "Out", 200
    else:
        return "Out", 200

@api.route("/api/clearbroad", methods=['GET'])
def clearbroad():
    db.message.delete_many({"from": "*******"})
    return "Success", 200

@api.errorhandler(500)
def internal_error(error):
    return "500", 200

if __name__ == "__main__":
    api.run(host="localhost", port="****", debug=False)
