import { Component } from '@angular/core';

@Component({
	selector: 'spartan-coming-soon',
	host: {
		class: 'justify-center relative flex-1 flex items-center mb-8',
	},
	template: `
		<p class="text-muted-foreground -mt-[10%]">Coming soon...</p>
	`,
})
export class ComingSoon {}
