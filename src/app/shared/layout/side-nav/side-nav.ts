import { Component } from '@angular/core';

@Component({
	selector: 'spartan-side-nav',
	template: `
		<nav class="hidden md:flex w-[220px] lg:w-[240px] flex-col gap-4 fixed top-16 bottom-0 overflow-y-auto p-4 border-r">
			<ng-content />
		</nav>
	`,
})
export class SideNav {}
