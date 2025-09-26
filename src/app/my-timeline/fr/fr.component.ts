import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DayPlan } from '../../../models/timeline-model';
import { MatIconModule } from '@angular/material/icon';
import { MapsService } from '../../../services/maps.service';

@Component({
  selector: 'app-fr',
  imports: [NgFor, NgIf, MatIconModule],
  templateUrl: './fr.component.html',
  styleUrl: './fr.component.css'
})
export class FrComponent {
  constructor(public mapsService: MapsService) { }
  parisTimeline: DayPlan[] = [
    {
      day: "Dia 1 - 05/10",
      itens: [
        {
          item: "Transfer Daniel - chegada em Paris",
          time: "14:00",
          contact: "https://wa.me/33620885022?text=Oi,%20Daniel%20chegamos%20em%20Paris!",
          address: "",
          reservation: ""
        },
        {
          item: "Carrefour - compras rápidas",
          time: "16:00",
          contact: "",
          address: "Carrefour, Paris, França",
          reservation: ""
        },
        {
          item: "Café Doux Margot - pausa para café/snack",
          time: "18:30",
          contact: "",
          address: "6, Place Saint-Germain-des-Prés, 75006 Paris, França",
          reservation: ""
        },
        {
          item: "Ou Café de Flore - opção de café alternativo",
          time: "18:30",
          contact: "",
          address: "172 Boulevard Saint-Germain, 75006 Paris, França",
          reservation: ""
        }
      ]
    },
    {
      day: "Dia 2 - 06/10",
      itens: [
        {
          item: "Viagem à Bruges - dia inteiro",
          time: "08:00",
          contact: "https://wa.me/33620885022?text=Oi,%20Daniel%20Estamos%20no%20local%20de%20encontro%20da%20viagem%20a%20Bruges!",
          address: "",
          reservation: ""
        }
      ]
    },
    {
      day: "Dia 3 - 07/10",
      itens: [
        {
          item: "Praça da Concórdia - ponto central histórico, obelisco e jardins",
          time: "09:30",
          contact: "",
          address: "Place de la Concorde, 75008 Paris, França",
          reservation: ""
        },
        {
          item: "Museu do Louvre - ícone cultural e artístico de Paris",
          time: "09:50",
          contact: "",
          address: "Rue de Rivoli, 75001 Paris, França",
          reservation: ""
        },
        {
          item: "Margens do Sena e Pontes - caminhada panorâmica e fotos",
          time: "10:20",
          contact: "",
          address: "Seine River Banks, 75001 Paris, França",
          reservation: ""
        },
        {
          item: "Ilha de La Cité e Palácio da Justiça - coração histórico de Paris",
          time: "10:50",
          contact: "",
          address: "Île de la Cité, 75001 Paris, França",
          reservation: ""
        },
        {
          item: "Catedral de Notre-Dame - visita externa e fotos",
          time: "11:10",
          contact: "",
          address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, França",
          reservation: ""
        },
        {
          item: "Hotel de Ville - prefeitura e arquitetura impressionante",
          time: "11:30",
          contact: "",
          address: "Place de l'Hôtel de Ville, 75004 Paris, França",
          reservation: ""
        },
        {
          item: "Bairro Latino - passeio pelas ruas históricas e cafés",
          time: "11:50",
          contact: "",
          address: "Quartier Latin, 75005 Paris, França",
          reservation: ""
        },
        {
          item: "Arco do Triunfo - ponto turístico emblemático, fotos",
          time: "12:20",
          contact: "",
          address: "Place Charles de Gaulle, 75008 Paris, França",
          reservation: ""
        },
        {
          item: "Avenida des Champs-Élysées - caminhada e compras rápidas",
          time: "12:40",
          contact: "",
          address: "Avenue des Champs-Élysées, 75008 Paris, França",
          reservation: ""
        },
        {
          item: "Torre Eiffel - vista icônica e fotos no Trocadéro",
          time: "13:10",
          contact: "",
          address: "Trocadéro, 75016 Paris, França",
          reservation: ""
        },
        {
          item: "Ópera Garnier - visita externa ou rápida interna",
          time: "13:40",
          contact: "",
          address: "8 Rue Scribe, 75009 Paris, França",
          reservation: ""
        },
        {
          item: "Montmartre e Sacré-Cœur - bairro artístico e vista panorâmica",
          time: "14:10",
          contact: "",
          address: "Montmartre, 75018 Paris, França",
          reservation: ""
        },
        {
          item: "Almoço no Cepe et Figue",
          time: "14:30",
          contact: "",
          address: "59, Rue Saint-André des Arts, 75006 Paris, França",
          reservation: "assets/images/fr/07_10_cepe_et_figue.jpeg"
        },
        {
          item: "Jantar no Sena - cruzeiro ou restaurante às margens do rio",
          time: "17:30",
          contact: "",
          address: "",
          reservation: ""
        },
        {
          item: "Torre Eiffel - Trocadéro para fotos",
          time: "19:00",
          contact: "",
          address: "Trocadéro, 75016 Paris, França",
          reservation: ""
        }
      ]
    },
    {
      day: "Dia 4 - 08/10",
      itens: [
        {
          item: "Louvre - visita ao museu",
          time: "09:00",
          contact: "",
          address: "Rue de Rivoli, 75001 Paris, França",
          reservation: ""
        },
        {
          item: "Catedral de Notre-Dame - caminhada pelo Pont Neuf ou Pont des Arts",
          time: "11:00",
          contact: "",
          address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, França",
          reservation: ""
        },
        {
          item: "Panthéon - marco histórico do Quartier Latin",
          time: "12:00",
          contact: "",
          address: "Place du Panthéon, 75005 Paris, França",
          reservation: ""
        },
        {
          item: "Jardin du Luxembourg - passeio no jardim e creperia",
          time: "13:00",
          contact: "",
          address: "Jardin du Luxembourg, 75006 Paris, França",
          reservation: ""
        },
        {
          item: "Saint-Germain-des-Prés - bairro histórico e cultural",
          time: "14:30",
          contact: "",
          address: "Saint-Germain-des-Prés, 75006 Paris, França",
          reservation: ""
        },
        {
          item: "Jantar no Le Procope - restaurante histórico",
          time: "19:00",
          contact: "",
          address: "13 Rue de l'Ancienne Comédie, 75006 Paris, França",
          reservation: "assets/images/fr/08_10_le_procope.jpeg"
        }
      ]
    },
    {
      day: "Dia 5 - 09/10",
      itens: [
        {
          item: "Compras na Galeries Lafayette e arredores",
          time: "09:00",
          contact: "",
          address: "40 Boulevard Haussmann, 75009 Paris, França",
          reservation: ""
        },
        {
          item: "Isabel Marant - Rue Jacob",
          time: "10:00",
          contact: "",
          address: "Rue Jacob, 75006 Paris, França",
          reservation: ""
        },
        {
          item: "Adidas Champs-Élysées - customização de tênis",
          time: "11:00",
          contact: "",
          address: "88 Av. des Champs-Élysées, 75008 Paris, França",
          reservation: ""
        },
        {
          item: "Show Sting - Accor Arena (chegada via transfer Daniel)",
          time: "18:00",
          contact: "https://wa.me/33620885022?text=Oi,%20Daniel%20Estamos%20no%20local%20de%20encontro%20para%o%20a%20show%20do%20Sting!",
          address: "8 Boulevard de Bercy, 75012 Paris, França",
          reservation: ""
        }
      ]
    },
    {
      day: "Dia 6 - 10/10",
      itens: [
        {
          item: "Checkout do hotel - Transfer Boa",
          time: "10:00",
          contact: "",
          address: "",
          reservation: ""
        },
        {
          item: "Embarque para Fortaleza",
          time: "13:20",
          contact: "",
          address: "",
          reservation: ""
        },
        {
          item: "Chegada em Fortaleza",
          time: "17:30",
          contact: "",
          address: "",
          reservation: ""
        }
      ]
    }
  ];
}
