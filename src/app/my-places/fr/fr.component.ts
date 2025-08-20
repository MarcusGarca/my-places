import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapsService } from '../../../services/maps.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fr',
  imports: [NgFor, NgIf, FormsModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './fr.component.html',
  styleUrl: './fr.component.css'
})
export class FrComponent {
  constructor(public mapsService: MapsService) { }

  francePlaces = [
    { title: 'Radisson Bloomsbury (Hotel)', address: "Radisson Blu Edwardian Bloomsbury Street, London" },
    { title: 'Mercado Mayfair', address: "Mercato Mayfair, North Audley Street, London" },
    { title: 'British Museum', address: "The British Museum, Great Russell St, London" },
    { title: 'Hyde Park', address: "Hyde Park, London" },
    { title: 'Millennium Bridge - ponte Harry Potter', address: "Millennium Bridge, London" },
    { title: 'Tower Bridge', address: "Tower Bridge, London" },
    { title: 'Torre de Londres', address: "Tower of London, London" },
    { title: 'London Bridge', address: "London Bridge, London" },
    { title: 'London Eye', address: "London Eye, London" },
    { title: 'Catedral Saint Paul', address: "St. Paul's Cathedral, London" },
    { title: 'Notting Hill', address: "Notting Hill, London" },
    { title: 'Spitalfields Market', address: "Old Spitalfields Market, London" },
    { title: 'Saint Martin Courtyard', address: "St. Martin's Courtyard, London" },
    { title: 'The Tide', address: "The Tide, Greenwich, London" },
    { title: 'Praça Piccadilly', address: "Piccadilly Circus, London" },
    { title: 'Leadenhall Market', address: "Leadenhall Market, London" },
    { title: 'Borough Market', address: "Borough Market, London" },
    { title: 'Camden Park', address: "Camden Market, London" },
    { title: 'Covent Garden', address: "Covent Garden, London" }
  ];

}
