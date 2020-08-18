import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items:Item[]=[
        {
            id:"1",
            name:"Temp",
            qty:10,
            description:"This is a test data"
        },
        {
            id:"2",
            name:"Temp TWO",
            qty:50,
            description:"This is a test data"
        }
    ]
    findAll():Item[]{
        return this.items;
    }

    findOne(id:string):Item{
        return this.items.find(item=>item.id==id);

    }
    
}
