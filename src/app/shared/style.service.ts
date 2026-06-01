import { computed, Injectable, signal } from '@angular/core';

export type Style = 'vega' | 'material' | 'tailwind';

@Injectable({
	providedIn: 'root',
})
export class StyleService {
	public readonly style = signal<Style>('vega');
	public readonly isNotVega = computed(() => this.style() !== 'vega');
}
