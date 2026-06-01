import { Component } from '@angular/core';

@Component({
	selector: 'spartan-typography-list-preview',
	standalone: true,
	template: `
		<ul class="hlm-ul">
			<li>1st level of puns: 5 gold coins</li>
			<li>2nd level of jokes: 10 gold coins</li>
			<li>3rd level of one-liners: 20 gold coins</li>
		</ul>
	`,
})
export class TypographyListPreview {}
