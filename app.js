import express from 'express';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

import cors from 'cors'
const app = express();
app.use(cors())
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', indexRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
