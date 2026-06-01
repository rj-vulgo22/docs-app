import { Component, input } from '@angular/core';

@Component({
	selector: 'spartan-ui-api-docs-table',
	template: `
		<h5 class="text-sm font-medium mt-4 mb-2">{{ title() }}</h5>
		<div class="overflow-x-auto rounded-md border border-border">
			<table class="w-full text-sm">
				<thead>
					<tr class="bg-muted/50 border-b border-border">
						@for (col of columns(); track col.key) {
							<th class="text-left px-3 py-2 font-medium text-muted-foreground">{{ col.label }}</th>
						}
					</tr>
				</thead>
				<tbody>
					@for (row of rows(); track row.name) {
						<tr class="border-b border-border last:border-b-0">
							@for (col of columns(); track col.key) {
								<td class="px-3 py-2 text-foreground font-mono text-xs">{{ row[col.key] || '-' }}</td>
							}
						</tr>
					}
				</tbody>
			</table>
		</div>
	`,
})
export class UIApiDocsTable {
	public readonly title = input.required<string>();
	public readonly rows = input.required<any[]>();
	public readonly columns = input.required<{ label: string; key: string }[]>();
}
