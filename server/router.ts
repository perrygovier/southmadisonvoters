import * as express from 'express';

import FacebooPage from './lib/fb';
const fb = new FacebooPage();



export default function router(app) {

  return new express.Router()
  
  .get('/', async (req, res) => {
    const feed = await fb.getFeed();
    res.render('index', {feed});
  })
  .get('/about', (_, res) => res.render('about'))

}