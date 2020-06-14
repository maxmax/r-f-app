import time
import datetime
import requests
import json
from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/v1.0/time')
def get_current_time():
    ts = time.time()
    st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
    return {'time': st}

@app.route('/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    r = requests.get('https://api.punkapi.com/v2/beers?page=1&per_page=4')
    return json.dumps(r.json(), indent=2)
