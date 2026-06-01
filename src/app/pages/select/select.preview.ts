import { Component } from '@angular/core';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
	selector: 'spartan-select-preview',
	imports: [HlmSelectImports],
	template: `
		<div class="flex flex-col gap-4">
			<hlm-select class="w-72" [itemToString]="itemToString">
				<hlm-select-trigger>
					<hlm-select-value placeholder="Select a team member" />
				</hlm-select-trigger>
				<hlm-select-content *hlmSelectPortal>
					<hlm-select-group>
						<hlm-select-label>Team Members</hlm-select-label>
						@for (item of items; track item.value) {
							<hlm-select-item [value]="item.value">{{ item.label }}</hlm-select-item>
						}
					</hlm-select-group>
				</hlm-select-content>
			</hlm-select>
		</div>
	`,
})
export class SelectPreview {
	public readonly items = [
		{ label: 'Alice Johnson', value: 'alice' },
		{ label: 'Bob Smith', value: 'bob' },
		{ label: 'Carol Williams', value: 'carol' },
		{ label: 'David Brown', value: 'david' },
		{ label: 'Eve Davis', value: 'eve' },
	];

	public readonly itemToString = (value: string) => this.items.find((item) => item.value === value)?.label || '';
}

export const defaultImports = `
import { HlmSelectImports } from '@spartan-ng/helm/select';
`;

export const defaultSkeleton = `
<hlm-select>
	<hlm-select-trigger>
		<hlm-select-value placeholder="Select a fruit" />
	</hlm-select-trigger>
	<hlm-select-content *hlmSelectPortal>
		<hlm-select-group>
			<hlm-select-label>Fruits</hlm-select-label>
			@for (item of items; track item.value) {
				<hlm-select-item [value]="item.value">{{ item.label }}</hlm-select-item>
			}
		</hlm-select-group>
	</hlm-select-content>
</hlm-select>
`;

export const defaultStyles = `
@import '@angular/cdk/overlay-prebuilt.css';
`;
