import {Route, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ChannelsComponent} from "./pages/channels/channels.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {ConfigComponent} from "./pages/config/config.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
