import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import path from "path";

const TABLE = "notes";
const DB_FILE = "data/notes.sqlite";
let db: Database | null = null;

export interface NoteInterface {
  id: number;
  title: string;
  content: string;
  updated_at: string;
}

export async function getDB(): Promise<Database> {
  if (!db) {
    try {
      db = await open({
        filename: path.join(process.cwd(), DB_FILE),
        driver: sqlite3.Database,
      });

      const tableExists = await db.get(
        `SELECT name FROM sqlite_master WHERE type='table' AND name='${TABLE}';`
      );

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

export async function getAllNotes(): Promise<NoteInterface[]> {
  // In real application I would write a paginated query
  // but for this example I will just fetch all the notes
  const db = await getDB();
  return db.all<NoteInterface[]>(`SELECT * FROM ${TABLE}`);
}

export async function getNote(id: string): Promise<NoteInterface | undefined> {
  const db = await getDB();
  return db.get<NoteInterface>(`SELECT * FROM ${TABLE} WHERE id = ?`, id);
}

export async function deleteNoteById(id: number) {
  const db = await getDB();
  return db.run(`DELETE FROM ${TABLE} WHERE id = ?`, id);
}

export async function updateNote(note: {
  id: number;
  title: string;
  content: string;
}) {
  const db = await getDB();
  return db.run(
    `UPDATE ${TABLE}
    SET title = ?,
    content = ?,
    updated_at = CURRENT_TIMESTAMP 
    WHERE id = ?`, // Timestamp stored in UTC
    note.title,
    note.content,
    note.id
  );
}

export async function addNote(): Promise<NoteInterface | undefined> {
  const db = await getDB();
  const result = await db.run(
    `INSERT INTO ${TABLE} (title, content) VALUES (?, ?)`,
    "",
    ""
  );
  const id = result.lastID;
  return db.get<NoteInterface>(`SELECT * FROM ${TABLE} WHERE id = ?`, id);
}
