import { Component } from '@angular/core';

@Component({
	selector: 'spartan-typography-preview',
	standalone: true,
	template: `
		<h1 class="hlm-h1">The Joke Tax Chronicles</h1>
		<p class="hlm-lead mt-4">
			Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on
			his throne. One day, his advisors came to him with a problem: the kingdom was running out of
			money.
		</p>
		<h2 class="hlm-h2 mt-10">The King's Plan</h2>
		<p class="hlm-p">
			The king thought long and hard, and finally came up with a brilliant plan: he would tax the
			jokes in the kingdom.
		</p>
		<blockquote class="hlm-blockquote">
			"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for
			the privilege."
		</blockquote>
		<h3 class="hlm-h3 mt-8">The Joke Tax</h3>
		<p class="hlm-p">The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
		<ul class="hlm-ul">
			<li>1st level of puns: 5 gold coins</li>
			<li>2nd level of jokes: 10 gold coins</li>
			<li>3rd level of one-liners: 20 gold coins</li>
		</ul>
		<p class="hlm-p">
			As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one
			person who refused to let the king's foolishness get him down: a court jester named Jokester.
		</p>
	`,
})
export class TypographyPreview {}

export const defaultImports = ``;
export const defaultSkeleton = ``;
