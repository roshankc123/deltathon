
from flask import * 
from OpenSSL import SSL
from flask_cors import CORS
# import cv2
# from keras.models import load_model
# import numpy as np
# import pickle
# from skimage.transform import resize
# import random
import json
import base64
import io
import time
from codecs import encode
import disease as predict_disease
import breadcrum_sensor as temp_sensor
import soil_monitor
import sqlite3
import crop_recommend
import fertilizer
import predictsoil as psoil
# import todos
# import db
# import breadcrum_sensor as sensor
# from PIL import Image


app = Flask(__name__)
CORS(app)


app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 1

@app.route('/')
def index():
    return [1]

@app.route('/tempdata', methods=['GET', 'POST', 'PUT'])
def tempdata():
    if request.method == 'GET':
        fp =  open('time', 'r+')
        # print(fp.read())
        result = temp_sensor.retrieve_update(fp.read())
        #update the latest fetch time
        print(result)
        fp.seek(0)
        fp.write(str(int(time.time()))) 
        fp.close()
        return result
        # pass
    elif request.method == 'PUT':    #unlock the temp data
        fp =  open('monitor', 'w')
        # print(request.args['name'])
        fp.write(request.args['name'])
        fp.close()
        return [1]
    elif request.method == 'POST':
        fp = open('monitor', 'r') or 0
        if fp:
            name = fp.read()
            print('name',name)
            fp.close()
        if name :
            # print(request.args)
            return [temp_sensor.store()] 
    return 0

@app.route('/analyze', methods = ['GET'])
def analyze():
    # fp =  open('monitor', 'w')
    # fp.write('')
    # fp.close()
    data = soil_monitor.main('maize')
    db = sqlite3.connect('data.db')
    cursor = db.cursor()
    cursor.execute('delete from temp_sensor_data')
    return data

@app.route('/update', methods = ['GET'])
def update():
    # fp =  open('monitor', 'w')
    # fp.write('')
    # fp.close()
    db = sqlite3.connect('data.db')
    cursor = db.cursor()
    # data = getdata(sensorData)
    cursor.execute('select * from temp_sensor_data order by _time desc')   #pass tuple 
    # db.commit()
    data = cursor.fetchall()
    # print(data[0])
    # data = soil_monitor.main('maize')
    return list(data[0])


@app.route('/predictdisease', methods=['GET', 'POST'])
def predictdisease():
    if request.method == 'POST':
        img = request.form['image']
        crop_name = request.form['name']
        bytes_img = encode(img, 'utf-8')
        binary_img = base64.decodebytes(bytes_img)
        with open("image/temp.jpeg", "wb") as fh:
            fh.write(binary_img)
        disease = predict_disease.predict('image/temp.jpeg', crop_name)
        return jsonify(disease)
    return 'predict disease'

@app.route('/predictfertilizer', methods=['GET', 'POST'])
def predictfertilizer():
    if request.method == 'GET':
        # crop_name = request.args['name']
        db = sqlite3.connect('data.db')
        cursor = db.cursor()
        # data = getdata(sensorData)
        cursor.execute('select * from temp_sensor_data')   #pass tuple 
        # db.commit()
        data = cursor.fetchall()
        return fertilizer.main(data)
    return [0]

@app.route('/predictcrop', methods=['GET'])
def predictcrop():
    db = sqlite3.connect('data.db')
    cursor = db.cursor()
    # data = getdata(sensorData)
    cursor.execute('select * from temp_sensor_data')   #pass tuple 
    # db.commit()
    data = cursor.fetchall()
    
    return jsonify(crop_recommend.main(data))

@app.route('/predictsoil', methods=['GET', 'POST'])
def predictsoil():
    if request.method == 'POST':
        img = request.form['image']
        # crop_name = request.form['name']
        bytes_img = encode(img, 'utf-8')
        binary_img = base64.decodebytes(bytes_img)
        with open("image/temp_soil.jpeg", "wb") as fh:
            fh.write(binary_img)
        soiltype = psoil.predict('image/temp_soil.jpeg')
        return jsonify(soiltype)
    return 'predict disease'


# server_ip = '192.168.10.69'
server_ip = '192.168.43.164'
# server_ip = '127.0.0.1'

if __name__ == "__main__":
    context = ('cert.pem', 'key.pem')
    app.run( server_ip, '8000' ,debug=True, ssl_context = context)

