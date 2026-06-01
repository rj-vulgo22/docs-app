import { Component } from '@angular/core';
import { CodeBlock } from '../../shared/code/code-block';

@Component({
	standalone: true,
	imports: [CodeBlock],
	template: `
		<section>
			<h1 class="hlm-h1">Installation</h1>
			<p class="hlm-lead">Install behavior. Copy styles. Start building.</p>

			<p class="hlm-p">
				spartan/ui uses a two-layer architecture: you install <code>@spartan-ng/brain</code> from npm for accessible
				primitives, then copy <code>helm</code> styles into your codebase for customization.
			</p>

			<h2 class="hlm-h2">Prerequisites</h2>
			<p class="hlm-p">
				spartan/ui requires Tailwind CSS. If you haven't set it up yet, follow the
				<a href="https://tailwindcss.com/docs/installation/framework-guides/angular">official Angular installation guide</a>
				before continuing.
			</p>

			<h2 class="hlm-h2">Quick Start</h2>
			<p class="hlm-p">Install the CLI plugin:</p>
			<spartan-code-block>
				<pre><code>pnpm add -D @spartan-ng/cli</code></pre>
			</spartan-code-block>

			<p class="hlm-p">Run the spartan/cli init command:</p>
			<spartan-code-block>
				<pre><code>ng g @spartan-ng/cli:init</code></pre>
			</spartan-code-block>

			<p class="hlm-p">
				Use the CLI to add components to your project. This installs the brain dependency (npm) and copies helm code
				(styles) into your codebase:
			</p>
			<spartan-code-block>
				<pre><code>ng g @spartan-ng/cli:ui</code></pre>
			</spartan-code-block>

			<p class="hlm-p">The CLI will prompt you to select which components to add. Each component includes:</p>
			<ul class="hlm-ul">
				<li>Brain primitive (installed to node_modules)</li>
				<li>Helm styles (copied to your project)</li>
				<li>All necessary dependencies</li>
			</ul>

			<h2 class="hlm-h2">Manual Setup</h2>

			<h3 class="hlm-h3">1. Install Dependencies</h3>
			<p class="hlm-p">Install the brain (accessible primitives):</p>
			<spartan-code-block>
				<pre><code>pnpm add @spartan-ng/brain</code></pre>
			</spartan-code-block>
			<p class="hlm-p">Install Angular CDK (required for overlays and accessibility):</p>
			<spartan-code-block>
				<pre><code>pnpm add @angular/cdk</code></pre>
			</spartan-code-block>

			<h3 class="hlm-h3">2. Configure Tailwind CSS</h3>

			<div class="alert-box">
				<h4 class="hlm-h4">Use Tailwind CSS v4</h4>
				<p class="hlm-p">We recommend Tailwind CSS v4. Some features may not work correctly with v3.</p>
			</div>

			<h4 class="hlm-h4">2.1 Configure CSS Layers</h4>
			<p class="hlm-p">Add these layers to your <code>styles.css</code> to ensure ng-icons styles load correctly:</p>
			<spartan-code-block>
				<pre><code>{{ cssLayersCode }}</code></pre>
			</spartan-code-block>

			<h4 class="hlm-h4">2.2 Import spartan/ui preset</h4>
			<p class="hlm-p">Add the spartan preset to your CSS file:</p>
			<spartan-code-block>
				<pre><code>@import "@spartan-ng/brain/hlm-tailwind-preset.css";</code></pre>
			</spartan-code-block>
			<div class="alert-box info">
				<h4 class="hlm-h4">spartan/ui preset</h4>
				<p class="hlm-p">Our preset already includes tw-animate-css and @angular/cdk/overlay-prebuilt.css</p>
			</div>

			<h4 class="hlm-h4">2.3 Add Theme Variables</h4>
			<p class="hlm-p">You have two options for adding spartan's CSS variables:</p>

			<h4 class="hlm-h4">Option A: Use the Theme Generator (Recommended)</h4>
			<p class="hlm-p">Generate theme configuration automatically with our CLI:</p>
			<spartan-code-block>
				<pre><code>ng g @spartan-ng/cli:ui-theme</code></pre>
			</spartan-code-block>

			<h4 class="hlm-h4">Option B: Manual Setup</h4>
			<p class="hlm-p">Copy these CSS variables to your <code>styles.css</code>:</p>
			<spartan-code-block>
				<pre><code>{{ themeVarsCode }}</code></pre>
			</spartan-code-block>

			<h3 class="hlm-h3">3. Add Components</h3>
			<p class="hlm-p">
				Use the CLI to add components to your project. This installs the brain dependency (npm) and copies helm code
				(styles) into your codebase:
			</p>
			<spartan-code-block>
				<pre><code>ng g @spartan-ng/cli:ui</code></pre>
			</spartan-code-block>
			<p class="hlm-p">The CLI will prompt you to select which components to add. Each component includes:</p>
			<ul class="hlm-ul">
				<li>Brain primitive (installed to node_modules)</li>
				<li>Helm styles (copied to your project)</li>
				<li>All necessary dependencies</li>
			</ul>

			<h2 class="hlm-h2">Editor Setup (Optional)</h2>

			<h3 class="hlm-h3">IntelliSense</h3>
			<p class="hlm-p">
				Enable Tailwind autocompletion in <code>hlm</code>, <code>cva</code> and <code>classes</code> functions:
			</p>
			<ul class="hlm-ul">
				<li>Install the Tailwind CSS IntelliSense extension</li>
				<li>Add this to your <code>settings.json</code>:</li>
			</ul>
			<spartan-code-block>
				<pre><code>{{ intellisenseCode }}</code></pre>
			</spartan-code-block>

			<h3 class="hlm-h3">Class Sorting</h3>
			<p class="hlm-p">Automatically sort Tailwind classes with Prettier:</p>
			<ul class="hlm-ul">
				<li>Install prettier-plugin-tailwindcss</li>
				<li>Add this to your <code>.prettierrc</code>:</li>
			</ul>
			<spartan-code-block>
				<pre><code>{{ classSortingCode }}</code></pre>
			</spartan-code-block>

			<h2 class="hlm-h2">Tailwind CSS v3 (Not Recommended)</h2>
			<div class="alert-box warning">
				<h4 class="hlm-h4">Limited v3 Support</h4>
				<p class="hlm-p">Tailwind CSS v3 support is not guaranteed. Some components may not work as expected. We strongly recommend upgrading to v4.</p>
			</div>
			<p class="hlm-p">If you must use Tailwind v3, add this to your config:</p>
			<spartan-code-block>
				<pre><code>{{ tailwindV3Code }}</code></pre>
			</spartan-code-block>
			<p class="hlm-p">Also make sure to import the Angular CDK overlay styles:</p>
			<spartan-code-block>
				<pre><code>@import '@angular/cdk/overlay-prebuilt.css';</code></pre>
			</spartan-code-block>
		</section>
	`,
	styles: [`
		.alert-box {
			background-color: hsl(var(--secondary));
			border: 1px solid hsl(var(--border));
			border-left: 4px solid hsl(var(--primary));
			padding: 16px;
			margin: 1rem 0;
			border-radius: var(--radius);
		}
		.alert-box.info {
			border-left-color: hsl(var(--ring));
		}
		.alert-box.warning {
			border-left-color: hsl(var(--destructive));
		}
		.alert-box h4 {
			margin: 0 0 4px 0;
			font-size: 0.875rem;
			font-weight: 600;
		}
		.alert-box p {
			margin: 0;
			font-size: 0.875rem;
		}
	`],
})
export class InstallationPage {
	protected readonly cssLayersCode = `@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";`;

	protected readonly themeVarsCode = `:root {
  color-scheme: light;
  --font-sans: 'Geist Sans', sans-serif;
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  color-scheme: dark;
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.985 0 0);
  --sidebar-primary-foreground: oklch(0.205 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}`;

	protected readonly intellisenseCode = `{
  "tailwindCSS.classFunctions": ["hlm", "cva", "classes"]
}`;

	protected readonly classSortingCode = `{
  "tailwindFunctions": ["hlm", "cva", "classes"]
}`;

	protected readonly tailwindV3Code = `/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './REPLACE_WITH_PATH_TO_YOUR_COMPONENTS_DIRECTORY/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`;
}
