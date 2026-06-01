import { Component, signal } from '@angular/core';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
	selector: 'spartan-slider-preview',
	imports: [HlmSliderImports],
	styles: `
		:host {
			display: block;
			width: 100%;
			max-width: 320px;
		}
	`,
	template: `
		<div class="space-y-4">
			<div class="flex items-center justify-between">
				<div class="space-y-0.5">
					<label class="text-sm font-medium">Volume</label>
					<p class="text-xs text-muted-foreground">Adjust the output volume level</p>
				</div>
				<span class="text-sm font-medium tabular-nums">{{ value()[0] }}%</span>
			</div>
			<hlm-slider [(value)]="value" />
		</div>
	`,
})
export class SliderPreview {
	public readonly value = signal([65]);
}

export const defaultImports = `
import { HlmSliderImports } from '@spartan-ng/helm/slider';
`;
export const defaultSkeleton = `
<hlm-slider />
`;
