# CleanCity - Smart Waste Management Scheduler

## Description

CleanCity is a web application designed to help manage waste schedules efficiently. It consists of a backend API built with Node.js and a frontend React application.

## Getting Started

### Prerequisites

- Node.js (v18.15.0 or later)
- PostgreSQL (for the backend)
- React (for the frontend)

### Setup

1. **Backend**

   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Create a `.env` file with the following content:
     ```plaintext
     DATABASE_URL=postgres://user:password@localhost:5432/mydatabase
     ```

   - Start the backend server:
     ```bash
     npm start
     ```

2. **Frontend**

   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

   - Create a `.env` file with the following content:
     ```plaintext
     REACT_APP_API_URL=http://localhost:5000
     ```

   - Start the React development server:
     ```bash
     npm start
     ```

### Testing

- **Backend Tests:**
  ```bash
  cd backend
  npm test


## Frontend Tests:
cd frontend
npm test

### Deployment
For deployment instructions, please refer to Deployment Instructions (add details about deployment if available).

### License
This project is licensed under the MIT License - see the LICENSE file for details.
