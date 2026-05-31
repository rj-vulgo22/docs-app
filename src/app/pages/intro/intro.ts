import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section>
      <h1>Introdução</h1>
      <p>Bem-vindo à documentação oficial do nosso projeto Angular. Esta página fornece uma visão geral de como começar a desenvolver com nossa estrutura.</p>
      
      <h2>O que é este projeto?</h2>
      <p>Este é um website de documentação simples construído utilizando <strong>Angular (v19+)</strong> seguindo os padrões recomendados pela Google, focado em <strong>Client-Side Rendering (CSR)</strong> para uma experiência de navegação rápida e reativa.</p>

      <h2>Por que Angular?</h2>
      <p>Angular é uma plataforma de desenvolvimento, construída sobre TypeScript. Como uma plataforma, o Angular inclui:</p>
      <ul>
        <li>Uma estrutura baseada em componentes para construir aplicativos web escaláveis.</li>
        <li>Uma coleção de bibliotecas bem integradas que cobrem uma variedade de recursos, incluindo roteamento, gerenciamento de formulários, comunicação cliente-servidor e muito mais.</li>
        <li>Um conjunto de ferramentas de desenvolvedor para ajudar você a desenvolver, testar e atualizar seu código.</li>
      </ul>

      <div class="info-box">
        <strong>Nota:</strong> Esta documentação está em constante atualização. Se você encontrar algum erro, sinta-se à vontade para contribuir.
      </div>
    </section>
  `,
  styles: [`
    .info-box {
      background-color: hsl(var(--secondary));
      border-left: 4px solid hsl(var(--primary));
      padding: 16px;
      margin-top: 32px;
      border-radius: 4px;
    }
  `]
})
export class IntroPage {}
