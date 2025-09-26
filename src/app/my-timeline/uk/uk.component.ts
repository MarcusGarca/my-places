import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DayPlan } from '../../../models/timeline-model';
import { MatIconModule } from '@angular/material/icon';
import { MapsService } from '../../../services/maps.service';


@Component({
  selector: 'app-uk',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule],
  templateUrl: './uk.component.html',
  styleUrl: './uk.component.css'
})


export class UkComponent {
  constructor(public mapsService: MapsService) { }

  londonTimeline: DayPlan[] = [
    {
      day: "Dia 1 - 01/10",
      itens: [
        {
          item: "Chegada em Londres",
          time: "??",
          contact: "https://wa.me/558586441403?text=Oi,%20Bola%20chegamos%20em%20Londres!",
          address: "",
          reservation: ""
        },
        {
          item: "Hotel Radisson Bloomsbury - check-in",
          time: "??",
          contact: "",
          address: "9-13 Bloomsbury St, London WC1B 3QD, Reino Unido",
          reservation: ""
        },
        {
          item: "Opção de jantar - Dalloway Terrace",
          time: "19:30",
          contact: "",
          address: "16-22 Great Russell St, London WC1B 3NN, Reino Unido",
          reservation: ""
        },
        {
          item: "Opção de jantar - Bloomsbury Street Kitchen",
          time: "19:30",
          contact: "",
          address: "9-13 Bloomsbury St, London WC1B 3QD, Reino Unido",
          reservation: "assets/images/uk/reservas/01_10_bloombury_street_kitchen.png"
        }
      ]
    },
    {
      day: "Dia 2 - 02/10",
      itens: [
        {
          item: "Big Ben - ícone de Londres",
          time: "09:00",
          contact: "",
          address: "London SW1A 0AA, Reino Unido",
          reservation: ""
        },
        {
          item: "Palácio de Westminster - sede do Parlamento",
          time: "09:15",
          contact: "",
          address: "London SW1A 0AA, Reino Unido",
          reservation: ""
        },
        {
          item: "Abadia de Westminster - igreja histórica",
          time: "09:45",
          contact: "",
          address: "Dean's Yard, London SW1P 3PA, Reino Unido",
          reservation: ""
        },
        {
          item: "Trafalgar Square - praça famosa com a Coluna de Nelson",
          time: "11:00",
          contact: "",
          address: "Trafalgar Sq, London WC2N 5DS, Reino Unido",
          reservation: ""
        },
        {
          item: "Palácio de Buckingham - residência oficial da monarquia",
          time: "12:00",
          contact: "",
          address: "London SW1A 1AA, Reino Unido",
          reservation: ""
        },
        {
          item: "Almoço - Fish Borough Market (reserva confirmada, pedir Haddock)",
          time: "14:30",
          contact: "",
          address: "Borough Market, Cathedral St, London SE1 9AL, Reino Unido",
          reservation: "assets/images/uk/reservas/02_10_fish_borouch_market.png"
        },
        {
          item: "Catedral de São Paulo - marco arquitetônico",
          time: "16:00",
          contact: "",
          address: "St. Paul's Churchyard, London EC4M 8AD, Reino Unido",
          reservation: ""
        },
        {
          item: "London Eye - roda gigante com vista panorâmica",
          time: "17:00",
          contact: "",
          address: "Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, Reino Unido",
          reservation: ""
        },
        {
          item: "Tower Bridge - ponte icônica",
          time: "18:00",
          contact: "",
          address: "Tower Bridge Rd, London SE1 2UP, Reino Unido",
          reservation: ""
        },
        {
          item: "Torre de Londres - fortaleza histórica",
          time: "18:30",
          contact: "",
          address: "London EC3N 4AB, Reino Unido",
          reservation: ""
        },
        {
          item: "Ponte de Londres - a famosa London Bridge",
          time: "19:00",
          contact: "",
          address: "London EC4R 3TN, Reino Unido",
          reservation: ""
        },
        {
          item: "Hotel Radisson Bloomsbury - retorno",
          time: "20:00",
          contact: "",
          address: "9-13 Bloomsbury St, London WC1B 3QD, Reino Unido",
          reservation: ""
        },
        {
          item: "The Lamb & Flag - pub histórico em Covent Garden",
          time: "21:00",
          contact: "",
          address: "Covent Garden, 33 Rose St, London WC2E 9EB, Reino Unido",
          reservation: "assets/images/uk/reservas/02_10_the_lamb_e_flag.png"
        },
        {
          item: "Hotel Radisson Bloomsbury - descanso",
          time: "22:30",
          contact: "",
          address: "9-13 Bloomsbury St, London WC1B 3QD, Reino Unido",
          reservation: ""
        }
      ]
    },
    {
      day: "Dia 3 - 03/10",
      itens: [
        {
          item: "Andar pelo Bairro - caminhada até o Charles Dickens Museum",
          time: "09:00",
          contact: "",
          address: "48 Doughty St, London WC1N 2LX, Reino Unido",
          reservation: ""
        },
        {
          item: "Russell Square Garden - grande praça ajardinada em Bloomsbury, ótima para relaxar e apreciar a arquitetura georgiana",
          time: "09:45",
          contact: "",
          address: "Bloomsbury, London WC1B 5BE, Reino Unido",
          reservation: ""
        },
        {
          item: "British Museum - um dos maiores e mais completos museus do mundo (baixar o app antes)",
          time: "10:30",
          contact: "",
          address: "Great Russell St, London WC1B 3DG, Reino Unido",
          reservation: ""
        },
        {
          item: "Camden Town - bairro alternativo com mercados, lojas e street food",
          time: "12:00",
          contact: "",
          address: "Camden High St, London NW1 8NH, Reino Unido",
          reservation: ""
        },
        {
          item: "Covent Garden - passeio pelo Apple Market e Covent Market",
          time: "14:00",
          contact: "",
          address: "Covent Garden, London WC2E 8RD, Reino Unido",
          reservation: ""
        },
        {
          item: "Oxford Street - rua de compras mais famosa de Londres",
          time: "16:00",
          contact: "",
          address: "Oxford St, London W1D 2HS, Reino Unido",
          reservation: ""
        },
        {
          item: "Piccadilly Circus - praça vibrante com letreiros e pubs",
          time: "19:00",
          contact: "",
          address: "Piccadilly Circus, London W1D 7ET, Reino Unido",
          reservation: ""
        }
      ]
    },
    {
      day: "Dia 4 - 04/10",
      itens: [
        {
          item: "Andar pelo Bairro - caminhada inicial",
          time: "09:00",
          contact: "",
          address: "9-13 Bloomsbury St, London WC1B 3QD, Reino Unido",
          reservation: ""
        },
        {
          item: "Abbey Road - faixa de pedestres dos Beatles",
          time: "09:30",
          contact: "",
          address: "3 Abbey Rd, London NW8 9AY, Reino Unido",
          reservation: ""
        },
        {
          item: "Notting Hill - explorar Portobello Market e arredores",
          time: "10:00",
          contact: "",
          address: "Portobello Rd, London W11 1AN, Reino Unido",
          reservation: ""
        },
        {
          item: "Restaurante The Pelican - almoço em Notting Hill",
          time: "12:30",
          contact: "",
          address: "45 All Saints Rd, London W11 1HE, Reino Unido",
          reservation: ""
        },
        {
          item: "Little Venice - passeio pelos canais até Camden",
          time: "14:00",
          contact: "",
          address: "Blomfield Rd, London W9 2PF, Reino Unido",
          reservation: ""
        },
        {
          item: "Harrods - loja de departamento icônica (opcional)",
          time: "16:30",
          contact: "",
          address: "87-135 Brompton Rd, London SW1X 7XL, Reino Unido",
          reservation: ""
        },
        {
          item: "Hotel Radisson Bloomsbury - retorno",
          time: "19:00",
          contact: "",
          address: "9-13 Bloomsbury St, London WC1B 3QD, Reino Unido",
          reservation: ""
        }
      ]
    },
    {
      day: "Dia 5 - 05/10",
      itens: [
        {
          item: "Checkout do Hotel Radisson Bloomsbury",
          time: "08:00",
          contact: "",
          address: "9-13 Bloomsbury St, London WC1B 3QD, Reino Unido",
          reservation: ""
        },
        {
          item: "St Pancras Station - embarque para viagem",
          time: "10:20",
          contact: "",
          address: "Euston Rd, London N1C 4QP, Reino Unido",
          reservation: ""
        },
        {
          item: "Fortnum & Mason - loja de chás da rainha (dentro da estação)",
          time: "10:00",
          contact: "",
          address: "St Pancras International, Euston Rd, London N1C 4QP, Reino Unido",
          reservation: ""
        }
      ]
    }
  ];

