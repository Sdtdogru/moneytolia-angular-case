import { Injectable } from '@angular/core';
import { Compaign } from 'src/app/core/models/compaign';
@Injectable()
export class CompaignService {
    compaigns:Compaign[]=[{id:1,skor:156,name:"string",statement:"string"},{id:2,skor:3,name:"string",statement:"string"}]
  constructor() {}
 
}
