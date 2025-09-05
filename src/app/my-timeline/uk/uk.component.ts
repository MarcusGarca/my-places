import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DayPlan } from '../../../models/timeline-model';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-uk',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule],
  templateUrl: './uk.component.html',
  styleUrl: './uk.component.css'
})


export class UkComponent {
  londonTimeline: DayPlan[] = [
    {
      day: 1,
      date: '01/10',
      activities: [
        {
          time: '16:35',
          title: 'Chegada em Londres',
          description: 'Transfer do Bola',
        },
        {
          title: 'Hotel Radisson Bloomsbury',
          address: '9-13 Bloomsbury St, London WC1B 3QD, Reino Unido',
          location: { lat: 51.5167, lng: -0.1295 }
        },
        {
          title: 'Opções de jantar',
          visited: true,
          stops: [
            { name: 'Restaurante do Hotel-Dalloway Terrace', location: { lat: 51.5007, lng: -0.1246 } },
            { name: 'Bloomsbury Street Kitchen', location: { lat: 51.522121, lng: -0.129420 } },
            { name: 'The Lamb & Flag (Covent Garden)', location: { lat: 51.5117, lng: -0.1257 } },
            { name: 'The French House (Soho)', location: { lat: 51.5130, lng: -0.1320 } }
          ]
        }
      ]
    },
    {
      day: 2,
      date: '02/10',
      activities: [
        {
          time: '10:00',
          title: 'Tour com Guia',
          visited: true,
          stops: [
            { name: 'Big Ben', location: { lat: 51.5007, lng: -0.1246 } },
            { name: 'Parlamento', location: { lat: 51.4995, lng: -0.1248 } },
            { name: 'Abadia Westminster', location: { lat: 51.4993, lng: -0.1273 } },
            { name: 'Trafalgar Square', location: { lat: 51.508, lng: -0.1281 } },
            { name: 'Buckingham Palace', location: { lat: 51.5014, lng: -0.1419 } }
          ]
        },
        {
          time: '14:00',
          title: 'Almoço',
          suggestion: 'Fish',
          visited: true,
          stops: [
            { name: 'Borough Market', location: { lat: 51.5054, lng: -0.0911 } },
          ]

        },
        {
          time: '15:00',
          title: 'Atrações da tarde',
          stops: [
            { name: 'Tower Bridge', location: { lat: 51.5055, lng: -0.0754 } },
            { name: 'Torre de Londres', location: { lat: 51.5081, lng: -0.0759 } },
            { name: 'London Bridge / The Vault Pub', location: { lat: 51.5079, lng: -0.0877 } },
            { name: 'London Eye', location: { lat: 51.5033, lng: -0.1196 } },
            { name: 'Catedral de São Paulo', location: { lat: 51.5138, lng: -0.0984 } }
          ]
        }
      ]
    },
    {
      day: 3,
      date: '03/10',
      activities: [
        { title: 'British Museum', visited: true, location: { lat: 51.5194, lng: -0.127 } },
        { title: 'Abbey Road', location: { lat: 51.5321, lng: -0.1775 } },
        { title: 'Camden Town', location: { lat: 51.5416, lng: -0.142 } },
        { title: 'Covent Garden', location: { lat: 51.512, lng: -0.1225 } },
        { title: 'Oxford Street', location: { lat: 51.5145, lng: -0.1444 } },
        { title: 'Piccadilly Circus', location: { lat: 51.5098, lng: -0.1357 } }
      ]
    },
    {
      day: 4,
      date: '04/10',
      activities: [
        { title: 'Notting Hill - Portobello Market', location: { lat: 51.5175, lng: -0.2054 } },
        { title: 'The Pelican Restaurant', location: { lat: 51.5178, lng: -0.2043 } },
        { title: 'Little Venice', location: { lat: 51.5237, lng: -0.183 } },
        { title: 'Harrods', location: { lat: 51.4995, lng: -0.163 } },
        { title: 'Oxford Street e Piccadilly Circus (extra)' }
      ]
    },
    {
      day: 5,
      date: '05/10',
      activities: [
        { time: '08:00', title: 'Checkout' },
        { time: '10:20', title: 'Saída pela St Pancras Station', location: { lat: 51.5317, lng: -0.126 } },
        { title: 'Fortnum & Mason (chá da rainha)', location: { lat: 51.5094, lng: -0.1374 } }
      ]
    }
  ];

  goToLocation(lat: number, lng: number) {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  }
}
