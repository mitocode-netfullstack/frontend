import { Component, Input } from '@angular/core';


@Component({
  selector: 'igmh-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrls: ['./custom-loader.component.scss']
})
export class CustomLoaderComponent {
	@Input() message = 'Guardando...';
	@Input() color = '#8E44AD';
}

