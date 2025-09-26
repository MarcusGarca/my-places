import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  origin: string = '';
  destination: string = '';
  useCurrentLocation: boolean = false;
  currentCoords: string = '';

  /**
 * Define a localização atual do usuário utilizando a API de geolocalização do navegador.
 * A função retorna uma Promise que é resolvida ao obter as coordenadas, ou rejeitada em caso de erro.
 *
 * @returns {Promise<void>} Uma Promise que resolve sem valor quando a localização é obtida.
 * @throws {string} Rejeita com uma mensagem de erro se a geolocalização não for suportada ou se houver um erro ao obtê-la.
 */
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

  /**
 * Constrói uma URL de direções do Google Maps com base na origem e no destino.
 * A URL é formatada para ser aberta em um navegador, direcionando para a rota.
 *
 * @returns {string} A URL completa da rota no Google Maps. Retorna '#' se a origem ou o destino estiverem ausentes.
 */
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


  /**
   *
   * @param destination Destino da rota (endereço ou coordenadas).
   * @returns
   */
  openInGoogleMapsMyItinerary(destination: string): string {
    if (!destination) return '#';

    const end = encodeURIComponent(destination);

    // se não tiver origem definida, abre só com destino
    if ((!this.origin && !this.useCurrentLocation) || (this.useCurrentLocation && !this.currentCoords)) {
      return `https://www.google.com/maps/dir/?api=1&destination=${end}`;
    }

    let start = '';
    if (this.useCurrentLocation) {
      start = this.currentCoords ? this.currentCoords : '';
    } else {
      start = encodeURIComponent(this.origin);
    }

    return `https://www.google.com/maps/dir/?api=1&origin=${start}&destination=${end}`;
  }




}
