import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  
  transactionForm: FormGroup;
  
  constructor(fb: FormBuilder) {
   
    this.transactionForm = fb.group({
      'amount': [0,[Validators.required, Validators.min(1)]],
      'description': ['',Validators.required],

    })
   }

  ngOnInit(): void {
  }
  onSubmit(value: string){
        console.log("submitted", value)
        this.transactionForm.get('amount')?.reset();
        this.transactionForm.get('description')?.reset();
  }

}
