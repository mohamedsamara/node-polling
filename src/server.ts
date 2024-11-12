import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 3000;

// Simulate data storage or events
let notifications: string[] = ["Welcome to the app!", "New message received."];

app.use(express.static("public"));

// Endpoint for long polling
app.get("/poll", (req: Request, res: Response) => {
  const checkForUpdates = () => {
    console.log("Checking for updates...", notifications);

    // If there are new notifications, send them to the client
    if (notifications.length > 0) {
      const notification = notifications.pop();
      res.json({ message: notification });
    } else {
      // If no new data, wait and check again after 2 seconds (simulate delay)
      setTimeout(checkForUpdates, 2000);
    }
  };

  // Start checking for updates
  checkForUpdates();
});

// Endpoint to add a new notification
app.post("/add-notification", (req: Request, res: Response) => {
  notifications.push("New notification at " + new Date().toLocaleTimeString());
  res.send("Notification added.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
