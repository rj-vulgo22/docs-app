import { Component } from '@angular/core';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

@Component({
	selector: 'spartan-accordion-borders',
	imports: [HlmAccordionImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-accordion class="rounded-lg border">
			<hlm-accordion-item class="border-b px-4 last:border-b-0">
				<hlm-accordion-trigger>How does billing work?</hlm-accordion-trigger>
				<hlm-accordion-content>
					We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you
					can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.
				</hlm-accordion-content>
			</hlm-accordion-item>
			<hlm-accordion-item class="border-b px-4 last:border-b-0">
				<hlm-accordion-trigger>Is my data secure?</hlm-accordion-trigger>
				<hlm-accordion-content>
					Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All
					data is encrypted at rest and in transit using industry-standard protocols.
				</hlm-accordion-content>
			</hlm-accordion-item>
			<hlm-accordion-item class="border-b px-4 last:border-b-0">
				<hlm-accordion-trigger>What integrations do you support?</hlm-accordion-trigger>
				<hlm-accordion-content>
					We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also
					build custom integrations using our REST API and webhooks.
				</hlm-accordion-content>
			</hlm-accordion-item>
		</hlm-accordion>
	`,
})
export class AccordionBorders {}
