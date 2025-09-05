import { Routes } from '@angular/router';
import { MyPlacesComponent } from "./my-places/my-places.component";
import { MyTimelineComponent } from './my-timeline/my-timeline.component';

export const routes: Routes = [
  {
    path: '',
    component: MyPlacesComponent,
    title: "Trip Lover's - Nossos Locais"
  },
  {
    path: 'our-timeline',
    component: MyTimelineComponent,
    title: "Trip Lover's - Nosso Cronograma"
  },
  { path: '**', redirectTo: '' }
];
