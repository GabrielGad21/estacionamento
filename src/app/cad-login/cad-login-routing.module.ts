import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadLoginPage } from './cad-login.page';

const routes: Routes = [
  {
    path: '',
    component: CadLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadLoginPageRoutingModule {}
