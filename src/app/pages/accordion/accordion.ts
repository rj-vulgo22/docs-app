import { Component } from '@angular/core';
import { AccordionComponent } from '../../components/ui/accordion';

@Component({
  standalone: true,
  imports: [AccordionComponent],
  template: `
    <section>
      <h1>Accordion</h1>
      <p>O componente Accordion é ideal para organizar grandes quantidades de conteúdo em espaços reduzidos, permitindo que o usuário expanda apenas as partes que lhe interessam.</p>
      
      <div class="component-demo">
        <app-accordion [items]="accordionItems"></app-accordion>
      </div>

      <h2>Propriedades</h2>
      <table class="docs-table">
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Tipo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>items</code></td>
            <td><code>AccordionItem[]</code></td>
            <td>Lista de objetos contendo título e conteúdo.</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
  styles: [`
    .component-demo {
      margin: 32px 0;
      padding: 24px;
      border: 1px solid hsl(var(--border));
      border-radius: var(--radius);
      background-color: hsl(var(--background));
    }
    .docs-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
    }
    .docs-table th, .docs-table td {
      text-align: left;
      padding: 12px;
      border-bottom: 1px solid hsl(var(--border));
    }
    .docs-table th {
      font-weight: 600;
      color: hsl(var(--foreground));
    }
    .docs-table td {
      color: hsl(var(--muted-foreground));
    }
  `]
})
export class AccordionPage {
  accordionItems = [
    { title: 'O que é o Accordion?', content: 'O Accordion é um componente de interface que permite alternar a visibilidade de seções de conteúdo, economizando espaço na tela.' },
    { title: 'Como instalar?', content: 'Você pode instalar via Spartan CLI usando o comando ng generate @spartan-ng/cli:ui accordion.' },
    { title: 'É acessível?', content: 'Sim, nossos componentes seguem os padrões WAI-ARIA para garantir a máxima acessibilidade.' },
  ];
}
