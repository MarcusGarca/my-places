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
      category: "Acomodação",
      description: "Hospedagem indicada na região central.",
      places: [
        { title: "Estúdio Saint Germain des Prés", address: "31 Rue du Four, 75006 Paris" }
      ]
    },
    {
      category: "Saint-Germain-des-Prés e Quartier Latin",
      description: "Cafés clássicos, ruas históricas, mercados e vida cultural na Rive Gauche (6º e 5º arr.).",
      places: [
        { title: "Café Les Deux Magots (Clássico)", address: "6 Place Saint-Germain des Prés, 75006 Paris" },
        { title: "Café Louise", address: "155 Bd Saint-Germain, 75006 Paris" },
        { title: "Rue de Buci (Rua de Passeio)", address: "Rue de Buci, 75006 Paris" },
        { title: "Cour du Commerce Saint-André", address: "59 Rue Saint-André des Arts, 75006 Paris" },
        { title: "Le Procope (Restaurante Histórico)", address: "13 Rue de l'Ancienne Comédie, 75006 Paris" },
        { title: "Brasserie des Prés (Emily in Paris)", address: "5 Rue de l'Ancienne Comédie, 75006 Paris" },
        { title: "Marché Alimentaire Saint Germain", address: "4 Rue Lobineau, 75006 Paris" },
        { title: "Fontaine Saint-Michel", address: "Place Saint-Michel, 75005 Paris" },
        { title: "Ladurée Bonaparte (Patisserie)", address: "21 Rue Bonaparte, 75006 Paris" },
        { title: "Maison Thevenin (Patisserie)", address: "Maison Thevenin, Paris (Saint-Germain)" },
        { title: "Boulangerie La Parisienne", address: "48 Rue Madame, 75006 Paris" },
        { title: "Maison Isabelle (Croissant famoso)", address: "47ter Boulevard Saint-Germain, 75005 Paris" },
        { title: "Creperia Cantina", address: "Próxima ao Jardim de Luxemburgo (Quartier Latin)" },
        { title: "Chez Pradel (Menu Francês)", address: "Localização no 5º/6º arr., Paris" }
      ]
    },
    {
      category: "Le Marais: Compras, Arte e Gastronomia",
      description: "Bairro vibrante, conhecido por suas lojas conceito, vintage, padarias e comida judaica.",
      places: [
        { title: "Loja Merci (Conceito)", address: "111 Bd Beaumarchais, 75003 Paris" },
        { title: "Check it Vintage", address: "67 Rue du Temple, 75003 Paris" },
        { title: "Rue des Rosiers (Comida Judaica)", address: "Rue des Rosiers, 75004 Paris" },
        { title: "Au Petit Versailles du Marais (Padaria)", address: "27 Rue François Miron, 75004 Paris" },
        { title: "BHV Marais (Loja de Departamento)", address: "52 Rue de Rivoli, 75004 Paris" },
        { title: "Pylones (Presentes)", address: "57 Rue Saint-Louis en l’Île, 75004 Paris" },
        { title: "Baron Rouge (Bar de Vinhos)", address: "1 Rue Théophile Roussel, 75012 Paris" }
      ]
    },
    {
      category: "Restaurantes e Bares com Vistas Icônicas",
      description: "Locais de alta gastronomia e rooftops com vista para a Torre Eiffel.",
      places: [
        { title: "Place du Trocadéro (Vista Torre Eiffel)", address: "Place du Trocadéro, 75116 Paris" },
        { title: "Girafe Restaurant (Vista Torre Eiffel)", address: "1 Place du Trocadéro et du 11 Novembre, 75016 Paris" },
        { title: "Café de l'Homme (Vista Torre Eiffel)", address: "17 Place du Trocadéro et du 11 Novembre, 75016 Paris" },
        { title: "Les Ombres (Vista Torre Eiffel)", address: "27 Quai Jacques Chirac, 75007 Paris" },
        { title: "Francette (Restaurante no Barco)", address: "Port de Grenelle, 75015 Paris" },
        { title: "Bonnie (Rooftop/Bar)", address: "10 Rue Agrippa d'Aubigné, 75004 Paris (Hotel SO/Paris)" },
        { title: "Le Tout Paris (Hotel Cheval Blanc)", address: "8 Quai du Louvre, 75001 Paris" },
        { title: "Perruche (Rooftop no Printemps)", address: "2 Rue du Havre, 75009 Paris" }
      ]
    },
    {
      category: "Compras e Experiências em Grandes Lojas",
      description: "Lojas de departamento e experiências de luxo no centro de Paris.",
      places: [
        { title: "Galeries Lafayette Haussmann", address: "40 Bd Haussmann, 75009 Paris" },
        { title: "Printemps Haussmann (Veuve Clicquot no 1º andar)", address: "64 Bd Haussmann, 75009 Paris" },
        { title: "Isabel Marant – Rue Jacob", address: "1 Rue Jacob, 75006 Paris" },
        { title: "Adidas Champs-Élysées (Customiza tênis)", address: "22 Avenue des Champs-Élysées, 75008 Paris" }
      ]
    },
    {
      category: "Gastronomia Clássica e Especialidades",
      description: "Opções de restaurantes e docerias de alta qualidade.",
      places: [
        { title: "Relais de l’Entrecôte (Clássico)", address: "20 Rue Saint-Benoît, 75006 Paris" },
        { title: "Homer Lobster (Lobster Roll)", address: "15 Rue de l’Ancienne Comédie, 75006 Paris" },
        { title: "Restaurante L’Avenue", address: "41 Avenue Montaigne, 75008 Paris" },
        { title: "Corail Restaurant (perto da Torre Eiffel)", address: "Corail, Paris" },
        { title: "Café Lapérouse", address: "51 Quai des Grands Augustins, 75006 Paris" },
        { title: "CoCo (Restaurante/Lounge)", address: "Place Jacques Rouché, 75009 Paris" },
        { title: "La Coupole (Brasserie Clássica)", address: "102 Bd du Montparnasse, 75014 Paris" }
      ]
    },
    {
      category: "Bares e Experiências",
      description: "Bares modernos e spots noturnos.",
      places: [
        { title: "Bambino (Listing Bar)", address: "Bambino, Paris" },
        { title: "Bar de La Croix Rouge", address: "171 Boulevard Saint-Germain, 75006 Paris" },
        { title: "Café Carette (Montmartre)", address: "4 Place du Tertre, 75018 Paris" }
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
