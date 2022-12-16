import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EventDto } from './event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {

    public constructor(
        private readonly eventService: EventsService
    ) {}

    @Get()
    public getEvents() {
        return this.eventService.getEvents();
    }

    @Get('/:id')
    public getEvent(@Param('id', new ParseIntPipe()) id: number) {
        const event = this.eventService.getEvent(id);

        if(!event) {
            throw new NotFoundException(`Event #${id} not found!`);
        }

        return event;
    }

    @Delete("/:id")
    public deleteEvent(@Param('id', new ParseIntPipe()) id: number) {
        const event = this.eventService.deleteEvent(id);

        if(!event) {
            throw new NotFoundException(`Event #${id} not found!`);
        }
    }

    @Post()
    public addEvent(@Body() event: EventDto) {
        this.eventService.addEvent(event);
    }

    @Put("/:id")
    public addOrUpdateEvent(@Param('id', new ParseIntPipe()) id: number, @Body() event: EventDto) {
        this.eventService.addOrUpdateEvent(id, event);
    }
}
