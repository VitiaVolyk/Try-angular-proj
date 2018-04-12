import { Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-my-form2',
  templateUrl: './my-form2.component.html',
  styleUrls: ['./my-form2.component.css']
})
export class MyForm2Component {
  formModel1 = {
    name: undefined,
    city: undefined,
    phone: undefined,
    email: undefined,
    message: undefined
  };

  submit(form: FormGroup) {
    this.formModel1 = form.value;
    console.log(this.formModel1);
  }
}
