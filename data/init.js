const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const fs = require("fs");
const DB_PATH = "./data/notes.sqlite";
const TABLE_NAME = "notes";

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

    // Timestamp stored in UTC
    await db.exec(`
      CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await db.exec(`
      INSERT INTO ${TABLE_NAME} (title, content, updated_at) VALUES
      ('Workdesk Equipment', 'Purchase the following items:\n- Remarkable tablet\n- Docking station with 2 USB-C ports\n- Headphones stand', '2025-03-15 10:30'),
      ('Passwords', 'Move them to a password manager!\n- ilya.k@gmail.com - Abc123!@#\n- kanatov92@outlook.com - Xyz789$%^&\n- ilya_dev@github.com - Passw0rd!2023', '2024-11-20 14:45'),
      ('Josh', 'Josh, 07586949902', '2024-08-05 09:15'),
      ('Meeting Agenda', 'Discuss the following:\n1. Project updates\n2. Budget allocation\n3. Team feedback', '2024-12-10 16:00'),
      ('Grocery List', 'Buy:\n- Milk\n- Eggs\n- Bread\n- Coffee\n- Apples', '2025-01-22 08:20'),
      ('Project Roadmap', 'Detailed roadmap for the upcoming project:\n1. Research and gather requirements (2 weeks)\n2. Design wireframes and prototypes (3 weeks)\n3. Development phase:\n   - Backend API implementation (4 weeks)\n   - Frontend integration (4 weeks)\n4. Testing and QA (2 weeks)\n5. Deployment and monitoring (1 week)\n6. Post-launch feedback and iteration (ongoing)\n\nKey milestones:\n- Initial prototype ready by end of month 1\n- Beta release by end of month 2\n- Final release by end of month 3\n\nResources needed:\n- Dedicated QA team\n- Cloud hosting services\n- Additional frontend developer\n\nRisks and mitigation:\n- Delays in requirement gathering: Schedule regular check-ins with stakeholders\n- Scope creep: Define clear boundaries and prioritize features\n- Technical challenges: Allocate time for research and prototyping', '2024-10-18 11:10'),
      ('Vacation Ideas', '1. Visit Japan during cherry blossom season\n2. Explore Iceland''s waterfalls\n3. Relax on the beaches of Bali', '2025-02-05 13:25'),
      ('Book Recommendations', '1. Atomic Habits by James Clear\n2. Deep Work by Cal Newport\n3. The Pragmatic Programmer by Andrew Hunt and David Thomas', '2024-09-12 17:40'),
      ('Fitness Goals', '1. Run 5km three times a week\n2. Start yoga classes\n3. Track daily calorie intake', '2024-07-30 07:50'),
      ('Birthday Gift Ideas', '1. Noise-cancelling headphones\n2. Personalised photo album\n3. Smartwatch', '2025-03-01 12:00'),
      ('Car Maintenance', '1. Change oil\n2. Check tire pressure\n3. Replace windshield wipers', '2024-11-05 15:35'),
      ('Conference Notes', 'Key takeaways:\n- Embrace agile methodologies\n- Focus on user-centric design\n- Invest in team training', '2024-12-25 10:10'),
      ('Home Renovation', '1. Paint the living room\n2. Install new kitchen cabinets\n3. Replace bathroom tiles', '2025-01-10 09:00'),
      ('Weekend Plans', '1. Go hiking in the nearby trails\n2. Watch the new movie release\n3. Try the new Italian restaurant downtown', '2024-08-20 18:30')
    `);

    console.info("Database initialized");
    await db.close();
  } catch (err) {
    console.error("Error initializing database:", err);
  }
}

initDatabase();
