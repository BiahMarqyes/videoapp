import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'jogos-vorazes',
    loadChildren: () => import('./jogos-vorazes/jogos-vorazes.module').then( m => m.JogosVorazesPageModule)
  },  {
    path: 'malevola',
    loadChildren: () => import('./malevola/malevola.module').then( m => m.MalevolaPageModule)
  },
  {
    path: 'eduardo-e-monica',
    loadChildren: () => import('./eduardo-e-monica/eduardo-e-monica.module').then( m => m.EduardoEMonicaPageModule)
  },
  {
    path: 'as-vantagens-de-ser-invisivel',
    loadChildren: () => import('./as-vantagens-de-ser-invisivel/as-vantagens-de-ser-invisivel.module').then( m => m.AsVantagensDeSerInvisivelPageModule)
  },
  {
    path: 'de-repente-trinta',
    loadChildren: () => import('./de-repente-trinta/de-repente-trinta.module').then( m => m.DeRepenteTrintaPageModule)
  },
  {
    path: 'castelo-animado',
    loadChildren: () => import('./castelo-animado/castelo-animado.module').then( m => m.CasteloAnimadoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
