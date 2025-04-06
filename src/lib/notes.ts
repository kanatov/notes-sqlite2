import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import path from "path";
import { log } from "console";

const TABLE = "notes";

let db: Database | null = null;

interface Note {
  id: number;
  title: string;
  content: string;
  updated_at: string;
}

export async function getDB(): Promise<Database> {
  if (!db) {
    try {
      db = await open({
        filename: path.join(process.cwd(), "data/notes.sqlite"),
        driver: sqlite3.Database,
      });

      const tableExists = await db.get(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='${TABLE}';`
      );
      console.log(`Table '${TABLE}' exists:`, tableExists);

      if (!tableExists) {
        console.error(`The '${TABLE}' table does not exist in the database.`);
        throw new Error(
          `Missing '${TABLE}' table in the database. Did you run 'npm i'?`
        );
      }
    } catch (error) {
      console.error("Failed to open the database:", error);
      throw error;
    }
  }
  return db;
}

export async function getAllNotes(): Promise<Note[]> {
  // In real application I would write a paginated query
  // but for this example I will just fetch all the notes
  const db = await getDB();
  return db.all<Note[]>("SELECT * FROM notes");
}

export async function getNote(id: string): Promise<Note | undefined> {
  const db = await getDB();
  return db.get<Note>("SELECT * FROM notes WHERE id = ?", id);
}
