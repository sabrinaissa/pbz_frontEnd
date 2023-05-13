import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoanformComponent } from './components/loanform/loanform.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { CustomerdashComponent } from './components/customerdash/customerdash.component';
import { Loanform1Component } from './components/loanform1/loanform1.component';
import { Loanform2Component } from './components/loanform2/loanform2.component';
import { LoansectionComponent } from './components/loansection/loansection.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AboutComponent } from './components/about/about.component';
import { SdbarcustComponent } from './bars/sdbarcust/sdbarcust.component';
import { LoanComponent } from './bars/loan/loan.component';
import { Loan1Component } from './bars/loan1/loan1.component';
import { ActivateComponent } from './components/activate/activate.component';
import { ChangeComponent } from './components/change/change.component';
import { ConditionsComponent } from './components/conditions/conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    LoanformComponent,
    ForgotComponent,
    CustomerdashComponent,
    Loanform1Component,
    Loanform2Component,
    LoansectionComponent,
    PaymentComponent,
    AboutComponent,
    SdbarcustComponent,
    LoanComponent,
    Loan1Component,
    ActivateComponent,
    ChangeComponent,
    ConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
