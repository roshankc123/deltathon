import time
# import temp_data
# import db
import sqlite3
import pandas as pd

db_url = 'data.db'

def getdata(sensorData = {}):
    data = {
        '_ n' : 90,
        '_p' : 42,
        '_k' : 43,
        'temperature' : sensorData['temperature'],
        'humidity' : sensorData['humidity'],
        'moisture' : sensorData['moisture'],
        '_time' : int(time.time())
    }
    # print(data)
    return tuple(data.values())

def store(sensorData = {}):
    db = sqlite3.connect(db_url)
    cursor = db.cursor()
    data = getdata(sensorData)
    cursor.execute('insert into temp_sensor_data values (? ,? ,? ,? ,? ,? ,?)', data)   #pass tuple 
    db.commit()
    return cursor.rowcount

def retrieve_all():
    db = sqlite3.connect(db_url)
    cursor = db.cursor()
    cursor.execute('select * from temp_sensor_data')
    data = cursor.fetchall()
    # print(data)
    return data

def retrieve_update(time):
    # print(time)
    db = sqlite3.connect(db_url)
    cursor = db.cursor()
    cursor.execute('select * from temp_sensor_data')# where _time >= ?', tuple([int(time)]))
    data = cursor.fetchall()
    # print(data)
    return data


# store()

# retrieve_all()
