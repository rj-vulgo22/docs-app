import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmSkeletonImports } from '@spartan-ng/helm/skeleton';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
	selector: 'spartan-skeleton-preview',
	imports: [HlmSkeletonImports, HlmCardImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div hlmCard class="w-full max-w-sm p-6">
			<div class="flex items-center gap-4">
				<hlm-skeleton class="size-12 rounded-full" />
				<div class="space-y-2">
					<hlm-skeleton class="h-4 w-[150px]" />
					<hlm-skeleton class="h-3 w-[100px]" />
				</div>
			</div>
			<div class="mt-6 space-y-3">
				<hlm-skeleton class="h-4 w-full" />
				<hlm-skeleton class="h-4 w-[80%]" />
				<hlm-skeleton class="h-4 w-[60%]" />
			</div>
			<div class="mt-6 flex gap-3">
				<hlm-skeleton class="h-9 flex-1 rounded-md" />
				<hlm-skeleton class="h-9 flex-1 rounded-md" />
			</div>
		</div>
	`,
})
export class SkeletonPreview {}

export const defaultImports = `
import { HlmSkeletonImports } from '@spartan-ng/helm/skeleton';
`;
export const defaultSkeleton = `
<hlm-skeleton class="h-[20px] w-[100px] rounded-full" />
`;
