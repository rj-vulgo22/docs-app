import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PrimitiveSnippetsService } from './core/services/primitive-snippets.service';
import { ApiDocsService } from './core/services/api-docs.service';
import { ManualInstallService } from './core/services/manual-install.service';
import type { PrimitiveSnippets } from './core/models/primitives-snippets.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly _http = inject(HttpClient);
  private readonly _primitiveSnippets = inject(PrimitiveSnippetsService);
  private readonly _apiDocs = inject(ApiDocsService);
  private readonly _manualInstall = inject(ManualInstallService);
  protected readonly title = signal('docs-app');

  ngOnInit(): void {
    this._http.get<PrimitiveSnippets>('/data/primitives-snippets.json').subscribe({
      next: (data) => this._primitiveSnippets.setSnippets(data),
      error: () => console.error('Failed to load primitives snippets'),
    });
    this._http.get<any>('/data/ui-api.json').subscribe({
      next: (data) => this._apiDocs.setApiDocs(data),
      error: () => console.error('Failed to load UI API docs'),
    });
    this._http.get<any>('/data/manual-install-snippets.json').subscribe({
      next: (data) => this._manualInstall.setSnippets(data),
      error: () => console.error('Failed to load manual install snippets'),
    });
  }
}
