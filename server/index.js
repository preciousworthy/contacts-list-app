import express, { json } from 'express';
import cors from 'cors';
import db  from './db/db-connection.js';

//dotenv.config();

const app = express();
const PORT = 2008; 

app.use(cors());
app.use(json());


app.get('/',(req, res) => {
    res.json("Welcome to our Express Server on Port 2008!")
});

app.get('api/contacts', cors(), async (req, res) => {
    try {
        const { rows: contacts } = await db.query('SELECT * FROM contacts;');
        res.send(contacts);
    } catch (e) {
        return res.status(400).json({ e })
    }
})



app.listen(PORT, () => console.log(`What's good?! We live and direct on Port ${PORT}!`));