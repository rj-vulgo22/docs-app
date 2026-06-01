import { Component } from '@angular/core';
import { CodeBlock } from '../../shared/code/code-block';

@Component({
  standalone: true,
  imports: [CodeBlock],
  template: `
    <section>
      <h1 class="hlm-h1">Chart</h1>
      <p class="hlm-lead">A flexible component for creating visual data representations.</p>
      
      <p class="hlm-p">The Chart component leverages Recharts to provide a variety of data visualization options.</p>

      <h2 class="hlm-h2">Installation</h2>
      <p class="hlm-p">You can add the Chart component to your project using the Spartan CLI:</p>
      <spartan-code-block>
        <pre><code>ng g @spartan-ng/cli:ui chart</code></pre>
      </spartan-code-block>

      <h2 class="hlm-h2">Usage</h2>
      <p class="hlm-p">Detailed usage instructions for the <code>chart</code> component:</p>
      <spartan-code-block>
        <pre><code>{{ usageCode }}</code></pre>
      </spartan-code-block>

      <h2 class="hlm-h2">API Reference</h2>
      <div class="api-table">
        <div class="api-row header">
          <div class="api-col">Property</div>
          <div class="api-col">Type</div>
          <div class="api-col">Default</div>
          <div class="api-col">Description</div>
        </div>
        <div class="api-row">
          <div class="api-col"><code>config</code></div>
          <div class="api-col"><code>ChartConfig</code></div>
          <div class="api-col"><code>-</code></div>
          <div class="api-col">Configuration for colors and labels.</div>
        </div>
        <div class="api-row">
          <div class="api-col"><code>initialDimension</code></div>
          <div class="api-col"><code>&#123;width: number, height: number&#125;</code></div>
          <div class="api-col"><code>&#123;width: 320, height: 200&#125;</code></div>
          <div class="api-col">Initial dimensions for the responsive container.</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .api-table {
      display: flex;
      flex-direction: column;
      border: 1px solid hsl(var(--border));
      border-radius: var(--radius);
      margin-top: 1rem;
      overflow: hidden;
    }
    .api-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 2fr;
      border-bottom: 1px solid hsl(var(--border));
      padding: 12px;
      font-size: 0.875rem;
    }
    .api-row.header {
      background-color: hsl(var(--muted));
      font-weight: 600;
    }
    .api-col {
      padding: 0 8px;
    }
  `]
})
export class ChartPage {
  usageCode = `HlmChartImports from '@spartan-ng/helm/chart';\n\n@Component({\n  imports: [HlmChartImports],\n  template: \`\n    <hlm-chart-container config="desktop">
  <BarChart data={data}>
    <Bar dataKey="desktop" fill="var(--color-desktop)" />
  </BarChart>
</hlm-chart-container>\n  \`\n})\nexport class ChartExample {}`;
}