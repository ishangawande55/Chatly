<img width="250" alt="Screenshot 2024-09-01 at 3 55 54 PM" src="https://github.com/user-attachments/assets/4ef9fe6a-0757-4f0d-acbe-6e3a76066722">


# Chatly - Real-Time Chatting Web Application

Chatly is a real-time chat web application that enables instant messaging and live user communication using WebSocket.io. The application features user authentication, real-time messaging, and a user-friendly interface with message display, user list, and notifications.

## Features

- **Real-Time Messaging:** Instant communication between users with WebSocket.io.
- **User Authentication:** Secure login and registration.
- **User Interface:** Responsive design with message display, user list, and notifications.
- **Scalability:** Optimized WebSocket connections to handle concurrent users.

## Project Structure

- **`public/`**: Contains the frontend code, including the user interface and client-side logic.
- **`server/`**: Contains the backend code, including server-side logic, WebSocket configuration, and API endpoints.

## Installation and Setup

### Prerequisites

- Node.js and npm

### Clone the Repository

```bash
git clone https://github.com/ishangawande55/Chatly.git
cd Chatly
```

### Setup Frontend

1. Navigate to the `public` directory:

    ```bash
    cd public
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

### Setup Backend

1. Navigate to the `server` directory:

    ```bash
    cd ../server
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

## Configuration

Ensure that both the frontend and backend are correctly configured to communicate with each other. You may need to adjust WebSocket endpoints or other configuration settings based on your environment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Thanks to all contributors and libraries that made this project possible:

- [WebSocket.io](https://socket.io/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/ishangawande55/Chatly).

```
