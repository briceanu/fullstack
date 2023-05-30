import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
// import the Prisma client to access our generated types
import { Prisma } from '@prisma/client';
import { TodosService } from './todos.service';

@Controller('/todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() todo: Prisma.TodoCreateInput) {
    return this.todosService.create(todo);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.remove(id);
  }

  @Put(':id')
  updateComplete(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    complete: boolean,
  ) {
    return this.todosService.updateComplete(id, complete);
  }
  @Put(':id/complete')
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateTodo: string,
  ) {
    return this.todosService.updateTodo(id, updateTodo);
  }
}
