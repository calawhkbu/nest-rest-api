import { Controller, Get, Post,Body } from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';


@Controller('items')
export class ItemsController {
    @Get()
    findAll():string{
        return 'Get all items';
    }

    @Post()
    create(@Body() item:CreateItemDto):string{
        return `
        Name: ${item.name} Desc:${item.description}
         Qty:${item.qty}`;
    }
}
