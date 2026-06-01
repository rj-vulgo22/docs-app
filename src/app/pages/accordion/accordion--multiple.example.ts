import { Component } from '@angular/core';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

@Component({
	selector: 'spartan-accordion-multiple',
	imports: [HlmAccordionImports],
	host: {
		class: 'w-full',
	},
	template: `
		<hlm-accordion type="multiple">
			<hlm-accordion-item value="notifications" [isOpened]="true">
				<hlm-accordion-trigger>Notification Settings</hlm-accordion-trigger>
				<hlm-accordion-content>
					Manage how you receive notifications. You can enable email alerts for updates or push notifications for
					mobile devices.
				</hlm-accordion-content>
			</hlm-accordion-item>
			<hlm-accordion-item value="privacy">
				<hlm-accordion-trigger>Privacy & Security</hlm-accordion-trigger>
				<hlm-accordion-content>
					Control your privacy settings and security preferences. Enable two-factor authentication, manage connected
					devices, review active sessions, and configure data sharing preferences. You can also download your data or
					delete your account.
				</hlm-accordion-content>
			</hlm-accordion-item>
			<hlm-accordion-item value="billing">
				<hlm-accordion-trigger>Billing & Subscription</hlm-accordion-trigger>
				<hlm-accordion-content>
					View your current plan, payment history, and upcoming invoices. Update your payment method, change your
					subscription tier, or cancel your subscription.
				</hlm-accordion-content>
			</hlm-accordion-item>
		</hlm-accordion>
	`,
})
export class AccordionMultiple {}
