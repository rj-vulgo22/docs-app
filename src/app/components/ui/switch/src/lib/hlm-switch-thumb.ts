import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
	selector: 'brn-switch-thumb[hlm]',
	host: {
		'data-slot': 'switch-thumb',
	},
})
export class HlmSwitchThumb {
	constructor() {
		classes(
			() =>
				'block size-3.5 rounded-full bg-background shadow-lg ring-0 transition-transform group-data-[state=checked]:translate-x-4 group-data-[state=unchecked]:translate-x-0.5',
		);
	}
}
