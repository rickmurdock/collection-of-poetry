import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { HumorousComponent } from './humorous/humorous.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WorshipfulComponent } from './worshipful/worshipful.component';
import { YeWhichAreSpiritualComponent } from './ye-which-are-spiritual/ye-which-are-spiritual.component';
import { UntitledComponent } from './untitled/untitled.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'worshipful', component: WorshipfulComponent},
  { path: 'humorous', component: HumorousComponent },
  { path: 'untitled', component: UntitledComponent},
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HumorousComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    NavBarComponent,
    WorshipfulComponent,
    YeWhichAreSpiritualComponent,
    UntitledComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated responses.
    // Remoe it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
