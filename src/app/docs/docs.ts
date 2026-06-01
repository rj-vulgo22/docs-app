import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';

@Component({
	selector: 'app-docs',
	standalone: true,
	imports: [RouterOutlet, RouterLink, HlmSheetImports],
	templateUrl: './docs.html',
	styleUrl: './docs.css',
})
export class Docs {}