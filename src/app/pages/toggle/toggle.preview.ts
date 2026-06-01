import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';
import { HlmToggleImports } from '@spartan-ng/helm/toggle';

@Component({
	selector: 'spartan-toggle-preview',
	imports: [HlmToggleImports, NgIcon],
	providers: [provideIcons({ lucideBold, lucideItalic, lucideUnderline })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="flex items-center gap-1 rounded-lg border p-1">
			<button
				hlmToggle
				size="sm"
				variant="outline"
				aria-label="Toggle bold"
				class="data-[state=on]:bg-muted data-[state=on]:text-foreground"
			>
				<ng-icon name="lucideBold" />
			</button>
			<button
				hlmToggle
				size="sm"
				variant="outline"
				aria-label="Toggle italic"
				class="data-[state=on]:bg-muted data-[state=on]:text-foreground"
			>
				<ng-icon name="lucideItalic" />
			</button>
			<button
				hlmToggle
				size="sm"
				variant="outline"
				aria-label="Toggle underline"
				class="data-[state=on]:bg-muted data-[state=on]:text-foreground"
			>
				<ng-icon name="lucideUnderline" />
			</button>
		</div>
	`,
})
export class TogglePreview {}

export const defaultImports = `
import { HlmToggleImports } from '@spartan-ng/helm/toggle';
`;
export const defaultSkeleton = `
<button hlmToggle>Toggle</button>
`;
