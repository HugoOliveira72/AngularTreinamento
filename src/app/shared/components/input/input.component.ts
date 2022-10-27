import { Component, Input, OnInit } from '@angular/core';
import { InputModel } from './input.models';
import { personModel } from '../../pages/master-page/person-model';
import { InputEnum } from './input.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() model: InputModel = new InputModel();

  @Input() everaldo: personModel = new personModel(); 

  public inputEnum = InputEnum;

  constructor() {}
}
