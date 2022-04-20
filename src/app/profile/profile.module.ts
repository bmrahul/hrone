import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MyAreaComponent } from './my-area/my-area.component';


@NgModule({
  declarations: [
    PrivacyComponent,
    ViewProfileComponent,
    MyAreaComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
