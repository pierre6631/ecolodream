import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() name:string = "name";
  @Input() placeholder:string ="placeholder"
  @Input() type:string ="type"

}
