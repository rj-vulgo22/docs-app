import { Routes } from '@angular/router';
import { Docs } from './docs/docs';

export const routes: Routes = [
  { path: '', redirectTo: 'docs/intro', pathMatch: 'full' },
  { 
    path: 'docs', 
    component: Docs, 
    children: [
      { path: 'intro', loadComponent: () => import('./pages/intro/intro').then(m => m.IntroPage) },
      { path: 'accordion', loadComponent: () => import('./pages/accordion/accordion').then(m => m.AccordionPage) },
      { path: 'setup', loadComponent: () => import('./pages/setup/setup').then(m => m.SetupPage) },
      { path: 'concepts', loadComponent: () => import('./pages/concepts/concepts').then(m => m.ConceptsPage) },
      { path: 'components', loadComponent: () => import('./pages/components/components').then(m => m.ComponentsPage) },
    ]
  },
  { path: '**', redirectTo: 'docs/intro' }
];
