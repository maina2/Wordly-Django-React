# Wordly

Wordly is a content publishing platform similar to Medium, allowing users to create, share, and read articles. It is designed to offer a seamless experience for both content creators and readers.

**Live Demo:** [Wordly](https://wordly-client.onrender.com/landingpage)

## Features

- User authentication (Sign up, Log in, Log out)
- Create, edit, and delete articles
- Browse and read articles by other users
- Like, comment, and share articles
- User profiles with author bios and article lists
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend:**
  - React
  - Tailwind CSS
  - Vite
- **Backend:**
  - Django (Django REST Framework)
  - PostgreSQL
- **Real-Time Functionality:**
  - WebSockets for real-time updates
- **Cloud Storage:**
  - Cloudinary for image handling

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wordly.git
Navigate to the project directory:

bash
Copy
Edit
cd wordly
Install the necessary dependencies for the frontend:

bash
Copy
Edit
cd frontend
npm install
Start the frontend development server:

bash
Copy
Edit
npm run dev
Set up the backend:

Install Python dependencies:
bash
Copy
Edit
pip install -r requirements.txt
Run database migrations:
bash
Copy
Edit
python manage.py migrate

Start the Django development server:
bash
Copy
Edit
python manage.py runserver
