import { Component } from '@angular/core';
import { UkComponent } from "./uk/uk.component";
import { MatTabsModule } from '@angular/material/tabs';
import { FrComponent } from "./fr/fr.component";

@Component({
  selector: 'app-my-timeline',
  imports: [UkComponent, MatTabsModule, FrComponent],
  templateUrl: './my-timeline.component.html',
  styleUrl: './my-timeline.component.css'
})
export class MyTimelineComponent {

}
