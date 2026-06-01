import { Component } from '@angular/core';
import { CodeBlock } from '../../shared/code/code-block';

@Component({
	standalone: true,
	imports: [CodeBlock],
	template: `
		<section>
			<h1 class="hlm-h1">components.json</h1>
			<p class="hlm-lead">Manage the spartan configuration through components.json.</p>

			<p class="hlm-p">
				Your custom configuration for the spartan CLI is stored in a file called <code>components.json</code> and is
				located in the root of your workspace.
			</p>

			<p class="hlm-p">
				<strong>Note:</strong> this file is only required by the spartan CLI. If you're manually copy & pasting
				components, you can ignore this file.
			</p>

			<h2 class="hlm-h2">File Generation</h2>
			<p class="hlm-p">
				The <code>components.json</code> file is generated the first time you use the <code>ui</code> command.
			</p>

			<h2 class="hlm-h2">NX Workspace Configuration</h2>
			<spartan-code-block>
				<pre><code>{{ '{' }}
  "componentsPath": "libs/ui",
  "importAlias": "@spartan-ng/helm",
  "buildable": true,
  "generateAs": "library" | "entrypoint"
{{ '}' }}</code></pre>
			</spartan-code-block>

			<h2 class="hlm-h2">Angular CLI Project Configuration</h2>
			<spartan-code-block>
				<pre><code>{{ '{' }}
  "componentsPath": "libs/ui",
  "importAlias": "@spartan-ng/helm"
{{ '}' }}</code></pre>
			</spartan-code-block>

			<h2 class="hlm-h2">Configuration Flags</h2>
			<div class="flag-grid">
				<div class="flag-item">
					<span class="flag-name">componentsPath</span>
					<span class="flag-desc">The base path where your components will be generated.</span>
				</div>
				<div class="flag-item">
					<span class="flag-name">importAlias</span>
					<span class="flag-desc">Specify the import path of the component e.g. @spartan-ng/helm.</span>
				</div>
				<div class="flag-item">
					<span class="flag-name">buildable (nx only)</span>
					<span class="flag-desc">Determines whether the generated library is buildable or not.</span>
				</div>
				<div class="flag-item">
					<span class="flag-name">generateAs (nx only)</span>
					<span class="flag-desc">Generate the components as a library or entrypoint.</span>
				</div>
			</div>
		</section>
	`,
	styles: [`
		.flag-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			gap: 16px;
			margin-top: 24px;
		}
		.flag-item {
			padding: 16px;
			border: 1px solid hsl(var(--border));
			border-radius: var(--radius);
			background-color: hsl(var(--surface-100));
			display: flex;
			flex-direction: column;
			gap: 4px;
		}
		.flag-name {
			font-weight: 600;
			color: hsl(var(--primary));
			font-family: 'JetBrains Mono', monospace;
		}
		.flag-desc {
			font-size: 0.875rem;
			color: hsl(var(--muted-foreground));
		}
	`],
})
export class ComponentsJsonPage {}
