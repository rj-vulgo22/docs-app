import { Component } from '@angular/core';

@Component({
	standalone: true,
	template: `
		<section>
			<h1 class="hlm-h1">Dark Mode</h1>
			<p class="hlm-lead">Toggle between light and dark themes with a single class.</p>

			<p class="hlm-p">
				spartan/ui supports dark mode out of the box. Add the <code>dark</code> class to your
				<code>&lt;html&gt;</code> element, and all CSS variables automatically switch to their dark mode values.
			</p>

			<p class="hlm-p">No component changes required. All spartan primitives adapt automatically.</p>

			<h2 class="hlm-h2">Implementation</h2>
			<p class="hlm-p">For a complete implementation including:</p>
			<ul class="hlm-ul">
				<li>Persisting user preference with localStorage</li>
				<li>Respecting system color scheme</li>
				<li>Preventing theme flash on SSR</li>
				<li>Angular service with signals</li>
			</ul>
			<p class="hlm-p">
				See this comprehensive guide:
				<a href="https://dev.to/this-is-angular/dark-mode-with-analog-tailwind-4049">
					Dark mode with Angular & Tailwind
				</a>
			</p>
		</section>
	`,
})
export class DarkModePage {}
