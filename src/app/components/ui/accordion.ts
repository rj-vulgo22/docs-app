import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AccordionItem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  protected expandedIndex = signal<number | null>(null);

  toggle(index: number) {
    this.expandedIndex.update(current => current === index ? null : index);
  }
}
