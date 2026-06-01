import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowUp, lucideMail, lucidePlus, lucideTrash2 } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
	selector: 'spartan-button-preview',
	imports: [HlmButtonImports, NgIcon],
	providers: [provideIcons({ lucideArrowUp, lucideMail, lucidePlus, lucideTrash2 })],
	host: { class: 'flex flex-wrap items-center gap-4 md:flex-row' },
	template: `
		<button hlmBtn>Primary</button>
		<button hlmBtn variant="secondary">
			<ng-icon name="lucideMail" class="mr-1.5" />
			Email
		</button>
		<button hlmBtn variant="outline">
			<ng-icon name="lucidePlus" class="mr-1.5" />
			Create
		</button>
		<button hlmBtn variant="destructive">
			<ng-icon name="lucideTrash2" class="mr-1.5" />
			Delete
		</button>
		<button hlmBtn variant="ghost">Cancel</button>
		<button hlmBtn variant="link">Terms of Service</button>
		<button hlmBtn size="icon" variant="outline">
			<ng-icon name="lucideArrowUp" />
		</button>
	`,
})
export class ButtonPreview {}

export const defaultImports = `
import { HlmButtonImports } from '@spartan-ng/helm/button';
`;

export const defaultSkeleton = `
<button hlmBtn>Button</button>
`;
