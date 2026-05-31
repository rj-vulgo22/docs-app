import { Component, viewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SheetComponent } from '../components/ui/sheet/sheet';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SheetComponent],
  templateUrl: './docs.html',
  styleUrl: './docs.css',
})
export class Docs {
  sheet = viewChild(SheetComponent);
  
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

  openMenu() {
    this.sheet()?.open();
  }

  closeMenu() {
    this.sheet()?.close();
  }
}

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './docs.html',
  styleUrl: './docs.css',
})
export class Docs {
  accordionItems: AccordionItem[] = [
    { title: 'O que é o Accordion?', content: 'O Accordion é um componente de interface que permite alternar a visibilidade de seções de conteúdo, economizando espaço na tela.' },
    { title: 'Como instalar?', content: 'Você pode instalar via Spartan CLI usando o comando ng generate @spartan-ng/cli:ui accordion.' },
    { title: 'É acessível?', content: 'Sim, nossos componentes seguem os padrões WAI-ARIA para garantir a máxima acessibilidade.' },
  ];

  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
}
