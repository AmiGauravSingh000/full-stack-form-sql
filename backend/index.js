import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db_config.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const q = 'INSERT INTO users (name, email, mobile) VALUES (?)';
  const values = [
    req.body.name,
    req.body.email,
    req.body.mobile
  ];

  db.query(q,[values],(err,data)=>{
    if(err) return res.json(err);
    return res.json("User has been Added successfully");
  })

});




app.get('/users', async (req, res) => {
  const q = 'SELECT * FROM users';
  db.query(q, (err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
