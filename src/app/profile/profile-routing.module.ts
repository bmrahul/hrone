import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAreaComponent } from './my-area/my-area.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'my-area', component: MyAreaComponent },
  { path: '', redirectTo: 'view-profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
