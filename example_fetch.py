import requests
import json

BASE_URL = "http://localhost:5000"

def fetch_users(results=10, gender="", nationality=""):
    """
    Fetch user data from the UserForge API
    
    Parameters:
    - results: Number of users to generate (1-50, default: 10)
    - gender: Filter by gender ("male" or "female", optional)
    - nationality: Filter by nationality code (e.g., "US", "GB", "IN", optional)
    
    Returns:
    JSON response with structure:
    {
        "success": True,
        "count": <number_of_users>,
        "users": [
            {
                "uuid": "...",
                "username": "...",
                "title": "Mr/Ms/Mrs",
                "first_name": "John",
                "last_name": "Doe",
                "gender": "male",
                "email": "john.doe@gmail.com",
                "phone": "...",
                "cell": "...",
                "street_number": 123,
                "street_name": "Main St",
                "city": "New York",
                "state": "New York",
                "country": "United States",
                "postcode": "10001",
                "nationality": "US",
                "date_of_birth": "1990-01-01T00:00:00.000Z",
                "age": 34,
                "registered_date": "2015-01-01T00:00:00.000Z",
                "registered_age": 9,
                "picture_large": "https://...",
                "picture_medium": "https://...",
                "picture_thumbnail": "https://...",
                "id_name": "SSN",
                "id_value": "123-45-6789"
            }
        ]
    }
    """
    params = {"results": results}
    if gender:
        params["gender"] = gender
    if nationality:
        params["nat"] = nationality
    
    response = requests.get(f"{BASE_URL}/api/users", params=params)
    data = response.json()
    
    return data

def display_users(data):
    """Display user data in a readable format"""
    if data['success']:
        print(f"✅ Successfully fetched {data['count']} users\n")
        for i, user in enumerate(data['users'], 1):
            print(f"User #{i}")
            print(f"  Title: {user['title']}")
            print(f"  First Name: {user['first_name']}")
            print(f"  Last Name: {user['last_name']}")
            print(f"  Full Name: {user['title']} {user['first_name']} {user['last_name']}")
            print(f"  Email: {user['email']}")
            print(f"  Phone: {user['phone']}")
            print(f"  Cell: {user['cell']}")
            print(f"  Address: {user['street_number']} {user['street_name']}")
            print(f"  City: {user['city']}")
            print(f"  State: {user['state']}")
            print(f"  Zip: {user['postcode']}")
            print(f"  Country: {user['country']} ({user['nationality']})")
            print(f"  Age: {user['age']}")
            print(f"  Gender: {user['gender']}")
            print("-" * 60)
    else:
        print(f"❌ Error: {data['error']}")

if __name__ == "__main__":
    # Example 1: Fetch 3 random users
    print("Example 1: Fetching 3 random users...")
    print("=" * 60)
    data = fetch_users(results=3)
    display_users(data)
    
    # Example 2: Fetch 2 female users from India
    print("\n\nExample 2: Fetching 2 female users from India...")
    print("=" * 60)
    data = fetch_users(results=2, gender="female", nationality="IN")
    display_users(data)
    
    # Example 3: Get raw JSON response
    print("\n\nExample 3: Raw JSON response (first user only)...")
    print("=" * 60)
    data = fetch_users(results=1)
    if data['success'] and data['users']:
        print(json.dumps(data['users'][0], indent=2))
