import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderToolbarComponent} from "../header-toolbar/header-toolbar.component";
import {SidebarMenuComponent} from "../sidebar-menu/sidebar-menu.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-app-container',
  standalone: true,
  imports: [CommonModule, HeaderToolbarComponent, SidebarMenuComponent, RouterOutlet],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.scss'
})
export class AppContainerComponent {

}
