import { Component, computed, inject, input } from '@angular/core';
import { ManualInstallService, ManualInstallPrimitives } from '../../core/services/manual-install.service';
import { Code } from '../code/code';

@Component({
	selector: 'spartan-install-tabs',
	imports: [Code],
	template: `
		<h2 class="font-heading pt-12 text-xl font-medium tracking-tight lg:pt-16">Installation</h2>

		<div class="mt-4" hlmTabs="Command">
			<div class="border-border flex items-center gap-2 border-b px-1">
				<button class="px-3 py-2 text-sm font-medium text-foreground border-b-2 border-b-primary"
					(click)="_activeTab = 'Command'"
					[class.text-muted-foreground]="_activeTab !== 'Command'"
					[class.text-foreground]="_activeTab === 'Command'"
					[class.border-b-transparent]="_activeTab !== 'Command'"
					[class.border-b-primary]="_activeTab === 'Command'">Command</button>
				<button class="px-3 py-2 text-sm font-medium"
					(click)="_activeTab = 'Manual'"
					[class.text-muted-foreground]="_activeTab !== 'Manual'"
					[class.text-foreground]="_activeTab === 'Manual'"
					[class.border-b-transparent]="_activeTab !== 'Manual'"
					[class.border-b-primary]="_activeTab === 'Manual'">Manual</button>
			</div>

			@if (_activeTab === 'Command') {
				<div class="mt-4">
					<div class="border-border block rounded-md bg-zinc-900 overflow-hidden">
						<div class="border-border/50 flex items-center gap-2 border-b px-3 py-1">
							<span class="text-muted-foreground text-sm font-mono">$</span>
							<span class="text-sm font-mono text-white">ng g &#64;spartan-ng/cli:ui {{ primitive() }}</span>
						</div>
					</div>
				</div>
			}

			@if (_activeTab === 'Manual') {
				<div class="mt-4 space-y-4">
					<div class="border-border rounded-md border">
						<button class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium"
							(click)="_openUtils = !_openUtils">
							<span>1. Copy utils if needed</span>
							<span class="text-muted-foreground">{{ _openUtils ? '−' : '+' }}</span>
						</button>
						@if (_openUtils) {
							<div class="px-4 pb-4">
								<spartan-code [code]="_utilsCode()" />
							</div>
						}
					</div>
					<div class="border-border rounded-md border">
						<button class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium"
							(click)="_openCode = !_openCode">
							<span>2. Copy the component code</span>
							<span class="text-muted-foreground">{{ _openCode ? '−' : '+' }}</span>
						</button>
						@if (_openCode) {
							<div class="px-4 pb-4">
								<spartan-code [code]="_snippetCode()" />
							</div>
						}
					</div>
				</div>
			}
		</div>
	`,
})
export class InstallTabs {
	private readonly _installService = inject(ManualInstallService);
	public readonly primitive = input.required<ManualInstallPrimitives>();
	public readonly showOnlyVega = input(true);
	protected _activeTab = 'Command';
	protected _openUtils = false;
	protected _openCode = true;
	protected readonly _snippets = computed(() => this._installService.getSnippets(this.primitive())()?.vega ?? '');
	protected readonly _utilsCode = computed(() => this._installService.getSnippets('utils')()?.vega ?? '');
	protected readonly _snippetCode = computed(() => this._snippets());
}
