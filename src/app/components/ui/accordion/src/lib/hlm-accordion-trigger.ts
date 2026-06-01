import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
import { BrnAccordionImports } from '@spartan-ng/brain/accordion';
import { hlm } from '@spartan-ng/helm/utils';
import type { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-accordion-trigger',
	imports: [BrnAccordionImports, NgIcon],
	providers: [provideIcons({ lucideChevronDown })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<h3 brnAccordionHeader class="flex">
			<button brnAccordionTrigger data-slot="accordion-trigger" [class]="_computedTriggerClass()">
				<ng-content />
				<ng-icon
					name="lucideChevronDown"
					class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/accordion-trigger:rotate-180"
				/>
			</button>
		</h3>
	`,
})
export class HlmAccordionTrigger {
	public readonly triggerClass = input<ClassValue>('');

	protected readonly _computedTriggerClass = computed(() =>
		hlm(
			'group/accordion-trigger flex w-full flex-1 items-center justify-between py-4 text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
			this.triggerClass(),
		),
	);
}
