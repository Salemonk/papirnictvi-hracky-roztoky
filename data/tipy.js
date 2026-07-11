/*
  TIPY — texty do banneru „Věděli jste?" na webu.

  Při načtení stránky se ukáže jeden náhodný tip. Návštěvník si tlačítkem
  „Další tip" může přepnout na následující. Tady se tipy dají upravovat,
  přidávat a mazat, stejně jako novinky v souboru novinky.js.

  Každý tip je jeden text ohraničený apostrofy ('...'), oddělený čárkou.
    • Přidání tipu: napište nový řádek s textem v apostrofech a čárkou na konci.
    • Smazání tipu: smažte celý řádek i s čárkou.
    • Pořadí nehraje roli (tip se vybírá náhodně).
    • Uvnitř textu klidně používejte „uvozovky" — nevadí. Pozor jen na apostrof
      (') přímo v textu; ten by tip předčasně ukončil (v češtině ho ale skoro
      nepotřebujete).

  Po úpravě soubor uložte. Na webu se změna projeví po načtení stránky.
  Když by tento soubor chyběl nebo byl prázdný, banner „Věděli jste?" se
  na webu automaticky skryje.
*/

window.TIPY = [
  'Když se řekne „osmdesátka", myslí se gramáž: jeden metr čtvereční běžného kancelářského papíru váží 80 gramů. Proto se značí 80 g/m².',
  'Formát A4 je malý zázrak. Přeložíte ho napůl a dostanete A5 se stejnými proporcemi. A největší arch celé řady, A0, měří přesně jeden metr čtvereční.',
  'Číslo na sešitu není náhodné.\nPrvní číslice je formát (4 = A4, 5 = A5, 6 = A6),\ndruhá počet listů (2 = 20, 4 = 40…),\ntřetí typ linek. Takže „524" je sešit A5, 20 listů, linkovaný.',
  'Písmena na tužce prozradí tvrdost.\nH znamená „hard", tedy tvrdá tužka se světlou stopou na rýsování.\nB je jako „black", u nás spíš měkká tužka se sytou stopou na kreslení.\nHB je zlatá střední cesta.'
];
