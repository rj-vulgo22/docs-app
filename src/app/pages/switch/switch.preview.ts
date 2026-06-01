import { Component } from '@angular/core';
import { HlmLabel } from '@spartan-ng/helm/label';
import { HlmSwitch } from '@spartan-ng/helm/switch';

@Component({
	selector: 'spartan-switch-preview',
	imports: [HlmLabel, HlmSwitch],
	template: `
		<div class="flex w-full flex-col gap-6">
			<div class="flex items-center justify-between">
				<div class="space-y-0.5">
					<label hlmLabel>Airplane Mode</label>
					<p class="text-sm text-muted-foreground">Disable all wireless communications</p>
				</div>
				<hlm-switch />
			</div>
			<div class="flex items-center justify-between">
				<div class="space-y-0.5">
					<label hlmLabel>Dark Mode</label>
					<p class="text-sm text-muted-foreground">Use dark theme across the app</p>
				</div>
				<hlm-switch [checked]="true" />
			</div>
			<div class="flex items-center justify-between">
				<div class="space-y-0.5">
					<label hlmLabel>Notifications</label>
					<p class="text-sm text-muted-foreground">Receive push notifications for updates</p>
				</div>
				<hlm-switch />
			</div>
		</div>
	`,
})
export class SwitchPreview {}

export const defaultImports = `
import { HlmSwitch } from '@spartan-ng/helm/switch';
`;
export const defaultSkeleton = `
<hlm-switch />
`;
