import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Lesson001Component } from './lesson001/lesson001.component';
import { Lesson002Component } from './lesson002/lesson002.component';
import { Lesson003Component } from './lesson003/lesson003.component';
import { Lesson004Component } from './lesson004/lesson004.component';
import { Lesson005Component } from './lesson005/lesson005.component';
import { Lesson006Component } from './lesson006/lesson006.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: MainComponent },
    { path: 'lesson001', component: Lesson001Component },
    { path: 'lesson002', component: Lesson002Component },
    { path: 'lesson003', component: Lesson003Component },
    { path: 'lesson004', component: Lesson004Component },
    { path: 'lesson005', component: Lesson005Component },
    { path: 'lesson006', component: Lesson006Component }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}