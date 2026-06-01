import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrnAccordionContent } from '@spartan-ng/brain/accordion';
import { classes } from '@spartan-ng/helm/utils';

@Component({
	selector: 'hlm-accordion-content',
	changeDetection: ChangeDetectionStrategy.OnPush,
	hostDirectives: [{ directive: BrnAccordionContent, inputs: ['style'] }],
	host: {
		'data-slot': 'accordion-content',
	},
	template: `
		<div
			class="pb-4 pt-0 [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-foreground/80 [&_p:not(:last-child)]:mb-4"
		>
			<ng-content />
		</div>
	`,
})
export class HlmAccordionContent {
	constructor() {
		classes(
			() =>
				'text-sm text-muted-foreground overflow-hidden transition-all data-[state=closed]:h-0 data-[state=open]:h-[var(--brn-accordion-content-height)]',
		);
	}
}
