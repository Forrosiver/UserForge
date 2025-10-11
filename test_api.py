import requests
import json

BASE_URL = "http://localhost:5000"

print("=" * 70)
print("EXAMPLE 1: Fetch 2 users from United States (US)")
print("=" * 70)
response = requests.get(f"{BASE_URL}/api/users?results=2&nat=US")
data = response.json()
for user in data['users']:
    print(f"Name: {user['first_name']} {user['last_name']}")
    print(f"Email: {user['email']}")
    print(f"Location: {user['city']}, {user['state']}, {user['country']}")
    print(f"Nationality: {user['nationality']}")
    print("-" * 70)

print("\n" + "=" * 70)
print("EXAMPLE 2: Fetch 2 users from India (IN)")
print("=" * 70)
response = requests.get(f"{BASE_URL}/api/users?results=2&nat=IN")
data = response.json()
for user in data['users']:
    print(f"Name: {user['first_name']} {user['last_name']}")
    print(f"Email: {user['email']}")
    print(f"Location: {user['city']}, {user['state']}, {user['country']}")
    print(f"Nationality: {user['nationality']}")
    print("-" * 70)

print("\n" + "=" * 70)
print("EXAMPLE 3: Fetch 2 female users from United Kingdom (GB)")
print("=" * 70)
response = requests.get(f"{BASE_URL}/api/users?results=2&gender=female&nat=GB")
data = response.json()
for user in data['users']:
    print(f"Name: {user['first_name']} {user['last_name']}")
    print(f"Email: {user['email']}")
    print(f"Gender: {user['gender']}")
    print(f"Location: {user['city']}, {user['state']}, {user['country']}")
    print(f"Nationality: {user['nationality']}")
    print("-" * 70)

print("\n" + "=" * 70)
print("EXAMPLE 4: Raw JSON response from France (FR)")
print("=" * 70)
response = requests.get(f"{BASE_URL}/api/users?results=1&nat=FR")
data = response.json()
print(json.dumps(data, indent=2))
