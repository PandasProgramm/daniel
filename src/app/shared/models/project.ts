import {Flat} from './flat';

export interface Project {
  id:number,
  name:string,
  address:string,
  image:string,
  flats:Flat[]
}
