import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadLoginPageRoutingModule } from './cad-login-routing.module';

import { CadLoginPage } from './cad-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadLoginPageRoutingModule
  ],
  declarations: [CadLoginPage]
})
export class CadLoginPageModule {}
