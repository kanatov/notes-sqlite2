# Notes app

## Project features

|                                 |                                                           |
| ------------------------------- | --------------------------------------------------------- |
| **Next.js, SQLite, TypeScript** | + Tailwind for styling.                                   |
| **CRUD operations**             | Server actions for data mutations.                        |
| **App routes**                  | Dynamic and parallel routing features of Next.js.         |
| **useActionState()**            | Manages state between client and server components.       |
| **Relative time stamps**        | Time-zone accurate and human-readable timestamps.         |
| **Continious saving**           | No need to hit save button every time to save the changes |
| **Desktop and mobile versions** |                                                           |

#### Spent time

32 hours

#### The most challenging moments

The problems that challenge me the most was always around making the app seamless and smooth for the user.
The features like conitnious saving, tracking saving status and refreshing notes were the one that take most of the time.

**Video demonstarion**
[![Notes SQLite Next.js app](https://github.com/user-attachments/assets/6b77bc40-8fc2-44f0-9184-993746800bfd)](https://youtu.be/n9riRcmoA9o "Notes SQLite Next.js app")

| **Desktop**                                                                                             | **Desktop note**                                                                                         |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![Desktop](https://github.com/user-attachments/assets/28203289-e031-4d17-be4b-8d736c8d29a9)             | ![Desktop note](https://github.com/user-attachments/assets/dfa54b3d-7c8f-4159-9267-7a11d4d9da89)         |
| **Desktop new note**                                                                                    |                                                                                                          |
| ![Desktop new note](https://github.com/user-attachments/assets/9121f3c1-f270-48d1-8eb6-2fab26e8e4b7)    |                                                                                                          |
| **Mobile**                                                                                              | **Mobile note**                                                                                          |
| ![Mobile](https://github.com/user-attachments/assets/92fa252f-d2d4-489c-bce3-f94e68b0eb2b)              | ![Mobile note](https://github.com/user-attachments/assets/8e6733b6-b747-4064-84b8-ba4caea2ea19)          |
| **Relative time stamp**                                                                                 | **After saving**                                                                                         |
| ![Relative time stamp](https://github.com/user-attachments/assets/9ac0e906-e7c8-4f50-9a56-0f911e8ae9b3) | ![After saving](https://github.com/user-attachments/assets/5b82deda-7df5-4be3-9274-72d01339bd15)         |
| **Saving in progress**                                                                                  |                                                                                                          |
| ![Delete](https://github.com/user-attachments/assets/b526d1bd-426e-4b47-838c-f97b626bc80d)              |                                                                                                          |
| **Delete**                                                                                              | **Deleting in progress**                                                                                 |
| ![Delete](https://github.com/user-attachments/assets/3ffba546-2657-4514-a9bb-a5e97a7a5a79)              | ![Deleting in progress](https://github.com/user-attachments/assets/f55fa20f-272c-4abe-bd24-15df0deb2428) |
| **Add new**                                                                                             | **Adding in progress**                                                                                   |
| ![Delete](https://github.com/user-attachments/assets/ca8eaf76-339f-4440-aff6-190df3afe904)              | ![Deleting in progress](https://github.com/user-attachments/assets/554146b6-b8ed-4a3f-9b2b-523c87617f86) |

## How to Run the Project

1. Clone the repo: `https://github.com/kanatov/notes-sqlite2.git`
2. `cd notes-sqlite2`
3. Run `npm i` to install dependencies and **init SQLite**
4. Use `npm run` to list all available commands

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `npm start`     | Creates an optimized build, starts the server and app |
| `npm run dev`   | Runs dev mode                                         |
| `npm run build` | Builds the production version of the project          |
| `npm run lint`  | Lint errors check                                     |

## Frontend Implementation

### Next.js App Router Structure

While this task could be implemented as a Single Page Application, I thought it would be better to use the routing structure of Next.js and the features like dynamic routes and parallel routes.

I started the task with quick sketching of what building blocks and flows I might face during the implementation.

<img src="https://github.com/user-attachments/assets/58429f63-2852-49e0-8415-e75468150608" width="400"/>

| Element      | Purpose                                                                        |
| ------------ | ------------------------------------------------------------------------------ |
| `[id]`       | **Dynamic route** to view note and access it by link                           |
| `@notesGrid` | **Parallel route** to make all the notes available regardless the current page |
|              | and let them independently fetch content                                       |

### useActionState()

I used `useActionState()` hook to handle the data mutations and be able to communicate between the server functions and client side.
It provides me access to:

- `state` of the action.
- `formAction` function that I can call when I need to send a message to the server function.
- `pending` status so I can give a visual feedback to the user.

### Time-related problems

Time problems are once of those that needs a lot of attention. In my case I stor UTC timestamp in SQLite and would like to show the user time in 3 different formats in their own timezone. I was absolutely happy to discover `date-fns` library that has solutions for whole range of the time-related problems like a swiss knife.

|                          |                                                      |
| ------------------------ | ---------------------------------------------------- |
| Dec 25, 2024 at 10:10    | Full timestamp for the notes of more than a year old |
| Feb 05 at 13:25          | Short timestamp for the notes updated this year      |
| Last saved: 1 minute ago | Relative timestamp of the recent changes             |

## Backend Implementation

### Server Actions

- **updateNoteAction**: Handles updating existing notes in the SQLite database.
- **deleteNoteAction**: Manages the deletion of notes, ensuring data integrity.
- **addNoteAction**: Facilitates the addition of new notes, integrating with the database efficiently.

### SQLite

I've created a table with a typical schema for the note that includes `id`, `title`, `content` and the last `updated_at` time.

```sql
CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Thank you!

And don't forget to check an alternative version as well `:)`

https://www.youtube.com/watch?v=3DVldTjYPWY
