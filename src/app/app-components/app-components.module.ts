import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SeechbodyComponent } from './seechbody/seechbody.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { RecepientsComponent } from './recepients/recepients.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionTabsComponent } from './transaction-tabs/transaction-tabs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SeechbodyComponent,
    CreditCardsComponent,
    RecepientsComponent,
    TransactionFormComponent,
    TransactionTabsComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[HeaderComponent,SeechbodyComponent],  
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppComponentsModule { }
