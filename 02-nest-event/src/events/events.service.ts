import { Injectable } from '@nestjs/common';
import { EventDto } from './event.dto';

@Injectable()
export class EventsService {
    private events = [
        { id: 0, name: "Tankcsapda", date: "2022-12-12" },
        { id: 1, name: "WellHello", date: "2022-12-22" }
    ];

    public getEvents() {
        return this.events;
    }

    public getEvent(id: number) {
        return this.events.find(event => event.id === id);
    }

    public addEvent(event: EventDto) {
        this.events.push({
            id: Math.max(...this.events.map(event => event.id)) + 1,
            name: event.name,
            date: event.date
        });
    }

    public deleteEvent(id: number) {
        const eventIndex = this.events.findIndex(event => event.id === id);

        if(eventIndex === -1) {
            return null;
        }

        return this.events.splice(eventIndex, 1);
    }

    public addOrUpdateEvent(id: number, event: EventDto) {
        const eventIndex = this.events.findIndex(event => event.id === id);

        if(eventIndex === -1) {
            this.events.push({ id: id, name: event.name, date: event.date });
        } else {
            this.events[eventIndex] = { ...this.events[eventIndex], ...event }
        }
    }
}