  otherLodonTips: any = [
    {
      category: 'Pontos turisticos',
      places: [
        { title: 'Mercado Mayfair', address: " St. Mark's Church, N Audley St, London W1K 6ZA, Reino Unido" },
        { title: 'Pavilion Road', address: "Londres SW1X 0BP, Inglaterra" },
        { title: 'Museu de História Natural de Londres', address: "Cromwell Rd, South Kensington, London SW7 5BD, Reino Unido" },
        { title: 'Palácio de Kensington', address: "Kensington Gardens, London W8 4PX, Reino Unido" },
        { title: 'Millennium Bridge', address: "Thames Embankment, London EC4V 3QH, Reino Unido" },
        { title: 'Mercado de Leadenhall', address: "Gracechurch St, London EC3V 1LT, Reino Unido" },
        { title: 'Spitalfields Market', address: "65 Brushfield St, London E1 6AA, Reino Unido" },
        { title: "St Martin's Courtyard", address: "Slingsby Pl, London WC2H 9EF, Reino Unido" },
        { title: 'The Tide', address: "Pier Walk, London SE10 0ES, Reino Unido" },
        { title: 'Pastisserie Valerie', address: "28 Greek St, London W1D 5DF, Reino Unido" },
        { title: 'The Rooftop Bar', address: "7th Floor, 2 Spring Gardens, London SW1A 2TS, Reino Unido" },
        { title: 'Tower Millennium Pier', address: "Lower Thames St, London EC3N 4DT, Reino Unido" },
        { title: 'Marylebone High Street', address: "Marylebone High St, London, Reino Unido" },
        { title: 'Check It Vintage', address: "1 Short's Gardens, London WC2H 9AT, Reino Unido" },
        { title: '', address: "" },
      ]
    },
    {
      category: 'Camdem town',
      places: [
        {
          title: "Camden Market - Famoso pela comida de rua e lojas alternativas",
          "address": "Camden Lock Pl, London NW1 8AF, Reino Unido"
        },
        {
          title: "Smooketeers London - Conhecido pelos hambúrgueres defumados",
          "address": "114 Bayham St, London NW1 0ET, Reino Unido"
        },
        {
          title: "JR Camden - A loja de Souvenirs mais em conta",
          "address": "140-142 Camden High St, London NW1 0LU, Reino Unido"
        },
        {
          title: "The Flour Station - Padaria conhecida por pães artesanais de fermentação natural",
          "address": "Unit 91, North Yard, Camden Market, Chalk Farm Rd, London NW1 8AH, Reino Unido"
        },
        {
          title: "The Cheese Bar - Bar focado em queijos artesanais",
          "address": "Unit 87-88, Camden Stables Market, Chalk Farm Rd, London NW1 8AH, Reino Unido"
        },
        {
          title: "The Worlds End Pub - Pub icônico de Camden",
          "address": "174 Camden High St, London NW1 0NE, Reino Unido"
        },
        {
          title: "Brewdog Pub - Famoso pelas cervejas artesanais",
          "address": "113 Bayham St, London NW1 0DT, Reino Unido"
        },
        {
          title: "The Hawleys pub - Amy Winehouse frequentava",
          "address": "2 Castlehaven Rd, London NW1 8QU, Reino Unido"
        }
      ]
    }
  ]
}
