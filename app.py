from flask import Flask, jsonify, request, send_from_directory
import requests
import os
import random

app = Flask(__name__, static_folder='static')

EMAIL_DOMAINS = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'hotmail.com',
    'icloud.com',
    'protonmail.com',
    'mail.com',
    'aol.com'
]

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route('/api/users', methods=['GET'])
def get_users():
    try:
        results = request.args.get('results', '10')
        gender = request.args.get('gender', '')
        nationality = request.args.get('nat', '')
        
        params = {'results': results}
        if gender:
            params['gender'] = gender
        if nationality:
            params['nat'] = nationality
        
        response = requests.get('https://randomuser.me/api/', params=params)
        data = response.json()
        
        users = []
        for user in data['results']:
            email_username = user['email'].split('@')[0]
            random_domain = random.choice(EMAIL_DOMAINS)
            users.append({
                'uuid': user['login']['uuid'],
                'username': user['login']['username'],
                'title': user['name']['title'],
                'first_name': user['name']['first'],
                'last_name': user['name']['last'],
                'gender': user['gender'],
                'email': f'{email_username}@{random_domain}',
                'phone': user['phone'],
                'cell': user['cell'],
                'street_number': user['location']['street']['number'],
                'street_name': user['location']['street']['name'],
                'city': user['location']['city'],
                'state': user['location']['state'],
                'country': user['location']['country'],
                'postcode': str(user['location']['postcode']),
                'nationality': user['nat'],
                'date_of_birth': user['dob']['date'],
                'age': user['dob']['age'],
                'registered_date': user['registered']['date'],
                'registered_age': user['registered']['age'],
                'picture_large': user['picture']['large'],
                'picture_medium': user['picture']['medium'],
                'picture_thumbnail': user['picture']['thumbnail'],
                'id_name': user['id']['name'],
                'id_value': user['id']['value']
            })
        
        return jsonify({
            'success': True,
            'count': len(users),
            'users': users
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
