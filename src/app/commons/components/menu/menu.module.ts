import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

@NgModule({
	imports: [CommonModule, MatIconModule, MatListModule, MatButtonModule, RouterModule],
	exports: [MenuComponent],
	declarations: [MenuComponent]
})
export class MenuModule {}
