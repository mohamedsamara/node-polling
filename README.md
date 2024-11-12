# Node Long Polling

This project demonstrates a simple long polling mechanism for real-time notifications using Node.js and Express. When a client requests new notifications, the server checks for updates and responds only when new notifications are available. The client continuously polls the server and displays messages in the UI.

An **AbortController** is used to safely manage and cancel polling requests. The server also provides an endpoint to add new notifications, allowing the client to dynamically fetch and display updates. This approach provides an efficient way to push updates without constant polling or WebSocket overhead.
