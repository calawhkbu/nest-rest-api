/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Post,Body, Req, Res, Param, Put, Delete } from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';
import {Request,Response} from 'express';

@Controller('items')
export class ItemsController {
    @Get()
    findAll():string{
        return "get all items";
    }

    @Get(':id')
    findOne(@Param('id') id):string{
        return `Item ${id}`;
    }

    @Post()
    create(@Body() item:CreateItemDto):string{
        return `
        Name: ${item.name} Desc:${item.description}
         Qty:${item.qty}`;
    }

    @Delete(':id')
    delete(@Param('id') id){
        return `Deleted ${id}`;
    }

    @Put(':id')
    update(@Body() updateItem:CreateItemDto,@Param('id') id):string{
        return `Updated Item ${id}--
        Name:${updateItem.name}
        Description:${updateItem.description}
        Qty:${updateItem.qty}
        `;
        

    }
}

