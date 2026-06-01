import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sheet.html',
  styleUrl: './sheet.css',
})
export class SheetComponent {
  @Input() title: string = 'Menu';
  protected isOpen = signal(false);

  open() {
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen.set(false);
    document.body.style.overflow = 'auto';
  }

  toggle() {
    this.isOpen.update((v) => !v);
    if (!this.isOpen()) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
}
