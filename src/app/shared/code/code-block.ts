import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'spartan-code-block',
	standalone: true,
	encapsulation: ViewEncapsulation.None,
	host: {
		class: 'block font-mono rounded-md text-sm text-foreground bg-secondary border-border border relative overflow-hidden',
	},
	styles: [
		`
			.spartan-code-block-content {
				position: relative;
				z-index: 1;
				padding: 16px;
				overflow-x: auto;
			}
			.spartan-code-block-content pre {
				margin: 0;
				font-family: 'JetBrains Mono', monospace;
				font-size: 0.875rem;
				color: hsl(var(--foreground));
			}
			.spartan-code-block-shimmer {
				position: absolute;
				inset: 0;
				background: linear-gradient(
					105deg,
					transparent 25%,
					hsla(var(--foreground) / 0.04) 40%,
					hsla(var(--foreground) / 0.08) 50%,
					hsla(var(--foreground) / 0.04) 60%,
					transparent 75%
				);
				background-size: 300% 100%;
				animation: code-block-shimmer 12s linear infinite;
				pointer-events: none;
				z-index: 0;
			}
			@keyframes code-block-shimmer {
				0% { background-position: 300% 0; }
				100% { background-position: -300% 0; }
			}
		`,
	],
	template: `
		<div class="spartan-code-block-shimmer"></div>
		<div class="spartan-code-block-content">
			<ng-content />
		</div>
	`,
})
export class CodeBlock {}
