import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './components/customerlist/customerlist.component';
import { AuthGuardService } from './service/auth-gaurd.service';
import { RouterResolver } from './service/router.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customer',
    canActivate: [AuthGuardService],
    children: [{
      path: '',
      component: CustomerListComponent,
      canActivate: [AuthGuardService],
      resolve: { data: RouterResolver }
    },
    {
      path: 'list',
      component: CustomerListComponent,
      canActivate: [AuthGuardService],
      resolve: { data: RouterResolver }
    },
    {
      path: 'details/:id',
      component: CustomerDetailsComponent,
      canActivate: [AuthGuardService],
      resolve: { data: RouterResolver }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
