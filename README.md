# Issues Dashboard

A clean, responsive web application that dynamically loads and displays support tickets / issues from a JSON data source.

<p align="center">
  <img src="Images/Issues%20Shot.jpeg" alt="Issues Dashboard Screenshot" width="800"/>
  <br>
  <em>Current view of the dashboard showing multiple issues</em>
</p>

## Features

- Fetches issue data from remote JSON (GitHub raw or any API)
- Renders **all** tickets as responsive Bootstrap cards
- Shows priority & status with colored badges
- Displays formatted dates (created/updated/closed)
- Loading spinner + user-friendly error messages
- Null-safe rendering (handles missing fields gracefully)
- Vanilla JavaScript + Bootstrap 5 – no heavy frameworks

## Demo
https://front-end-challenge-seven-iota.vercel.app

## Technologies

- HTML5
- CSS (Bootstrap 5)
- Vanilla JavaScript (ES6+)
- Fetch API
- Vercel (for hosting demo)

## Project Structure

```text
[Front-End-Challenge](https://github.com/BonganiChauke/Front-End-Challenge.git)/
├── **index.html**          # Main HTML file with Bootstrap + container
├── **script.js**           # JavaScript: fetch, render cards, error/loading handling
├── **style.css**           # Styling 
├── **Images/**             # Folder for screenshots and assets
│   └── **Issues Shot.jpeg** # Screenshot of the running dashboard with multiple issue cards
├── **README.md**           # This file
```

## How to Use
- This guide will help you download the project from GitHub as a ZIP file and run it locally using **Visual Studio Code (VS Code)**.
- 
## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) installed on your computer

## Step 1: Download the Project as ZIP

1. Open your web browser and go to the repository:  
   **[Front-End-Challenge GitHub Repository](https://github.com/BonganiChauke/Front-End-Challenge.git)**

2. Locate the green **Code** button near the top-right.

3. Click **Code** → **Download ZIP**

4. Wait for the download to finish (file will usually be named `Front-End-Challenge-main.zip`)

5. Find the downloaded file in your **Downloads** folder (or wherever your browser saves files)

## Step 2: Extract the ZIP File

1. Right-click the downloaded ZIP file  
2. Choose **Extract All…** (Windows) or use your preferred archive tool (7-Zip, WinRAR, The Unarchiver, etc.)  
3. Select a destination folder (e.g. Desktop, Documents/projects, etc.)  
4. Click **Extract**

## Step 3: Open the Project in VS Code

1. Launch **Visual Studio Code**

2. Go to menu: **File → Open Folder…**  
   (or press `Ctrl+K Ctrl+O` / `Cmd+K Cmd+O` on Mac)

3. Navigate to the extracted folder  
   → usually named `Front-End-Challenge-main` or `Front-End-Challenge`

4. Select the folder and click **Open** / **Select Folder**

## Step 4: Project Structure Overview

After opening the folder, you'll see these important files:

```text
Front-End-Challenge/
├── index.html          ← Main HTML file (uses Bootstrap)
├── script.js           ← Fetches data + renders issue cards + error/loading handling
├── style.css           ← Custom styles
├── Images/
│   └── Issues Shot.jpeg   ← Screenshot of how the final dashboard should look
└── README.md           ← This file
```

## Step 5: 
- In the Explorer sidebar (left), find and double-click **index.html**
→ It opens in the editor tab.

## Step 6: Run / Preview the Project
- Recommended: Using Live Server (best experience)
- Open Extensions view
- Ctrl+Shift+X or Cmd+Shift+X or click the square Extensions  icon
- Search for Live Server
- Install it (by Ritwick Dey – most popular one)
- Right-click index.html in Explorer
- Choose Open with Live Server

→ Your default browser should automatically open with a live-reloading preview
### Alternative: Manual opening
- In your file explorer / Finder, go to the project folder
Right-click index.html
- Select Open with → choose Chrome / Edge / Firefox / etc.

### Step 7: What to Expect
- A dashboard showing issue cards fetched from an API
- Loading state while data is being retrieved
- Error handling if something goes wrong
- Responsive layout (thanks to Bootstrap)

### For reference, check the file:
- Images/Issues Shot.jpeg

## You're all set!
-You now have the Front-End Challenge project running locally.
Feel free to explore the code, modify styles, experiment with the JavaScript logic, or use it as reference.

## To-Do / Future Improvements
- Add client-side search/filter by title, status, priority or assignee
- Implement sorting (e.g. newest first, high priority first)

## Contributing
- Contributions are welcome and appreciated!
- Fork the repository
- Create your feature branch (git checkout -b feature/amazing-feature)
- Commit your changes (git commit -m 'Add some amazing feature')
- Push to the branch (git push origin feature/amazing-feature)
- Open a Pull Request
  
### Please
- Follow the existing code style
- Add comments for new logic
- Update the README if you add/remove features
- Make sure the app still works with the sample JSON

## License
- This project is licensed under the MIT License – see the LICENSE file for details.
- You are free to use, modify, distribute, and sell this software (with or without changes), as long as you include the original copyright and license notice.
- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
