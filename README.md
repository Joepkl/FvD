# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details>
  <summary>Wie ben ik</summary>

  ### Auteur:
  Joep Klaassen

  #### Je startniveau:
  Rode piste

  #### Je focus:
  Extra aandacht voor de surface laag
 
</details>





## Je website

<details>
  <summary>Wat ga ik doen tijdens dit vak</summary>

  ### Je opdracht:
  https://www.spacex.com/

  #### Screenshot(s) van de eerste pagina (small screen): 
  SpaceX - Home
  
  <img width="200" alt="mobiel1" src="https://user-images.githubusercontent.com/74242736/205944736-394731b3-5cf9-477b-9383-a00f12bdf773.png">

  #### Screenshot(s) van de tweede pagina (small screen):
  SpaceX - Hakuto-R 
  
  <img width="200" alt="mobiel3 cancelled" src="https://user-images.githubusercontent.com/74242736/205944884-56034a61-3db3-4634-b861-8507a91739b4.png">
  
  #### Screenshot(s) van de derde pagina (small screen):
  SpaceX - Falcon 9 
 
  <img width="200" alt="mobiel3 cancelled" src="https://user-images.githubusercontent.com/74242736/205945276-588660d4-f718-42aa-8df1-fb9beb8dcdc9.png">   
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
  * Website werkt prima met screenreader, alleen hamburger menu wordt niet goed geselecteerd en is niet duidelijk voor de gebruiker.
  
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  
  * Met een tabindex is het mogelijk om dit wel te selecteren met een screenreader.

  #### Muis en Toetsenbord 
  Hier korte omschrijving
  
  * Scrollt niet mee met tab elementen, waardoor je niet ziet wat je geselecteerd hebt buiten beeld.
  * Selecteert het menu wel via tab, alleen is het niet mogelijk het hamburger menu uit te klappen.

 
  Hier een omschrijving van hoe het opgelost kan worden
  
  * Tabindex toevoegen aan HTML elementen die niet geselecteerd kunnen worden.


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
  * Omdat het een vrij minimalistische website (als in hoeveelheid content in beeld) is ging het vrij goed met de aandacht bij de content houden. 
  * Navigatie op de website ging ook prima. Het is voornamelijk naar beneden scrollen om de content te bekijken.

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  
  * De website reageert niet op light en dark mode ingesteld door de gebruiker. 



</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### De gehele pagina:
<img width="200" alt="Schermafbeelding 2022-12-06 om 16 33 24" src="https://user-images.githubusercontent.com/74242736/205954936-c5701ca9-df8a-456b-815e-07c88fed022f.png">



  ### dynamisch deel (menu): 
<img width="200" alt="Schermafbeelding 2022-12-06 om 16 27 16" src="https://user-images.githubusercontent.com/74242736/205953420-f9b22e85-6737-47ee-9482-7902f6a6c3f3.png">


</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  - Hamburger menu
  - HTML checken
  - Nummers optellen animatie
  - Afbeeldingen postioneren
  - Carousel
    
  | Joep                       | Sten               | Michelle                    | student 4        |
  | ---                      | ---                | ---                           | ---              |
  | Nummers optellen animatie| HTML checken        | Afbeeldingen positioneren    | en dan ik dat    |
  |                           | Carousel           | Hamburger menu               | dit wil ik zeker |
  |                           |                   |                                |             |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Sten heeft een idee hoe het carousel moet en gaat er mee door.
  - Michelle alle HTML gecheckt, en ::before gebruiken.
  - Mag geen classes en id gebruiken
  - h1 boven aan website, h2 daarna enzovoort. (met css positie omwissenel flexbox: order;)

</details>





## Voortgang 2 (week 3)

<details open>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Michelle      | Sten          | Joep    | student 4        |
  | ---            | ---                | ---          | ---              |
  | Border radius werkt niet  | Uitklap hamburger menu           | Interval op scroll    | en dan ik dat    |
  | | |  | dit wil ik zeker |
  |        |          |          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - JS .closestSibling voor uitklap ul > li in menu.
  - Border radius stond te klein ingesteld.
  - Intersection observer API voor scrollbased animaties.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
 
  - Screenreader gaat duidelijk door de pagina's heen. 
  - Hamburger menu openen met enter/option lukt niet.
  - Falcon 9 pagina moeten de headings bij launches, landings en reflights aangepast (eerst titel voorlezen en dan aantal).

  
  


  #### Muis en Toetsenbord 
  
  - Navigeren door home pagina en hakuto-r pagina gaat duidelijk.
  - Verder wordt het menu nu geopend wanneer je door de elementen heen gaat. (Doormiddel van :focus-within)
  
 


  #### Motoriek (shocks, elastiekjes)

  - Het is mogelijk om de website te gebruiken.


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  
  - Voor kleurenblinde gebruikers is er genoeg contrast, omdat er voornamelijk zwart en wit wordt gebruikt in de website.
  - Dark en light modus a.d.h.v. gebruikers voorkeuren moet nog worden gemaakt. 
  - Contrast modus zou leuk zijn, maar is waarschijnlijk geen tijd voor.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  
  | Joep     | Michelle          | Sten    | 
  | ---            | ---                | ---          | 
  | Img veranderen op scroll | en dit             | en ik dit    |
  | Carousel img moet gedragen als backgroundIMG | dit als er tijd is | nog een punt | 
  |    Overscroll Falcon 9 op mobiel, Nav uitlijnen rechts, after breedte op mobiel      | ...                | ...          | 


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Index pagina H1 als eerst, daarna H2. (niks overslaan)
  - In de nav active state als je een pagina bezoekt
  - Headings 186 enz weghalen (geen belangrijke info) (titels alleen voor belangrijke content)


</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  
  <img width="999" alt="Schermafbeelding 2023-01-22 om 19 08 56" src="https://user-images.githubusercontent.com/74242736/213932453-f2e1b5d2-b0de-4721-b6ca-172e2a90c3c1.png">
  
  <img width="999" alt="Schermafbeelding 2023-01-22 om 19 07 40" src="https://user-images.githubusercontent.com/74242736/213932390-9e090e7c-d90d-4f69-acf2-4335adf67137.png">
  
  <img width="999" alt="Schermafbeelding 2023-01-22 om 19 09 31" src="https://user-images.githubusercontent.com/74242736/213932491-0f3a0e9f-2d98-4ac0-ae43-9b7a01a089f0.png">



  ### Dit ging goed/Heb ik geleerd: 
  - Volledig responsive
  - Scroll based animaties
  - JS dom manipulation
  - Img carousel
  - Accesibility

    <img width="1439" alt="Schermafbeelding 2023-01-22 om 19 03 05" src="https://user-images.githubusercontent.com/74242736/213932202-ad4c0275-5153-4dd0-84e6-91e8ff9bc222.png">
  
  <img width="400" alt="Schermafbeelding 2023-01-22 om 19 04 40" src="https://user-images.githubusercontent.com/74242736/213932246-529de412-abb4-42c2-b7db-22a94dac5afe.png">

<img width="400" alt="Schermafbeelding 2023-01-22 om 19 05 24" src="https://user-images.githubusercontent.com/74242736/213932277-9dc30f23-b2c3-4673-b6ca-296630612601.png">


  ### Dit was lastig/Is niet gelukt:
  In dit project heb ik helaas geen tijd gehad voor de volgende dingen:

  - Intersection Observer toepassen
  - Img carousel op (touch) swipen laten werken



