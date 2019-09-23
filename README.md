# schakel-public-relations.github.io
Dit is de website voor communicatie bureau Schakel PR. Voor de minor storytelling aan de 
Hogeschool Rotterdam

De website is besckibaar op: https://schakel-public-relations.github.io/

## Afhankelijkheden (Required)
Om de website lokaal te kunnen draaien en de nodige productie build te kunnen compilen heb je de volgende tools nodig: 
- [Node.js V11.x.x](https://nodejs.org/en/)
- [GIT](https://git-scm.com/)

## Handig om te hebben
- [Visual Studio Code](https://code.visualstudio.com/)

## Specificaties
- [Gatsby JS V2.x](https://www.gatsbyjs.org/)
- [React JS V16.x](https://reactjs.org/)
- [Fontawesome](https://fontawesome.com/)
- [Bootstrap V4](https://getbootstrap.com/)
- [Typography JS](https://kyleamathews.github.io/typography.js/)

# Handleiding 
Om artikelen te publiceren en content aan te passen op de website heb je een GitHub account nodig en de verplichte afhankelijkheden moeten zijn geïnstalleerd op je computer. Volg eerst de eenmalige setup stappen en dan de publicatie stappen. 

## Setup 
- Open een terminal window, windows commandline of Powershel
- Ga naar een map waar je het project wilt opslaan
- Selecteer de map in de commmandline met `cd /opslag/locatie/website`
- Run `git clone https://github.com/schakel-public-relations/schakel-public-relations.github.io.git`
- Ga in naar de gekloonde map toe met `cd schakel-public-relations.github.io`
- Run `npm install` om alle afhankelijkheden te installeren. 
- Run `npm run develop` om te kijken of alles werkt. 
- Ga naar [http://localhost:8000](http://localhost:8000) om de site te bekijken. 
- Alles staat nu klaar om content te schrijven. 

## Commando's
Er zijn een aantal commando's die handig zijn en helpen bij het opstarten en publiceren van de website. 
-  `npm run start` of `npm run develop` start een development server op om de website lokaal te draaien en aanpassingen live te zien op het scherm. 
- `npm run build` Maakt een productie build van de website.
- `npm run deploy` Maakt een productie build van de website en zet de website gelijk online op github. 
- `npm run serve` Start een lokale server op om de website vanuit de *public* map te draaien. Dit werkt alleen na een productie of development build. 

## Content schrijven en aanpassen 

### De static folder
De site heeft een mappen structuur waar alle content in staat het belangrijk om alle bestanden in de juiste map te plaatsen, anders werkt het niet. In de *static* map staan alle afbeeldingen van de website als profielfoto's, banners, icons etc. Alles in die map wordt direct naar de root van de website geplaatst. 

### GatsbyConfig
Op de website staat ook een gatsby-config.js bestand in dit bestand staat alle site informatie, zoals informatie over de personen, site titel, slogan, beschrijving, profielfoto linkjes etc. Als je hier iets aanpast zal dat direct op de site zichtbaar zijn. 

### Een verhaal schrijven
In de map *stories* kunnen artikelen worden geplaatst over projecten alle artikelen komen te staan onder het kopje cases. Een artikel aanmaken gaat als volgt: 
- Maak in de *stories* map een een nieuw mapje aan met als naam de titel van het verhaal. 
- Maak een nieuw bestand aan genaamd **index.md**. MD staat voor MarkDown, dat is een simpele opmaak taal die wordt geconverteerd naar HTML. Je kan het zelf typen maar je kan ook een online MarkDown editor gebruiken. Zoals: [StackEdit](https://stackedit.io/)
- Het belangrijkste is dat bovenaan het MD bestand de volgende regel staat: 
```
---
title: '<TITEL>'
author: '<AUTEUR>'
date: '<DD-MM-JJJJ>'
---
```
- Eventuele afbeeldingen kunnen gewoon in de map van het artikel geplaatst worden. 
- Dan rest alleen nog het schrijven van het artikel. 

## Het publiceren van content
Het publiceren gaat net iets ingewikkelder dan dat je gewend bent van een website als facebook of instagram. Er is geen upload knop, dus doe je dit via de commandline. 