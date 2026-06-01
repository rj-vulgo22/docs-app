import { Component } from '@angular/core';
import { Code } from '../../shared/code/code';
import { CodePreview } from '../../shared/code/code-preview';
import { SectionIntro } from '../../shared/layout/section-intro';
import { Tabs } from '../../shared/layout/tabs';
import { SectionSubHeading } from '../../shared/layout/section-sub-heading';
import { InstallTabs } from '@spartan-ng/app/app/shared/layout/install-tabs';
import { TypographyPreview } from './typography.preview';
import { TypographyH1Preview } from './typography--h1.preview';
import { TypographyH2Preview } from './typography--h2.preview';
import { TypographyH3Preview } from './typography--h3.preview';
import { TypographyPPreview } from './typography--p.preview';
import { TypographyLeadPreview } from './typography--lead.preview';
import { TypographyLargePreview } from './typography--large.preview';
import { TypographySmallPreview } from './typography--small.preview';
import { TypographyMutedPreview } from './typography--muted.preview';
import { TypographyBlockquotePreview } from './typography--blockquote.preview';
import { TypographyInlineCodePreview } from './typography--inline-code.preview';
import { TypographyListPreview } from './typography--list.preview';

@Component({
	standalone: true,
	imports: [
		Code,
		CodePreview,
		SectionIntro,
		Tabs,
		SectionSubHeading,
		InstallTabs,
		TypographyPreview,
		TypographyH1Preview,
		TypographyH2Preview,
		TypographyH3Preview,
		TypographyPPreview,
		TypographyLeadPreview,
		TypographyLargePreview,
		TypographySmallPreview,
		TypographyMutedPreview,
		TypographyBlockquotePreview,
		TypographyInlineCodePreview,
		TypographyListPreview,
	],
	template: `
		<section>
			<spartan-section-intro
				name="Typography"
				lead="Styles for headings, paragraphs, lists... etc."
			/>

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-preview />
				</div>
				<spartan-code secondTab [code]="_demoCode" />
			</spartan-tabs>

			<spartan-install-tabs primitive="typography" [showOnlyVega]="false" />

			<spartan-section-sub-heading id="h1">h1</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-h1-preview />
				</div>
				<spartan-code secondTab code="<h1 class=&quot;hlm-h1&quot;>Heading 1</h1>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="h2">h2</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-h2-preview />
				</div>
				<spartan-code secondTab code="<h2 class=&quot;hlm-h2&quot;>Heading 2</h2>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="h3">h3</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-h3-preview />
				</div>
				<spartan-code secondTab code="<h3 class=&quot;hlm-h3&quot;>Heading 3</h3>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="p">p</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-p-preview />
				</div>
				<spartan-code secondTab code="<p class=&quot;hlm-p&quot;>Standard paragraph text using the hlm-p class.</p>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="lead">Lead</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-lead-preview />
				</div>
				<spartan-code secondTab code="<p class=&quot;hlm-lead&quot;>Lead text for introductions.</p>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="large">Large</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-large-preview />
				</div>
				<spartan-code secondTab code="<p class=&quot;hlm-lead&quot;>Large text for introductions.</p>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="small">Small</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-small-preview />
				</div>
				<spartan-code secondTab code="<small class=&quot;hlm-small&quot;>Small text for captions or labels.</small>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="muted">Muted</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-muted-preview />
				</div>
				<spartan-code secondTab code="<p class=&quot;hlm-muted&quot;>Muted text for secondary information.</p>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="blockquote">Blockquote</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-blockquote-preview />
				</div>
				<spartan-code secondTab code="<blockquote class=&quot;hlm-blockquote&quot;>&quot;This is a Spartan UI blockquote style.&quot;</blockquote>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="inline-code">Inline Code</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-inline-code-preview />
				</div>
				<spartan-code secondTab code="<code class=&quot;hlm-code&quot;>npm install @spartan-ng/helm</code>" />
			</spartan-tabs>

			<spartan-section-sub-heading id="list">List</spartan-section-sub-heading>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-typography-list-preview />
				</div>
				<spartan-code secondTab code="<ul class=&quot;hlm-ul&quot;>..." />
			</spartan-tabs>
		</section>
	`,
})
export class TypographyPage {
	protected readonly _demoCode = `<h1 class=&quot;hlm-h1&quot;>The Joke Tax Chronicles</h1>
<p class=&quot;hlm-lead&quot;>Once upon a time, in a far-off land...</p>
<h2 class=&quot;hlm-h2&quot;>The King&apos;s Plan</h2>
<p class=&quot;hlm-p&quot;>The king thought long and hard...</p>
<blockquote class=&quot;hlm-blockquote&quot;>&quot;After all,&quot; he said...</blockquote>
<h3 class=&quot;hlm-h3&quot;>The Joke Tax</h3>
<p class=&quot;hlm-p&quot;>The king's subjects were not amused...</p>
<ul class=&quot;hlm-ul&quot;>
  <li>1st level of puns: 5 gold coins</li>
  <li>2nd level of jokes: 10 gold coins</li>
  <li>3rd level of one-liners: 20 gold coins</li>
</ul>`;
}
