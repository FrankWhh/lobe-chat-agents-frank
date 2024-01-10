import express from 'express';
const app = express();

app.use(express.static('./public'));

app.listen(9000, function () {
  console.log('App is listening on port 9000!');
});