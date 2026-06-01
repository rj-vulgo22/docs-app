import { Component } from '@angular/core';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
	selector: 'spartan-accordion-card',
	imports: [HlmAccordionImports, HlmCardImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-card class="w-full">
			<hlm-card-header>
				<h3 hlmCardTitle>Subscription & Billing</h3>
				<p hlmCardDescription>Common questions about your account, plans, payments and cancellations.</p>
			</hlm-card-header>
			<div hlmCardContent>
				<hlm-accordion type="single" collapsible>
					<hlm-accordion-item value="plans">
						<hlm-accordion-trigger>What subscription plans do you offer?</hlm-accordion-trigger>
						<hlm-accordion-content>
							We offer three subscription tiers: Starter ($9/month), Professional ($29/month), and Enterprise
							($99/month). Each plan includes increasing storage limits, API access, priority support, and team
							collaboration features.
						</hlm-accordion-content>
					</hlm-accordion-item>
					<hlm-accordion-item value="billing">
						<hlm-accordion-trigger>How does billing work?</hlm-accordion-trigger>
						<hlm-accordion-content>
							Billing occurs automatically at the start of each billing cycle. We accept all major credit cards,
							PayPal, and ACH transfers for enterprise customers. You'll receive an invoice via email after each
							payment.
						</hlm-accordion-content>
					</hlm-accordion-item>
					<hlm-accordion-item value="cancel">
						<hlm-accordion-trigger>How do I cancel my subscription?</hlm-accordion-trigger>
						<hlm-accordion-content>
							You can cancel your subscription anytime from your account settings. There are no cancellation fees or
							penalties. Your access will continue until the end of your current billing period.
						</hlm-accordion-content>
					</hlm-accordion-item>
				</hlm-accordion>
			</div>
		</hlm-card>
	`,
})
export class AccordionCard {}
