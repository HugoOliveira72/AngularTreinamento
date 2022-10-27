import { Component, OnInit } from '@angular/core';
import { personModel } from 'src/app/shared/pages/master-page/person-model';
import { InputModel } from '../../input/input.models';
import { ColModel, FormModel, RowModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public input1: InputModel = new InputModel();

  public input2: InputModel = new InputModel();

  public model : FormModel = new FormModel();

  public modelPerson: personModel = new personModel();

  constructor() {

      this.model
        .addRow(new RowModel()
          .addCol(new ColModel().setInput(new InputModel('Nome:')))  
          .addCol(new ColModel().setInput(new InputModel('Email:')))  
          )
        .addRow(new RowModel()
          .addCol(new ColModel().setInput(new InputModel('Cpf')))
          .addCol(new ColModel().setInput(new InputModel('').setGenero()))
          )
         .addRow(new RowModel()
          .addCol(new ColModel().setInput(new InputModel('Telefone:').setMaskMethod(this.cellPhoneMask))) 
         );
    }

    public cellPhoneMask(text: string): string {
      let numbers: string = text.replace(/\D/, "");
      let telephone = '';
      if (numbers.length > 0) {
        telephone = '(' + numbers;
      }
      if (numbers.length > 2) {
        telephone = telephone.slice(0,3) +')' + telephone.slice(3); 
      }
      if (numbers.length > 2) {
        telephone = telephone.slice(0,4) +' ' + telephone.slice(4); 
      }
      if (numbers.length > 3) {
        telephone = telephone.slice(0,6) +' ' + telephone.slice(6); 
      }
      if (numbers.length > 7) {
        telephone = telephone.slice(0,11) +'-' + telephone.slice(1);
      }
      if (numbers.length > 11) {
        telephone = telephone.slice(0, 16);
      }
      return telephone;
    }

}
