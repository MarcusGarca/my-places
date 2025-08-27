import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  origin: string = '';
  destination: string = '';
  useCurrentLocation: boolean = false;
  currentCoords: string = '';

  async setCurrentLocation(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocalização não suportada.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentCoords = `${position.coords.latitude},${position.coords.longitude}`;
          this.useCurrentLocation = true;
          resolve();
        },
        (error) => reject(error)
      );
    });
  }

  getGoogleMapsRoute(): string {
    if ((!this.origin && !this.useCurrentLocation) || !this.destination) return '#';

    const start = this.useCurrentLocation ? this.currentCoords : encodeURIComponent(this.origin);
    const end = encodeURIComponent(this.destination);

    return `https://www.google.com/maps/dir/${start}/${end}`;
  }
}
