import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import { RoomPage } from "./pages/room/room.page";
import { ExitPage } from "./pages/exit/exit.page";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'room', component: RoomPage },
  { path: 'exit', component: ExitPage },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
