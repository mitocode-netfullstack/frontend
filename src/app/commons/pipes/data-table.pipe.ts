import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dataTable'
})
export class DataTablePipe implements PipeTransform {
	transform(value: unknown, index: number): unknown {
		const obj = value as Record<string, unknown>;
		return Object.values(obj)[index];
	}
}
