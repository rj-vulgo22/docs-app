import { Component, type OnInit } from '@angular/core';
import { HlmProgressImports } from '@spartan-ng/helm/progress';

@Component({
	selector: 'spartan-progress-preview',
	imports: [HlmProgressImports],
	template: `
		<div class="w-full max-w-sm space-y-6">
			<div class="space-y-2">
				<div class="flex items-center justify-between text-sm">
					<span class="text-muted-foreground">Installation progress</span>
					<span class="font-medium">{{ value }}%</span>
				</div>
				<hlm-progress [value]="value">
					<hlm-progress-indicator />
				</hlm-progress>
				<p class="text-xs text-muted-foreground">Installing dependencies... {{ value }} of 100 files</p>
			</div>
		</div>
	`,
})
export class ProgressPreview implements OnInit {
	public value = 15;

	ngOnInit() {
		setTimeout(() => (this.value = 65), 2000);
	}
}

export const defaultImports = `
import { HlmProgressImports } from '@spartan-ng/helm/progress';
`;

export const defaultSkeleton = `
<hlm-progress value="33">
   <hlm-progress-indicator />
</hlm-progress>
`;
