import * as axios from 'axios';
import Promise from 'bluebird'

export function getNotes(options){
  // return Promise().resolve(['111','222']);
  const url = 'http://localhost:8000/notes';
  return axios.get(url,  {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  //     "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
  //   }
  }
  );
}
