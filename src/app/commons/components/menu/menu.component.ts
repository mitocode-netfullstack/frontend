import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@igmh/services/local/storage/local-storage.service';
import { SessionStorageService } from '@igmh/services/local/storage/session-storage.service';
import { PATHS_DASHBOARD_PAGES } from '@igmh/utils/path-page';

interface IMenu {
  name: string;
  path: string;
  icon: string;
}


@Component({
  selector: 'igmh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(
    private _router: Router,
    private _sessionStorageService: SessionStorageService,
    private _localStorageService: LocalStorageService,
  ) {
    this._loadMenus();
  }

  iconsMenu = [
    { name: 'Productos', icon: 'inventory_2' },
    { name: 'Categorías', icon: 'category' }
  ];

  listMenu: IMenu[] = [];

  closeSession(): void {
    this._sessionStorageService.clear();
    this._localStorageService.clear();
    void this._router.navigateByUrl(PATHS_DASHBOARD_PAGES.withSlash);
  }

  private _loadMenus(): void {
    this.listMenu = [
      { name: 'Productos', path: PATHS_DASHBOARD_PAGES.productosPage.withSlash, icon: 'inventory_2' },
      { name: 'Categorias', path: PATHS_DASHBOARD_PAGES.categoriePage.withSlash, icon: 'category' }
    ];
  }
}
