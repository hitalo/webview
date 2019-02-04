import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.scss']
})
export class SampleformComponent implements OnInit {

  formData: FormGroup;
  private minPassLength: number = 6;

  constructor() {}

  ngOnInit() {

    this.formData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(this.minPassLength)])
   }); 

  }

  submitForm() {
    console.log("submit");
    if(this.formData.invalid) {
      
      console.log("email invalid", this.email.invalid);
      console.log("email required", this.email.errors.required);
      console.log("pass min length", this.pass.errors.minlength);

    }
    
  }

  get email() { return this.formData.get('email'); }
  get pass() { return this.formData.get('pass'); }

}
