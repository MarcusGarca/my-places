import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapsService } from '../../../services/maps.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-uk',
  imports: [NgFor, NgIf, FormsModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './uk.component.html',
  styleUrl: './uk.component.css'
})
export class UkComponent {
  constructor(public mapsService: MapsService) { }

  londonPlaces = [
    {
      category: 'Nosso Hotel',
      places: [
        { title: 'Radisson Bloomsbury', address: "Radisson Blu Edwardian Bloomsbury Street, London" }
      ]
    },
    {
      category: 'Museus',
      places: [
        { title: 'British Museum', address: "The British Museum, Great Russell St, London" }
      ]
    },
    {
      category: 'Parques',
      places: [
        { title: 'Hyde Park', address: "Hyde Park, London" }
      ]
    },
    {
      category: 'Pontes',
      places: [
        { title: 'Millennium Bridge - ponte Harry Potter', address: "Millennium Bridge, London" },
        { title: 'Tower Bridge', address: "Tower Bridge, London" },
        { title: 'London Bridge', address: "London Bridge, London" }
      ]
    },
    {
      category: 'Mercados',
      places: [
        { title: 'Mercado Mayfair', address: "Mercato Mayfair, North Audley Street, London" },
        { title: 'Spitalfields Market', address: "Old Spitalfields Market, London" },
        { title: 'Borough Market', address: "Borough Market, London" },
        { title: 'Camden Park', address: "Camden Market, London" },
        { title: 'Leadenhall Market', address: "Leadenhall Market, London" }
      ]
    },
    {
      category: 'Pubs',
      places: [
        { title: 'The Lamb & Flag', address: "The Lamb & Flag, Covent Garden, 33 Rose St, London WC2E 9EB, Reino Unido" },
        { title: 'The French House', address: "The French House, 49 Dean St, London W1D 5BG, Reino Unido" }
      ]
    }
  ];

  onOriginChange(value: string) {
    if (value === 'current-location') {
      this.mapsService.setCurrentLocation().catch(err => {
        console.error('Erro ao obter localização:', err);
        // opcional: você pode mostrar um snackbar/toast de erro aqui
      });
    } else {
      this.mapsService.useCurrentLocation = false;
    }
  }



}
