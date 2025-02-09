import { DatabaseSync } from 'node:sqlite'
const database = new DatabaseSync(":memory:");

database.exec(`
    CREATE TABLE Stuff(
    StuffId INTEGER PRIMARY KEY,
    Name TEXT
    )
`)

const insertStatement = database.prepare('INSERT INTO Stuff VALUES (NULL,?)');
const selectQuery = database.prepare('SELECT * FROM Stuff');

const firstResult = insertStatement.run('First item').changes
console.log(`Inserted ${firstResult} rows`)
console.log(selectQuery.all())

const secondResult = insertStatement.run('Second item').changes
console.log(`Inserted ${secondResult} rows`)
console.log(selectQuery.all())
