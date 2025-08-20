import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyPlacesComponent } from "./my-places/my-places.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyPlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-places';
}
