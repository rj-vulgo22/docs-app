import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'spartan-badge-preview',
	imports: [HlmBadgeImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="flex w-full flex-col gap-6">
			<div class="flex flex-wrap items-center gap-4">
				<div class="flex items-center gap-2">
					<span class="text-sm text-muted-foreground">Status:</span>
					<span hlmBadge variant="default">Active</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-sm text-muted-foreground">Plan:</span>
					<span hlmBadge variant="secondary">Enterprise</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-sm text-muted-foreground">Role:</span>
					<span hlmBadge variant="outline">Admin</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-sm text-muted-foreground">Issues:</span>
					<span hlmBadge variant="destructive">3 critical</span>
				</div>
			</div>
			<div class="flex flex-wrap items-center gap-2">
				<span hlmBadge variant="default">Default</span>
				<span hlmBadge variant="secondary">Secondary</span>
				<span hlmBadge variant="destructive">Destructive</span>
				<span hlmBadge variant="outline">Outline</span>
				<span hlmBadge variant="ghost">Ghost</span>
			</div>
		</div>
	`,
})
export class BadgePreview {}

export const defaultImports = `
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
`;

export const defaultSkeleton = `
<span hlmBadge variant="default | outline | secondary | destructive">Badge</span>
`;
