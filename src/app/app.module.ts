import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {ExtraOptions, RouterModule} from "@angular/router";
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { LuckytapComponent } from './luckytap/luckytap.component';
import { TruckyComponent } from './trucky/trucky.component';
import { CasinoComponent } from './casino/casino.component';
import { ClassesComponent } from './classes/classes.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CvComponent,
    ProjectCardComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    LuckytapComponent,
    TruckyComponent,
    CasinoComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'cv', component: CvComponent},
      {path: 'about', component: AboutComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'luckytap', component: LuckytapComponent},
      {path: 'trucky', component: TruckyComponent},
      {path: 'casino', component: CasinoComponent},
      {path: 'classes', component: ClassesComponent},

    ], routerOptions),
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
