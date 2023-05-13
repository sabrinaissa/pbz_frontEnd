import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ActivateComponent } from './components/activate/activate.component';
import { ChangeComponent } from './components/change/change.component';
import { ConditionsComponent } from './components/conditions/conditions.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'loanform',component: LoanformComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'customerdash', component: CustomerdashComponent },
  {path: 'loanform1', component: Loanform1Component },
  { path: 'loanform2', component: Loanform2Component},
  { path: 'loansection', component: LoansectionComponent},
  { path: 'payment' , component: PaymentComponent},
  { path: 'about' , component:AboutComponent},
  { path: 'sdbarcust', component:SdbarcustComponent},
  { path: 'activate', component:ActivateComponent},
  { path: 'change', component:ChangeComponent},
  { path: 'conditions', component:ConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
