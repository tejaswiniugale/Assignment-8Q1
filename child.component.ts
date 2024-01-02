import { Component } from '@angular/core';
import { EventEmitter } from 'stream';
import { Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  childText: string ='';
  @Output()  messageEvent = new EventEmitter();

  sendMessage(): void{
    this.messageEvent.emit(this.childText);
  }
   
}

