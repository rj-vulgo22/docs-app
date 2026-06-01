import { booleanAttribute, Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'spartan-code',
	encapsulation: ViewEncapsulation.None,
	host: {
		class: 'relative block font-mono rounded-md text-sm text-foreground bg-surface-100 border border-border',
	},
	styles: [`
		.spartan-code-scroll { overflow: auto; }
	`],
	template: `
		<div class="max-h-[650px] w-full overflow-auto p-4 whitespace-nowrap">
			<pre><code>{{ _code }}</code></pre>
		</div>
	`,
})
export class Code {
	protected _code = '';
	public readonly fileName = input('');
	protected _disableCopy = false;
	@Input({ transform: booleanAttribute })
	public set disableCopy(value: boolean) { this._disableCopy = value; }

	private _language = 'ts';
	@Input() public set language(value: string) { this._language = value; }
	public get language() { return this._language; }

	@Input() public set code(value: string | null | undefined) {
		this._code = value ?? '';
	}
}
