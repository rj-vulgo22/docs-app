import { Directive, inject } from '@angular/core';
import { StyleService } from '../style.service';

@Directive({
	selector: '[spartanRtlCodePreview]',
	host: {
		class: 'preview flex min-h-[350px] w-full justify-center px-4 lg:px-10 py-10 items-center',

		'[attr.data-style]': '_styleService.style()',
		'[class]': '"style-"+_styleService.style()',
		'[class.not-style-vega]': '_styleService.isNotVega()',
	},
})
export class CodeRtlPreview {
	protected readonly _styleService = inject(StyleService);
}
