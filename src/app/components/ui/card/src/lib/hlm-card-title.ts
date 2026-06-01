import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
  selector: '[hlmCardTitle]',
  host: {
    'data-slot': 'card-title',
  },
})
export class HlmCardTitle {
  constructor() {
    classes(() => 'text-base font-semibold leading-none tracking-tight group-data-[size=sm]/card:text-sm');
  }
}
