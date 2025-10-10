# ðŸŽ¨ UserForge

<div align="center">

![UserForge Banner](https://img.shields.io/badge/UserForge-Craft_Realistic_User_Profiles-purple?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIxVjE5QzIwIDE3LjkzOTEgMTkuNTc4NiAxNi45MjE3IDE4LjgyODQgMTYuMTcxNkMxOC4wNzgzIDE1LjQyMTQgMTcuMDYwOSAxNSAxNiAxNUg4QzYuOTM5MTMgMTUgNS45MjE3MiAxNS40MjE0IDUuMTcxNTcgMTYuMTcxNkM0LjQyMTQzIDE2LjkyMTcgNCAxNy45MzkxIDQgMTlWMjFNMTYgN0MxNiA5LjIwOTE0IDE0LjIwOTEgMTEgMTIgMTFDOS43OTA4NiAxMSA4IDkuMjA5MTQgOCA3QzggNC43OTA4NiA5Ljc5MDg2IDMgMTIgM0MxNC4yMDkxIDMgMTYgNC43OTA4NiAxNiA3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)

**Generate realistic user profiles in seconds with a beautiful, modern interface**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)](https://flask.palletsprojects.com/)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Now-brightgreen?style=for-the-badge&logo=vercel)](https://userforge.vercel.app/)

[Live Demo](https://userforge.vercel.app/) â€¢ [Features](#features) â€¢ [Quick Start](#quick-start) â€¢ [API Documentation](#api-documentation) â€¢ [Deployment](#deployment)

</div>

---

## âœ¨ Features

- ðŸŽ¯ **Custom Filters** - Generate users by gender, nationality, and quantity
- ðŸŒ **18+ Countries** - Support for US, UK, India, and 15+ other countries
- ðŸŽ¨ **5 Theme Options** - Dark, Light, Red, Blue, and Green themes
- ðŸ“± **Responsive Design** - Works seamlessly on all devices
- âš¡ **Fast & Modern** - Built with performance in mind
- ðŸ”„ **Live Updates** - Real-time user generation
- ðŸ“Š **Detailed Profiles** - Complete user information including:
  - Name (Title, First, Last)
  - Contact (Email, Phone, Cell)
  - Location (Address, City, State, Country, Zip)
  - Personal (Age, Gender, DOB, Registration Date)
  - Identification (Username, ID documents)
  - Profile Pictures (Large, Medium, Thumbnail)

## ðŸš€ Quick Start

### Prerequisites

- Python 3.8 or higher
- pip package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/walterwhite-69/UserForge.git
   cd UserForge
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```

4. **Open your browser**
   ```
   http://localhost:5000
   ```

## ðŸ“– API Documentation

### Endpoint: `GET /api/users`

Generate random user profiles with optional filters.

#### Query Parameters

| Parameter | Type | Description | Default | Example |
|-----------|------|-------------|---------|---------|
| `results` | integer | Number of users (1-50) | 10 | `?results=5` |
| `gender` | string | Filter by gender (`male`, `female`) | - | `?gender=female` |
| `nat` | string | Nationality code (see below) | - | `?nat=US` |

#### Supported Countries

| Code | Country | Code | Country |
|------|----------|------|---------|
| `US` | United States | `GB` | United Kingdom |
| `IN` | India | `CA` | Canada |
| `AU` | Australia | `BR` | Brazil |
| `FR` | France | `DE` | Germany |
| `ES` | Spain | `MX` | Mexico |
| `NL` | Netherlands | `CH` | Switzerland |
| `DK` | Denmark | `FI` | Finland |
| `IE` | Ireland | `NO` | Norway |
| `NZ` | New Zealand | - | - |

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

## ðŸ Python Usage

```python
import requests
import json

BASE_URL = "http://localhost:5000"

# Fetch 5 users from United States
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

## ðŸŒ JavaScript Usage

```javascript
// Fetch 3 female users from India
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

## ðŸŽ¨ Themes

UserForge comes with 5 beautiful themes:

- ðŸŒ™ **Dark** - Default dark theme with purple accents
- â˜€ï¸ **Light** - Clean light theme
- ðŸ”¥ **Red** - Vibrant red theme
- ðŸ’§ **Blue** - Cool blue theme
- ðŸŒ¿ **Green** - Fresh green theme

Click the theme toggle button in the header to cycle through themes.

## ðŸš¢ Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Heroku

1. Create a Heroku app:
   ```bash
   heroku create your-app-name
   ```

2. Push to Heroku:
   ```bash
   git push heroku main
   ```

### Deploy to Railway

1. Connect your GitHub repository to Railway
2. Configure the start command: `python app.py`
3. Deploy!

## ðŸ“ Project Structure

```
UserForge/
â”œâ”€â”€ static/
â”‚   â”œâ”€â”€ index.html      # Main HTML file
â”‚   â”œâ”€â”€ style.css       # Styles and themes
â”‚   â””â”€â”€ app.js          # Frontend JavaScript
â”œâ”€â”€ app.py              # Flask backend server
â”œâ”€â”€ example_fetch.py    # Python usage examples
â”œâ”€â”€ requirements.txt    # Python dependencies
â”œâ”€â”€ vercel.json         # Vercel deployment config
â””â”€â”€ README.md           # This file
```

## ðŸ› ï¸ Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **API**: RandomUser.me API
- **Styling**: Custom CSS with CSS Variables
- **Deployment**: Vercel/Heroku/Railway compatible

## ðŸ“ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ðŸ¤ Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ðŸ’¡ Use Cases

- **Development & Testing** - Generate test user data for applications
- **UI/UX Design** - Populate mockups with realistic user profiles
- **Data Analysis** - Create sample datasets for analysis
- **Education** - Learn API integration and data handling

## ðŸ™ Acknowledgments

- User data provided by [RandomUser.me](https://randomuser.me/)
- Icons and design inspiration from modern web design trends

## ðŸ“ž Contact

Have questions or want to collaborate? Reach out!

- ðŸ’¬ **Discord Server**: [discord.gg/rgWcEw5G8a](https://discord.gg/rgWcEw5G8a)
- ðŸ‘¤ **Discord Username**: `heisenburger_7`

---

<div align="center">

**Made with â¤ï¸ by Walter**

[â¬† back to top](#-userforge)

</div>