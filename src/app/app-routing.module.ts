import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StackComponent } from './stack/stack.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  // { path: '', redirectTo: '/about', pathMatch: 'full' }, // redirect to `first-component`
/*   { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'stack', component: StackComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PagenotfoundComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
