import { OficinaListComponent } from './components/oficina/oficina-list/oficina-list.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";


const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      { path: "home", component: HomeComponent },

      { path: "oficina", component: OficinaListComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
