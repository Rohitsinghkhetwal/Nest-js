import { Controller, Delete, Get, Post, Put, Param } from "@nestjs/common";

@Controller("basic")
export class appController {
    //add item
    @Post("/add")
    addItem() : string{
        return "Item added to store";
    }
    //delete item
    @Delete("/delete")
    deleteItem(): string {
        return "Item deleted success";
    }
    //update item
    @Put('/edit')
    updateItem() : string {
        return "item updated successfully";
    }
    //getitem
    @Get("getall")

    getAllItem(): string {
        return "getting all the items";
    }

    @Get("/getbookById/:id")
    getId(@Param() params): string {
        return `this is the id of the ${params.id}`

    }
   
}