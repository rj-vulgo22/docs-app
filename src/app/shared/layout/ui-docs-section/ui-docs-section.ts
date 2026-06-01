import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDocsService } from '../../../core/services/api-docs.service';
import type { LibraryType, LibraryComponents } from '../../../core/models/ui-docs.model';
import { UIApiDocsTable } from '../ui-api-docs-table/ui-api-docs-table';

@Component({
	selector: 'spartan-ui-api-docs',
	host: { class: 'block mb-4' },
	imports: [UIApiDocsTable],
	template: `
		@for (entry of componentEntries(); track entry) {
			@let props = componentProps()[entry];
			<h4 class="text-md font-heading mt-8 mb-2 font-medium">{{ entry }}</h4>
			@if (props.selector) {
				<p class="text-sm mb-1">Selector: <code class="hlm-code">{{ props.selector }}</code></p>
			}
			@if (props.exportAs) {
				<p class="text-sm mb-1">ExportAs: <code class="hlm-code">{{ props.exportAs }}</code></p>
			}
			@if (props.inputs.length) {
				<spartan-ui-api-docs-table title="Inputs" [rows]="props.inputs"
					[columns]="[{ label: 'Prop', key: 'name' }, { label: 'Type', key: 'type' }]" />
			}
			@if (props.outputs.length) {
				<spartan-ui-api-docs-table title="Outputs" [rows]="props.outputs"
					[columns]="[{ label: 'Prop', key: 'name' }, { label: 'Type', key: 'type' }]" />
			}
		}
	`,
})
export class UIApiDocs {
	private readonly _apiDocsService = inject(ApiDocsService);
	private readonly _route = inject(ActivatedRoute);
	public readonly docType = input.required<LibraryType>();
	public readonly primitive = input<string>();
	protected readonly _primitiveName = computed(() => {
		if (this.primitive()) return this.primitive();
		const routeData = this._route.snapshot.data?.['api'] as string | undefined;
		if (routeData) return routeData;
		const segments = this._route.snapshot.url.map(s => s.path);
		return segments[segments.length - 1] || null;
	});
	protected readonly _componentDocs = computed(() => {
		const name = this._primitiveName();
		return name ? this._apiDocsService.getComponentDocs(name as any)() : null;
	});
	protected readonly componentItems = computed<LibraryComponents>(() => this._componentDocs()?.[this.docType()] ?? {});
	protected readonly componentEntries = computed(() => Object.keys(this.componentItems()));
	protected readonly componentProps = computed(() => this.componentItems());
}
