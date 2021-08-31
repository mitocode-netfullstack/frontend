import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PATHS_DASHBOARD_PAGES } from '@igmh/utils/path-page';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'igmh-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
	constructor(
		private _router: Router
	) {
		this.verifyPath();
	}

	quantityItems!: number;
	subscriptionNavigate!: Subscription;
	subscriptionChannel!: Subscription;

	showWelcome = false;

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.subscriptionNavigate.unsubscribe();
		this.subscriptionChannel.unsubscribe();
	}

	clickShowProductos(): void {
	}

	verifyPath(): void {
		this.subscriptionNavigate = this._router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event) => {
				const navigation = event as NavigationEnd;
				this.showWelcome = navigation.url === PATHS_DASHBOARD_PAGES.withSlash;
			});
	}
}
