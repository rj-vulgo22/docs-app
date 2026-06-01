import { Component } from '@angular/core';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

@Component({
	selector: 'spartan-accordion-preview',
	imports: [HlmAccordionImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-accordion type="single" collapsible>
			<hlm-accordion-item value="item-1">
				<hlm-accordion-trigger>Is it accessible?</hlm-accordion-trigger>
				<hlm-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</hlm-accordion-content>
			</hlm-accordion-item>
			<hlm-accordion-item value="item-2">
				<hlm-accordion-trigger>Is it styled?</hlm-accordion-trigger>
				<hlm-accordion-content>
					Yes. It comes with default styles that matches the other components&apos; aesthetic.
				</hlm-accordion-content>
			</hlm-accordion-item>
			<hlm-accordion-item value="item-3">
				<hlm-accordion-trigger>Is it animated?</hlm-accordion-trigger>
				<hlm-accordion-content>
					Yes. Its animated by default, but you can disable it if you prefer.
				</hlm-accordion-content>
			</hlm-accordion-item>
		</hlm-accordion>
	`,
})
export class AccordionPreview {}

export const defaultImports = `
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
`;

export const defaultSkeleton = `
<hlm-accordion type="single" collapsible>
  <hlm-accordion-item value="item-1">
    <hlm-accordion-trigger>Is it accessible?</hlm-accordion-trigger>
    <hlm-accordion-content>Yes. It adheres to the WAI-ARIA design pattern.</hlm-accordion-content>
  </hlm-accordion-item>
</hlm-accordion>
`;
