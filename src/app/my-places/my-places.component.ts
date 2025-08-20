
import { Component, } from '@angular/core';
import { UkComponent } from "./uk/uk.component";
import { MatTabsModule } from '@angular/material/tabs';
import { FrComponent } from "./fr/fr.component";

@Component({
  selector: 'app-my-places',
  imports: [UkComponent, MatTabsModule, FrComponent],
  templateUrl: './my-places.component.html',
  styleUrl: './my-places.component.css'
})
export class MyPlacesComponent {

}
