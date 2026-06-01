import { Component } from '@angular/core';
import { CodeBlock } from '../../shared/code/code-block';

@Component({
  standalone: true,
  imports: [CodeBlock],
  template: `
    <section>
      <h1 class="hlm-h1">Theming</h1>
      <p class="hlm-lead">Customize the look and feel of your application.</p>
      
      <p class="hlm-p">spartan/ui uses CSS variables for theming. This allows you to change the overall appearance of your components by simply updating a few variables in your global CSS file.</p>

      <h2 class="hlm-h2">Customizing Colors</h2>
      <p class="hlm-p">You can override the default colors by defining your own values for the CSS variables in your <code>styles.css</code>:</p>
      <spartan-code-block>
        <pre><code>{{ codeSnippet }}</code></pre>
      </spartan-code-block>

      <h2 class="hlm-h2">Design Tokens</h2>
      <p class="hlm-p">We follow a token-based system to ensure consistency across different components and surfaces.</p>
      <ul class="hlm-ul">
        <li><strong>Surface Scale:</strong>- Defines the depth of the UI.</li>
        <li><strong>Semantic Colors:</strong>- Maps colors to their function (e.g., primary, destructive).</li>
      </ul>
    </section>
  `,
  styles: []
})
export class ThemingPage {
  codeSnippet = ':root {\n  --primary: 200 100% 50%;\n  --background: 0 0% 10%;\n}';
}
