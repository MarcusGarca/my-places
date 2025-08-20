// maps.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  origin: string = '';
  destination: string = '';

  getGoogleMapsRoute(): string {
    if (!this.origin || !this.destination) return '#';
    return `https://www.google.com/maps/dir/${encodeURIComponent(this.origin)}/${encodeURIComponent(this.destination)}`;
  }
}
