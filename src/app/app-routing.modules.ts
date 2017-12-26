import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'
import { Router } from '@angular/router/src/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }