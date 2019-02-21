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
  private checkError: boolean;

  constructor() {}

  ngOnInit() {

    this.formData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(this.minPassLength),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.$@$!%*?&])[A-Za-z\d$@$!%*?&].{'+ this.minPassLength +',}')]),
      check: new FormControl('', Validators.requiredTrue)
   }); 

  }

  submitForm() {
    console.log(this.formData.value);
    console.log(this.check.errors);
  }

  get email() { return this.formData.get('email'); }
  get pass() { return this.formData.get('pass'); }
  get check() { return this.formData.get('check'); }

}
