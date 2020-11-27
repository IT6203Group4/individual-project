import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrentalService } from './carrental.service';
import { NewCarrentalFormComponent } from './new-carrental-form/new-carrental-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NewcarrentalmenuComponent } from './newcarrentalmenu/newcarrentalmenu.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [{
  path: '',                     //default component to display
  component: ListCarsComponent
}, {
  path: 'addCar',         //when cars added  
  component: NewCarrentalFormComponent
}, {
  path: 'editCarrental/:_id',   //when cars edited
  component: NewCarrentalFormComponent
}, {
  path: 'listCars',       //when cars listed
  component: ListCarsComponent
}, {
  path: 'home',          //when homepage displayed
  component: HomeComponent
}, {
  path: '**',                 //when path cannot be found
  component: NotFoundComponent
}];


@NgModule({
  declarations: [
    AppComponent,
    NewCarrentalFormComponent,
    NewcarrentalmenuComponent,
    NavigationMenuComponent,
    ListCarsComponent,
    NotFoundComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [CarrentalService],
  bootstrap: [AppComponent]
})
export class AppModule { } 

