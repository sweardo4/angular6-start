import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';
import { HeroesComponent } from './heroes/heroes.component';
const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'app'},
    {path:'newc',component:NewComponentComponent},
    {path:'new2',component:New2Component},
    {path :'new3',component:New3Component},
    {path :'heroes',component:HeroesComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }
