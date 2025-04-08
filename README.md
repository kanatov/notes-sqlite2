# Notes app

Project features:

- **Next.js, SQLite, Typescript**
- **CRUD operations**: server actions for data mutations
- **App routes**: dynamic and parallel routes features
- **Action state**: passing state between client and server
- **Relative time stamps**: time-zone accurate and human readable time stamps
- **Desktop and mobile versions**

Video of the interaction:
[![Notes SQLite Next.js app](https://github.com/user-attachments/assets/1478280d-2aa5-4482-9171-2b33b817c626)](https://youtu.be/3DVldTjYPWY "Notes SQLite Next.js app")

| **Desktop**                                                                          | **Desktop note**                                                                     |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| ![](https://github.com/user-attachments/assets/2bdb9551-73a0-46c3-a1ea-97d5c866759d) | ![](https://github.com/user-attachments/assets/80a96a23-f236-48af-a741-e85ffe822f3a) |
| **Mobile**                                                                           | **Mobile note**                                                                      |
| ![](https://github.com/user-attachments/assets/a31bb14e-06ea-4432-bb5d-82987da7293c) | ![](https://github.com/user-attachments/assets/d21ed7a2-2874-449a-94c5-dd7741866de7) |
| **Relative time stamp**                                                              | **After saving**                                                                     |
| ![](https://github.com/user-attachments/assets/bf101369-60ac-47d9-98a9-989bb6f88e56) | ![](https://github.com/user-attachments/assets/c0f3113d-4946-4c90-9474-eec4c1e3ef8d) |
| **Delete**                                                                           | **Deleting in progress**                                                             |
| ![](https://github.com/user-attachments/assets/d36f21fa-5e35-4c20-aaa0-cd7b3fa5c6b8) | ![](https://github.com/user-attachments/assets/8200eb5d-5774-405d-a0da-26065b219721) |

## How to Run the Project

1. Clone the repo: `https://github.com/kanatov/notes-sqlite.git`
2. `cd notes-sqlite`
3. Run `npm i` to install dependencies and init database (you might need to install **SQLite**)
4. Use `npm run` to list all available commands

| Command                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `npm start`            | Creates an optimized build, starts the server and app |
| `npm run dev`          | Runs dev mode                                         |
| `npm run build`        | Builds the production version of the project          |
| `npm run lint`         | Lint errors check                                     |
| `npm run e2e:headless` | Runs E2E tests with Cypress (if installed)            |
