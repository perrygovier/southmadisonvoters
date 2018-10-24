import FB, {FacebookApiException} from 'fb';
import * as moment from 'moment';
import { FB_TOKEN } from '../config';
import { domainToASCII } from 'url';

const fb = FB.withAccessToken(FB_TOKEN);

export default class FacebooPage {

  pageID = '559447227779085';
  // token: string;

  constructor() {

  }

  async getFeed() {
    const res = await fb.api(`${this.pageID}/feed`, 'get', { 
      limit: 15,
      fields: [
        'id', 
        'name', 
        'link', 
        'description', 
        'caption',
        'created_time',
        'full_picture',
        'message',
        'permalink_url',
        'attachments{title,url,type,description,media,subattachments}'
      ]
    });
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    
    return res.data.map(this.tidyUp);
  }

  tidyUp(data) {

    if (data.message) {
      data.message = data.message.replace(/\n/g, '<br />');
    }
    data.created_time = moment(data.created_time).fromNow();
    // console.log(data.created_time)
    return data;
  }
}

