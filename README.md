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
your-repo-name/
├── **index.html**          # Main HTML file with Bootstrap + container
├── **script.js**           # JavaScript: fetch, render cards, error/loading handling
├── **style.css**           # Styling 
├── **Images/**             # Folder for screenshots and assets
│   └── **Issues Shot.jpeg** # Screenshot of the running dashboard with multiple issue cards
├── **README.md**           # This file
```

## How to Use

1. Clone the repository
   ```bash
   git clone https://github.com/dubeboy/your-repo-name.git
   ```

## To-Do / Future Improvements
- Add client-side search/filter by title, status, priority or assignee
- Implement sorting (e.g. newest first, high priority first)
- Dark mode toggle (using CSS variables + localStorage)

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
