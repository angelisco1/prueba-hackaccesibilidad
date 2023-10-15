import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  @Output() onShowActions = new EventEmitter<string>()

  constructor() { }
}
