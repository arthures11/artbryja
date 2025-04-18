import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration, withEventReplay} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {CvComponent} from './cv/cv.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {ExtraOptions, RouterModule} from "@angular/router";
import {ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import {ContactComponent} from './contact/contact.component';
import {LuckytapComponent} from './luckytap/luckytap.component';
import {TruckyComponent} from './trucky/trucky.component';
import {CasinoComponent} from './casino/casino.component';
import {ClassesComponent} from './classes/classes.component';
import {PhotosComponent} from './photos/photos.component';
import {PgdCopilotComponent} from './pgd-copilot/pgd-copilot.component';
import {NgOptimizedImage} from "@angular/common";
import { MusicStoreComponent } from './music-store/music-store.component';
import { ReactTechMasteryComponent } from './react-tech-mastery/react-tech-mastery.component';
import { KernelMouseDriverComponent } from './kernel-mouse-driver/kernel-mouse-driver.component';


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
        ClassesComponent,
        PhotosComponent,
        PgdCopilotComponent,
        MusicStoreComponent,
        ReactTechMasteryComponent,
        KernelMouseDriverComponent,


    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, data: {title: 'Artur Bryja'}},
            {path: 'cv', component: CvComponent, data: {title: 'CV | Artur Bryja'}},
            {path: 'about', component: AboutComponent, data: {title: 'About | Artur Bryja'}},
            {path: 'projects', component: ProjectsComponent, data: {title: 'Projects | Artur Bryja'}},
            {path: 'luckytap', component: LuckytapComponent, data: {title: 'Luckytap | Artur Bryja'}},
            {path: 'pgd-copilot', component: PgdCopilotComponent, data: {title: 'Copilot | Artur Bryja'}},
            {path: 'trucky', component: TruckyComponent, data: {title: 'Trucky | Artur Bryja'}},
            {path: 'casino', component: CasinoComponent, data: {title: 'Casino | Artur Bryja'}},
            {path: 'classes', component: ClassesComponent, data: {title: 'Classes | Artur Bryja'}},
            {path: 'music-store', component: MusicStoreComponent, data: {title: 'Music-Store | Artur Bryja'}},
            {path: 'react-mastery-tech', component: ReactTechMasteryComponent, data: {title: 'WebDevExpert | Artur Bryja'}},
            {path: 'kernel-mouse-driver', component: KernelMouseDriverComponent, data: {title: 'Kernel Mouse Driver | Artur Bryja'}},

        ], routerOptions),
        FormsModule,
        NgOptimizedImage,
    ],
    providers: [
        provideClientHydration(withEventReplay())
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
