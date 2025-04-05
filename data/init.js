const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const fs = require("fs");
const DB_PATH = "./data/notes.sqlite";

async function initDatabase() {
  try {
    if (fs.existsSync(DB_PATH)) {
      console.info("Database already exists");
      return;
    }

    const db = await open({
      filename: DB_PATH,
      driver: sqlite3.Database,
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

    await db.exec(`
    INSERT INTO notes (title, content) VALUES
    ('Workdesk Equipment', 'Purchase the following items:\n- Remarkable tablet\n- Docking station with 2 USB-C ports\n- Headphones stand'),
    ('Passwords', 'Move them to a password manager!\n- ilya.k@gmail.com - Abc123!@#\n- kanatov92@outlook.com - Xyz789$%^&\n- ilya_dev@github.com - Passw0rd!2023'),
    ('Josh', 'Josh, 07586949902')
  `);

    console.info("Database initialized");
    await db.close();
  } catch (err) {
    console.error("Error initializing database:", err);
  }
}

initDatabase();
