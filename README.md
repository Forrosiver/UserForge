# UserForge

<div align="center">

![UserForge Banner](https://img.shields.io/badge/UserForge-Craft_Realistic_User_Profiles-purple?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIxVjE5QzIwIDE3LjkzOTEgMTkuNTc4NiAxNi45MjE3IDE4LjgyODQgMTYuMTcxNkMxOC4wNzgzIDE1LjQyMTQgMTcuMDYwOSAxNSAxNiAxNUg4QzYuOTM5MTMgMTUgNS45MjE3MiAxNS40MjE0IDUuMTcxNTcgMTYuMTcxNkM0LjQyMTQzIDE2LjkyMTcgNCAxNy45MzkxIDQgMTlWMjFNMTYgN0MxNiA5LjIwOTE0IDE0LjIwOTEgMTEgMTIgMTFDOS43OTA4NiAxMSA4IDkuMjA5MTQgOCA3QzggNC43OTA4NiA5Ljc5MDg2IDMgMTIgM0MxNC4yMDkxIDMgMTYgNC43OTA4NiAxNiA3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)

**Generate realistic user profiles in seconds with a modern interface**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)](https://flask.palletsprojects.com/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Now-brightgreen?style=for-the-badge&logo=vercel)](https://userforge.vercel.app/)

[Live Demo](https://userforge.vercel.app/) â€¢ [Features](#features) â€¢ [Quick Start](#quick-start) â€¢ [API Documentation](#api-documentation) â€¢ [Deployment](#deployment)

</div>

---

## Features

- Custom Filters - Generate users by gender, nationality, and quantity
- 18+ Countries - Support for US, UK, India, and 15+ other countries
- 5 Theme Options - Dark, Light, Red, Blue, and Green themes
- Responsive Design - Works seamlessly on all devices
- Fast & Modern - Built with performance in mind
- Live Updates - Real-time user generation
- Detailed Profiles - Complete user information including:
  - Name (Title, First, Last)
  - Contact (Email, Phone, Cell)
  - Location (Address, City, State, Country, Zip)
  - Personal (Age, Gender, DOB, Registration Date)
  - Identification (Username, ID documents)
  - Profile Pictures (Large, Medium, Thumbnail)

## Quick Start

### Prerequisites

- Python 3.8 or higher
- pip package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/walterwhite-69/UserForge.git
   cd UserForge
   ```

2. Install dependencies
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application
   ```bash
   python app.py
   ```

4. Open your browser
   ```
   http://localhost:5000
   ```

## API Documentation

### Endpoint: `GET /api/users`

Generate random user profiles with optional filters.

#### Query Parameters

| Parameter | Type | Description | Default | Example |
|-----------|------|-------------|---------|---------|
| results | integer | Number of users (1-50) | 10 | ?results=5 |
| gender | string | Filter by gender (male, female) | - | ?gender=female |
| nat | string | Nationality code (see below) | - | ?nat=US |

#### Supported Countries

| Code | Country | Code | Country |
|------|----------|------|---------|
| US | United States | GB | United Kingdom |
| IN | India | CA | Canada |
| AU | Australia | BR | Brazil |
| FR | France | DE | Germany |
| ES | Spain | MX | Mexico |
| NL | Netherlands | CH | Switzerland |
| DK | Denmark | FI | Finland |
| IE | Ireland | NO | Norway |
| NZ | New Zealand | - | - |

### Example Request

```bash
curl "http://localhost:5000/api/users?results=3&gender=female&nat=IN"
```

### Example Response

```json
{
  "success": true,
  "count": 3,
  "users": [
    {
      "uuid": "9868e7b1-8b9a-467a-b340-a17850f0b8d8",
      "username": "crazybear679",
      "title": "Mrs",
      "first_name": "Ramya",
      "last_name": "Nair",
      "gender": "female",
      "email": "ramya.nair@mail.com",
      "phone": "7042259002",
      "cell": "7111232211",
      "street_number": 8736,
      "street_name": "Lamington Rd",
      "city": "Serampore",
      "state": "Punjab",
      "country": "India",
      "postcode": "42713",
      "nationality": "IN",
      "date_of_birth": "1986-05-15T08:30:45.123Z",
      "age": 38,
      "registered_date": "2015-03-20T14:22:10.456Z",
      "registered_age": 9,
      "picture_large": "https://randomuser.me/api/portraits/women/75.jpg",
      "picture_medium": "https://randomuser.me/api/portraits/med/women/75.jpg",
      "picture_thumbnail": "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      "id_name": "UIDAI",
      "id_value": "305295008847"
    }
  ]
}
```

## Python Usage

```python
import requests
import json

BASE_URL = "http://localhost:5000"

response = requests.get(f"{BASE_URL}/api/users?results=5&nat=US")
data = response.json()

for user in data['users']:
    print(f"Name: {user['first_name']} {user['last_name']}")
    print(f"Email: {user['email']}")
    print(f"Location: {user['city']}, {user['state']}")
    print("-" * 50)
```

### Output Example

```
Name: Same Barnes
Email: same.barnes@aol.com
Location: Fullerton, Rhode Island
--------------------------------------------------
Name: Lorraine Steward
Email: lorraine.steward@yahoo.com
Location: Richardson, Pennsylvania
--------------------------------------------------
```

## JavaScript Usage

```javascript
fetch('http://localhost:5000/api/users?results=3&gender=female&nat=IN')
  .then(response => response.json())
  .then(data => {
    data.users.forEach(user => {
      console.log(`${user.first_name} ${user.last_name}`);
      console.log(`Email: ${user.email}`);
      console.log(`Phone: ${user.phone}`);
    });
  });
```

## Themes

UserForge includes 5 themes:
- Dark (default, with purple accents)
- Light (clean and minimal)
- Red (vibrant look)
- Blue (cool and soft)
- Green (fresh tone)

Click the theme toggle button in the header to switch themes.

## Deployment

### Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Heroku

1. Create a Heroku app:
   ```bash
   heroku create your-app-name
   ```

2. Push to Heroku:
   ```bash
   git push heroku main
   ```

### Railway

1. Connect your GitHub repository to Railway
2. Set the start command: `python app.py`
3. Deploy!

## Project Structure

```
UserForge/
â”œâ”€â”€ static/
â”‚   â”œâ”€â”€ index.html
â”‚   â”œâ”€â”€ style.css
â”‚   â””â”€â”€ app.js
â”œâ”€â”€ app.py
â”œâ”€â”€ example_fetch.py
â”œâ”€â”€ requirements.txt
â”œâ”€â”€ vercel.json
â””â”€â”€ README.md
```

## Tech Stack

- Backend: Flask (Python)
- Frontend: HTML5, CSS3, JavaScript
- API: RandomUser.me
- Styling: Custom CSS Variables
- Deployment: Vercel, Heroku, Railway

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome!

1. Fork the project
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Use Cases

- Development & Testing - Generate test user data
- UI/UX Design - Populate designs with realistic profiles
- Data Analysis - Create sample datasets
- Education - Learn API integration and JSON handling

## Acknowledgments

- Data: [RandomUser.me](https://randomuser.me/)
- Inspiration: modern minimal web design

## Contact

Have questions or want to collaborate?

- Discord: [discord.gg/rgWcEw5G8a](https://discord.gg/rgWcEw5G8a)
- Discord Username: heisenburger_7

---

<div align="center">

Made with love by Walter

[Back to top](#userforge)

</div>
