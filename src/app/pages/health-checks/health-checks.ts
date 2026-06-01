import { Component } from '@angular/core';
import { CodeBlock } from '../../shared/code/code-block';

@Component({
	standalone: true,
	imports: [CodeBlock],
	template: `
		<section>
			<h1 class="hlm-h1">Health Checks</h1>
			<p class="hlm-lead">Scan your codebase for issues. Automatically fix most of them.</p>

			<p class="hlm-p">
				The spartan CLI includes a health check tool that scans your components for common issues and outdated
				patterns. Run it after updating spartan packages to ensure your code stays current.
			</p>

			<spartan-code-block>
				<pre><code>ng g @spartan-ng/cli:healthcheck</code></pre>
			</spartan-code-block>

			<h2 class="hlm-h2">What it does</h2>
			<p class="hlm-p">The health check tool identifies issues like:</p>
			<ul class="hlm-ul">
				<li>Deprecated component APIs or import paths</li>
				<li>Outdated helm directive usage</li>
				<li>Missing dependencies or peer dependency conflicts</li>
				<li>Breaking changes from recent updates</li>
			</ul>
			<p class="hlm-p">
				Most issues can be fixed automatically. The tool will update import paths, migrate deprecated APIs, and fix
				common configuration issues. For anything that requires manual intervention, it provides clear guidance on
				what needs to change.
			</p>

			<h2 class="hlm-h2">When to run health checks</h2>
			<p class="hlm-p">Run health checks:</p>
			<ul class="hlm-ul">
				<li>After updating <code>@spartan-ng</code> packages</li>
				<li>When migrating existing components to new patterns</li>
				<li>Periodically to catch deprecated patterns early</li>
			</ul>
			<p class="hlm-p">
				See the update guide for version-specific migration instructions.
			</p>
		</section>
	`,
	styles: [],
})
export class HealthChecksPage {}
