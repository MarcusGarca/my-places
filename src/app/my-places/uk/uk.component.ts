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
      category: "Acomodação",
      description: "Hospedagem no bairro de Bloomsbury.",
      places: [
        { title: "Radisson Bloomsbury", address: "Radisson Blu Edwardian Bloomsbury Street, London" }
      ]
    },
    {
      category: "Museus",
      description: "Museus gratuitos e imperdíveis em Londres.",
      places: [
        { title: "British Museum", address: "The British Museum, Great Russell St, London" }
      ]
    },
    {
      category: "Parques",
      description: "Parques clássicos e icônicos em Londres.",
      places: [
        { title: "Hyde Park", address: "Hyde Park, London (Próximo ao Kensington Palace e ao Museu)" }
      ]
    },
    {
      category: "Pontes",
      description: "Pontes famosas, algumas com aparições em filmes.",
      places: [
        { title: "Millennium Bridge (Harry Potter)", address: "Thames Embankment, London EC4V 3AD (Liga a Tate Modern à St Paul's Cathedral)" },
        { title: "Tower Bridge", address: "Tower Bridge, London" },
        { title: "London Bridge", address: "London Bridge, London" }
      ]
    },
    {
      category: "Mercados e Compras Icônicas",
      description: "Mercados clássicos e ruas famosas para compras em diferentes estilos.",
      places: [
        { title: "Camden Market", address: "Camden Lock Place, London NW1 8AF" },
        { title: "Portobello Market (Notting Hill)", address: "Portobello Rd, London W11 1NJ" },
        { title: "Leadenhall Market (Harry Potter - Beco Diagonal)", address: "Gracechurch St, London EC3V 1LT" },
        { title: "Spitalfields Market", address: "Brushfield St, London E1 6AA" },
        { title: "Borough Market", address: "Borough Market, London" },
        { title: "Mercato Mayfair", address: "North Audley Street, London W1K 6ZA" },
        { title: "Check it Vintage", address: "1 Shorts Gardens, London WC2H 9AT (Perto de Covent Garden)" },
        { title: "Oxford Street", address: "Oxford Street, London W1C" },
        { title: "Marylebone High Street", address: "Marylebone High St, London W1U" },
        { title: "Shepherd Market (Mayfair)", address: "Mayfair, London W1J" }
      ]
    },
    {
      category: "Camden Town: Mercados e Cultura Alternativa",
      description: "O coração cultural e musical de Londres, famoso pela comida de rua e estilo punk.",
      places: [
        { title: "Smooketeers London (Comida de Rua)", address: "114 Bayham St, London NW1 0ET" },
        { title: "JR Camden (Souvenirs mais em conta)", address: "140-142 Camden High St, London NW1 0LU" },
        { title: "The Flour Station (Padaria - no Market)", address: "North Yard, Camden Market, London NW1 8AH" },
        { title: "The Cheese Bar (Bar de Queijos - no Market)", address: "Unit 87-88, Camden Stables Market, London NW1 8AH" },
        { title: "The Worlds End Pub (Pub Icônico)", address: "174 Camden High St, London NW1 0NE" },
        { title: "Brewdog Pub (Cervejas Artesanais)", address: "113 Bayham St, London NW1 0DT" },
        { title: "The Hawleys pub (Amy Winehouse)", address: "2 Castlehaven Rd, London NW1 8QU" },
        { title: "Camden Assembly (Pub com Shows)", address: "49 Chalk Farm Rd, London NW1 8AU" }
      ]
    },
    {
      category: "Bairros e Ruas para Exploração",
      description: "Áreas para passear, admirar a arquitetura e encontrar restaurantes e pubs locais.",
      places: [
        { title: "Notting Hill (Bairro)", address: "Notting Hill Gate, London W11" },
        { title: "Pavilion Road (Chelsea)", address: "Pavilion Road, London SW1X" },
        { title: "Saint Martin's Courtyard", address: "Saint Martin's Courtyard, London WC2E" }
      ]
    },
    {
      category: "Pubs Clássicos, Históricos e de Música",
      description: "Pubs famosos pela história, arquitetura ou cena musical.",
      places: [
        { title: "The Lamb & Flag (Clássico)", address: "33 Rose St, Covent Garden, London WC2E 9EB" },
        { title: "The French House (Histórico - Soho)", address: "49 Dean St, London W1D 5BG" },
        { title: "The Churchill Arms (Famoso pelas flores)", address: "119 Kensington Church St, London W8 7LN" },
        { title: "The Spice of Life Pub (Música ao Vivo - Soho)", address: "6 Moor St, London W1D 5NA" },
        { title: "The Holly Bush (Histórico - Hampstead)", address: "22 Holly Mount, London NW3 6SG" },
        { title: "The Dove (Hammersmith)", address: "19 Upper Mall, London W6 9TA" }
      ]
    },
    {
      category: "Pontos Turísticos, Vistas e Experiências",
      description: "Parques, museus, pontes e locais com vistas panorâmicas da cidade.",
      places: [
        { title: "The Tide (Passeio na Península de Greenwich)", address: "Peninsula Square, London SE10 0FL" },
        { title: "Rooftop no Trafalgar St James (Vista)", address: "The Trafalgar St. James Hotel, 2 Spring Gardens, London SW1A 2TS" },
        { title: "Tower Millennium Pier (Passeios de barco)", address: "Lower Thames St, London EC3N 4DT" }
      ]
    },
    {
      category: "Doces e Gastronomia",
      places: [
        { title: "Pâtisserie Valerie (Chá da Tarde/Doces)", address: "Múltiplas localizações em Londres (Oxford St, Soho, etc.)" },
        { title: "The Pelicano (Restaurante/Bar)", address: "45 All Saints Rd, Notting Hill, London W11 1HE" }
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
