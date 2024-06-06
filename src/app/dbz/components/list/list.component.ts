import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }]

  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();


  //OnDeleteCharacter(index: number): void {
  //  this.OnDelete.emit(index);
  //}

  onDeleteCharacter(id?: string): void {
    if ( !id ) return;
    this.OnDelete.emit(id);
  }
}
