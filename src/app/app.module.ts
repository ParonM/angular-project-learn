import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { KontaktiComponent } from './components/kontakti/kontakti.component';
import { GlavnayaComponent } from './components/glavnaya/glavnaya.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const appRoutes: Routes = [
  { path: 'main', component: GlavnayaComponent },
  { path: 'car', component: CarComponent },
  { path: 'about', component: KontaktiComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KontaktiComponent,
    GlavnayaComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
