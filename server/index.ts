import {config as dotenv }  from 'dotenv';

import * as compress        from 'compression';
import * as express         from 'express';
import * as expressNunjucks from 'express-nunjucks';
import * as helmet          from 'helmet';

import { PORT, PROD }       from './config';
import router               from './router';

const app = express();
app.use(compress());
app.use(helmet());
app.enable('etag');

app.set('views', __dirname + '/../pages');

expressNunjucks(app, {
  noCache: !PROD,
  autoescape: false
});

app.use(router(app));

app.use(express.static(__dirname + '/../static', {
  etag: true
}));

app.listen(PORT, function() {
  // Render some console log output
  console.log('Listening on port ' + PORT);
});