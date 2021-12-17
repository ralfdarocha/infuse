import { Router, Request, Response } from 'express';

const route = Router();

route.post('/data', (req: Request, res: Response) => {
  const { value } = req.body;
  // A timeout just to see the spinner
  setTimeout(() => {
    res.json({
      reversed: value.split('').reverse().join('')
    });
  }, 500)
});
  
route.get('/app', (req: Request, res: Response) => {
  res.render('index');
});

route.get('/', (req: Request, res: Response) => {
  res.redirect('/app');
});

route.get('*', function(req: Request, res: Response){
  res.status(404).render('error');
});

export default route;