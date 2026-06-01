import { Component } from '@angular/core';

@Component({
	standalone: true,
	template: `
		<section>
			<h1 class="hlm-h1">Introduction</h1>
			<p class="hlm-lead">Accessible UI primitives for Angular. Install the behavior. Copy the styles.</p>

			<p class="hlm-p">
				<code>spartan/ui</code> gives you accessible, customizable components for Angular applications. Built with
				signals, SSR compatible, and zoneless ready - no full-stack setup required, just add to any Angular project.
			</p>

			<h2 class="hlm-h2">How it works</h2>
			<p class="hlm-p">
				spartan uses a two-layer architecture that gives you both maintained accessibility and complete style
				ownership:
			</p>

			<div class="info-grid">
				<div class="info-card">
					<div class="info-card-header">
						<span>🧠</span>
						<code>spartan/ui/brain</code>
					</div>
					<p class="hlm-p">Unstyled, accessible primitives installed via npm. Handles ARIA attributes, keyboard
					navigation, and focus management.</p>
					<p class="hlm-p"><strong>You install it:</strong> Regular dependency with updates and maintenance included.</p>
				</div>
				<div class="info-card">
					<div class="info-card-header">
						<span>⚡</span>
						<code>spartan/ui/helm</code>
					</div>
					<p class="hlm-p">Styled components with a shadcn-inspired design system. Built with Tailwind CSS classes you
					can edit directly.</p>
					<p class="hlm-p"><strong>You copy it:</strong> Lives in your codebase. Customize without fighting a theming API.</p>
				</div>
			</div>

			<p class="hlm-p">
				This hybrid approach means you get the best of both worlds: we maintain the complex accessibility logic, while
				you own and control every aspect of the styling.
			</p>

			<h2 class="hlm-h2">Full-stack development (optional)</h2>
			<p class="hlm-p">
				Need more than UI components? The <code>spartan/stack</code> provides an opinionated full-stack setup with
				AnalogJs for end-to-end type-safe development.
			</p>
			<p class="hlm-p">
				Built on: <code>Supabase</code>, <code>Angular</code>, <code>tRPC</code>,
				<code>Tailwind</code>, <code>AnalogJs</code>, <code>Nx</code>, and <code>Drizzle</code>.
			</p>

			<h2 class="hlm-h2">FAQ</h2>
			<div class="faq-section">
				<div class="faq-item">
					<h3 class="hlm-h3">What is spartan/ui?</h3>
					<p class="hlm-p">A collection of accessible UI primitives for Angular. You install behavior via npm and
					copy styles into your codebase for complete customization.</p>
				</div>
				<div class="faq-item">
					<h3 class="hlm-h3">Do I need AnalogJs or a full-stack setup?</h3>
					<p class="hlm-p">No. spartan/ui works with any Angular application. The spartan/stack is optional for
					full-stack development.</p>
				</div>
				<div class="faq-item">
					<h3 class="hlm-h3">What's the difference between Brain and Helm?</h3>
					<p class="hlm-p">Brain (brn) is the unstyled, accessible primitive you install from npm - we maintain it
					with updates. Helm (hlm) is the styled layer you copy into your project - you own and customize it.</p>
				</div>
				<div class="faq-item">
					<h3 class="hlm-h3">Why copy components instead of installing them?</h3>
					<p class="hlm-p">Copying styles gives you complete control. No theming API to learn, no version conflicts,
					no waiting for maintainers to add features. Edit Tailwind classes directly and ship.</p>
				</div>
				<div class="faq-item">
					<h3 class="hlm-h3">Why are there so few unit tests in the codebase?</h3>
					<p class="hlm-p">We run comprehensive end-to-end tests in real browsers instead of JSDOM. UI components
					need to test behavior (focus management, keyboard navigation, ARIA announcements) that only works properly
					in actual browser environments.</p>
				</div>
				<div class="faq-item">
					<h3 class="hlm-h3">Is spartan/ui inspired by shadcn/ui?</h3>
					<p class="hlm-p">Yes. We adapted the copy-paste philosophy and design patterns from shadcn/ui (React) and
					Radix UI for Angular, using signals, standalone components, and Angular-native APIs.</p>
				</div>
				<div class="faq-item">
					<h3 class="hlm-h3">What is spartan/stack?</h3>
					<p class="hlm-p">An optional collection of full-stack technologies for end-to-end type-safe Angular
					development with AnalogJs. Not required for using spartan/ui.</p>
				</div>
			</div>
		</section>
	`,
	styles: [`
		.info-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 24px;
			margin: 2rem 0;
		}
		.info-card {
			padding: 24px;
			border: 1px solid hsl(var(--border));
			border-radius: var(--radius);
			background-color: hsl(var(--surface-100));
		}
		.info-card-header {
			display: flex;
			align-items: center;
			gap: 8px;
			margin-bottom: 12px;
		}
		.info-card-header code {
			font-size: 1rem;
			font-weight: 600;
		}
		.info-card p:last-child {
			margin-bottom: 0;
		}
		.faq-section {
			margin-top: 2rem;
			border-top: 1px solid hsl(var(--border));
			padding-top: 2rem;
		}
		.faq-item {
			padding: 16px 0;
			border-bottom: 1px solid hsl(var(--border));
		}
		.faq-item:last-child {
			border-bottom: none;
		}
		.faq-item h3 {
			margin-bottom: 4px;
		}
		.faq-item p {
			margin: 0;
			color: hsl(var(--muted-foreground));
		}
	`],
})
export class IntroductionPage {}
