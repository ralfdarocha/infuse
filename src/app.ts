import express from 'express'
import path from 'path';
import routes from './routes';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use(routes);

export default app;