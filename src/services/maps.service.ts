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

    let start = '';
    const end = encodeURIComponent(this.destination);

    if (this.useCurrentLocation) {
      // no mobile é melhor deixar o Maps usar a localização automática
      start = this.currentCoords ? this.currentCoords : '';
    } else {
      start = encodeURIComponent(this.origin);
    }

    if (this.useCurrentLocation && !this.currentCoords) {
      // Se não pegamos coordenadas, deixa o Maps decidir a origem
      return `https://www.google.com/maps/dir/?api=1&destination=${end}`;
    }

    return `https://www.google.com/maps/dir/?api=1&origin=${start}&destination=${end}`;
  }

}
