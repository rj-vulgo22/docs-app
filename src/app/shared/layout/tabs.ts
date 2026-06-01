import { Component, Input } from '@angular/core';

@Component({
	selector: 'spartan-tabs',
	host: { class: 'block mb-4 mt-4' },
	template: `
			<div class="block">
			<div class="border-border text-muted-foreground mb-4 inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0" role="tablist">
				<button class="hover:text-accent-foreground relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 bg-transparent px-4 pb-3 pt-2 text-sm font-semibold shadow-none transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					[class.text-muted-foreground]="_activeTab !== firstTab"
					[class.text-foreground]="_activeTab === firstTab"
					[class.border-b-transparent]="_activeTab !== firstTab"
					[class.border-b-primary]="_activeTab === firstTab"
					(click)="_activeTab = firstTab">
					{{ firstTab }}
				</button>
				<button class="hover:text-accent-foreground relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 bg-transparent px-4 pb-3 pt-2 text-sm font-semibold shadow-none transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					[class.text-muted-foreground]="_activeTab !== secondTab"
					[class.text-foreground]="_activeTab === secondTab"
					[class.border-b-transparent]="_activeTab !== secondTab"
					[class.border-b-primary]="_activeTab === secondTab"
					(click)="_activeTab = secondTab">
					{{ secondTab }}
				</button>
			</div>
			<div class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border border-border">
				@if (_activeTab === firstTab) {
					<ng-content select="[firstTab]" />
				} @else {
					<ng-content select="[secondTab]" />
				}
			</div>
		</div>
	`,
})
export class Tabs {
	@Input() public firstTab = '';
	@Input() public secondTab = '';
	protected _activeTab = 'Preview';
}
