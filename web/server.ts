import express from 'express';
import { exec } from 'child_process';
import { renderFile } from 'ejs';
const app = express();

app.set('view engine', 'html');
app.engine('html', renderFile);

app.get('/', (_req, res) => {
  res.send("yo");
});

app.get('/compile/:content', (req, res) => {
  const { content } = req.params;
  exec(`npx ts-node ../index.ts run -c ${content}`, (_err, o) => {
    res.render('o', {o});
  });
});

app.listen(3000, () => {
  console.log("Server is listening");
});