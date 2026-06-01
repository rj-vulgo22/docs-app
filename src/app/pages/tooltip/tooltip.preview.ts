import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGitBranch, lucideTrash2, lucideUndo2 } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
	selector: 'spartan-tooltip-preview',
	imports: [HlmTooltipImports, HlmButtonImports, NgIcon],
	providers: [provideIcons({ lucideUndo2, lucideGitBranch, lucideTrash2 })],
	template: `
		<div class="flex items-center gap-2">
			<button hlmTooltip="Undo last action" hlmBtn variant="outline" size="icon">
				<ng-icon name="lucideUndo2" />
			</button>
			<button hlmTooltip="Create new branch" hlmBtn variant="outline" size="icon">
				<ng-icon name="lucideGitBranch" />
			</button>
			<button hlmTooltip="Delete project (irreversible)" hlmBtn variant="outline" size="icon">
				<ng-icon name="lucideTrash2" />
			</button>
		</div>
	`,
})
export class TooltipPreview {}

export const defaultImports = `
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';
`;
export const defaultSkeleton = `<button hlmTooltip="Add to library"  hlmBtn variant="outline">Default</button>`;
