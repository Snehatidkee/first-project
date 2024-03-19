import { Component,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() inputReadonly: boolean = false;
  @Input() inputReqValidation: boolean = false;


  // @Input() inputType: boolean = false;

  @Input() inputType: string;
  @Input() inputValue: string='';


  constructor() {
    this.inputType = '';
    this.inputReqValidation=false;
  }
  ngOnInit(): void {}
}

