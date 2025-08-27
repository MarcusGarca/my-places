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
    {
      category: 'Acomodação Paris',
      places: [
        { title: 'Estúdio Saint Germain des Prés', address: "31 Rue du Four, Paris, Île-de-France 75006" }
      ]
    },
    {
      category: 'Bares e Rooftops',
      places: [
        { title: 'Bambino (listing bar)', address: "Bambino, Paris" },
        { title: 'Rooftop Perrouche (na Printemps)', address: "2 Rue du Havre, 75009 Paris, França" },
        { title: 'Bar de La Croix Rouge', address: "171 Boulevard Saint-Germain, 75006 Paris, França" }
      ]
    },
    {
      category: 'Vista Torre Eiffel',
      places: [
        { title: 'Place du Trocadéro (vista Torre Eiffel)', address: "Place du Trocadéro, 75116 Paris, França" },
        { title: 'Girafe Restaurant (vista Torre)', address: "1 Place du Trocadéro et du 11 Novembre, 75116 Paris, França" },
        { title: 'Café de l’Homme (vista Torre)', address: "17 Place du Trocadéro et du 11 Novembre, 75116 Paris, França" },
        { title: 'Les Ombres (vista Torre)', address: "27 Quai Branly, 75007 Paris, França" },
        { title: 'Restaurante Bonnie (vista Torre)', address: "10 Rue Agrippa d'Aubigné, 75004 Paris, França" },
        { title: 'Francette (restaurante em barco, vista Torre)', address: "Port de Grenelle, 75015 Paris, França" },
        { title: 'Le Tout Paris (Hotel Cheval Blanc, vista Torre)', address: "8 Quai du Louvre, 75001 Paris, França" }
      ]
    },
    {
      category: 'Restaurantes Clássicos',
      places: [
        { title: 'Corail (perto da Torre Eiffel)', address: "Corail Restaurant, Paris" },
        { title: 'Restaurante Le Procope', address: "13 Rue de l’Ancienne Comédie, 75006 Paris, França" },
        { title: 'Brasserie des Prés (Emily in Paris)', address: "Brasserie des Prés, Paris" },
        { title: 'Chez Pradel (menu francês)', address: "Chez Pradel, Paris" },
        { title: 'Relais de l’Entrecôte', address: "20 Rue Saint-Benoît, 75006 Paris, França" },
        { title: 'Café Lapérouse', address: "51 Quai des Grands Augustins, 75006 Paris, França" },
        { title: 'L’Avenue', address: "41 Avenue Montaigne, 75008 Paris, França" },
        { title: 'Rue des Rosiers (comida Judaica)', address: "Rue des Rosiers, 75004 Paris, França" },
        { title: 'Homer Lobster (lobster roll)', address: "15 Rue de l’Ancienne Comédie, 75006 Paris, França" }
      ]
    },
    {
      category: 'Saint Germain',
      places: [
        { title: 'Marché Alimentaire Saint Germain (Ter–Dom até 13:30)', address: "4 Rue Lobineau, 75006 Paris, França" },
        { title: 'Café Louise', address: "155 Boulevard Saint-Germain, 75006 Paris, França" },
        { title: 'Maison Thevenin (patisserie)', address: "Maison Thevenin, Saint-Germain, Paris" },
        { title: 'Ladurée Bonaparte (patisserie)', address: "21 Rue Bonaparte, 75006 Paris, França" },
        { title: 'Boulangerie La Parisienne', address: "48 Rue Madame, 75006 Paris, França" },
        { title: 'Café Deux Magots', address: "6 Place Saint-Germain des Prés, 75006 Paris, França" },
        { title: 'Carrefour Market', address: "Saint-Germain, Paris" },
        { title: 'Rue de Buci', address: "Rue de Buci, 75006 Paris, França" },
        { title: 'Cour du Commerce Saint-André', address: "59 Rue Saint-André des Arts, 75006 Paris, França" },
        { title: 'Passage Saint-André', address: "Rue Saint-André des Arts, 75006 Paris, França" }
      ]
    },
    {
      category: 'Quartier Latin',
      places: [
        { title: 'Fontaine Saint-Michel', address: "Place Saint-Michel, 75005 Paris, França" },
        { title: 'Maison Isabelle (croissant famoso)', address: "47ter Boulevard Saint-Germain, 75005 Paris, França" },
        { title: 'Restaurante Hegia', address: "Quartier Latin, 75005 Paris, França" }
      ]
    },
    {
      category: 'Montmartre',
      places: [
        { title: 'Café Carette', address: "4 Place du Tertre, 75018 Paris, França" }
      ]
    },
    {
      category: 'Marais',
      places: [
        { title: 'Loja Merci', address: "111 Boulevard Beaumarchais, 75003 Paris, França" },
        { title: 'Au Petit Versailles (padaria)', address: "27 Rue François Miron, 75004 Paris, França" },
        { title: 'BHV Marais (loja de departamento)', address: "52 Rue de Rivoli, 75004 Paris, França" },
        { title: 'Pylones (presentes)', address: "57 Rue Saint-Louis en l’Île, 75004 Paris, França" }
      ]
    },
    {
      category: 'Compras',
      places: [
        { title: 'Printemps (Veuve Clicquot 1º andar)', address: "64 Boulevard Haussmann, 75009 Paris, França" },
        { title: 'Galeries Lafayette (tax free no concierge)', address: "40 Boulevard Haussmann, 75009 Paris, França" },
        { title: 'Isabel Marant – Rue Jacob', address: "1 Rue Jacob, 75006 Paris, França" },
        { title: 'Adidas Champs-Élysées (customiza tênis)', address: "22 Avenue des Champs-Élysées, 75008 Paris, França" }
      ]
    }
  ];

  onOriginChange(value: string) {
    if (value === 'current-location') {
      this.mapsService.setCurrentLocation().catch(err => {
        console.error('Erro ao obter localização:', err);
        alert('Não foi possível obter sua localização.');
      });
    } else {
      this.mapsService.useCurrentLocation = false;
    }
  }



}
