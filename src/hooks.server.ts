import type { Handle } from '@sveltejs/kit';
import sqlite3 from 'sqlite3';
import { Hyperdeck } from 'hyperdeck-connect'

export const handle: Handle = async ({ event, resolve }) => {
  if (!event.locals.db) {
    // This will create the database within the `db.sqlite` file.
    const db = new sqlite3.Database('db.sqlite', (err) => {
      if(err) {
        throw err;
      }
    });
    
    // Set the db as our events.db variable.
    event.locals.db = db
    
    // We can create a basic table in the db
    const query = "CREATE TABLE IF NOT EXISTS hyperdeck (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, ip TEXT)"
    db.run(query, (err) => {
      if(err) {
        throw err
      }
    })
  }

  const hd = new Hyperdeck()

  const resp = await resolve(event);
  return resp;
};