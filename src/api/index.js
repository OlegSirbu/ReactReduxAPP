import * as axios from 'axios';
import Promise from 'bluebird'

export function getUsers(options){
  return new Promise().resolve(['user 1','user 2']);
}
