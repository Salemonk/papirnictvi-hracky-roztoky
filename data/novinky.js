/*
  NOVINKY — obsah sekce „Co je u nás nového" na webu.

  Nejsnazší je upravovat novinky v editoru (soubor editor.html) — otevřete
  ho dvojklikem. Můžete ale upravovat i ručně tady, podle návodu níže.
  Každá novinka je jeden blok { ... } oddělený čárkou. Karty se na webu
  zobrazí v tom pořadí, v jakém jsou tady napsané (shora dolů = zleva doprava).

  Existují tři druhy karet:

  1) KARTA S TEXTEM A OBRÁZKEM — vyplňte:
       stitek   — malý štítek nahoře, např. "Novinka" nebo "Výhodná cena"
                  (nepovinné — když ho vynecháte, štítek se nezobrazí)
       nadpis   — název novinky (tučný text)
       text     — popis pod nadpisem
       obrazek  — cesta k obrázku, např. "images/produkty/nazev.jpg".
                  Pro více fotek (max 3) použijte hranaté závorky:
                  obrazek: ["images/produkty/1.jpg", "images/produkty/2.jpg"]
       popisek  — krátký popis obrázku (pro čtečky a Google; nepovinné)
       sirka,   — rozměry obrázku v pixelech (nepovinné; jen u jedné fotky —
       vyska      zabrání „poskočení" stránky při načítání)
       rezervace — když napíšete «rezervace: true,», přidá se ke kartě
                  tlačítko „Rezervovat k vyzvednutí" (otevře e-mail
                  s předvyplněným názvem). Vynechejte tam, kde rezervace
                  nedává smysl (např. akce nebo oznámení).

  2) KARTA JEN S TEXTEM — má nadpis a text, ale žádný obrázek
     (hodí se na oznámení, např. „Zavřeno o svátcích"). NEvyplňujte obrazek.

  3) KARTA JEN S OBRÁZKEM — nemá nadpis, jen obrázek přes celou kartu
     (jako naše grafika „DOVOLENÁ"). Vyplňte obrazek, popisek, sirka
     a vyska a NEvyplňujte nadpis.

  Přidání novinky: zkopírujte jeden blok { ... }, vložte ho a upravte.
  Smazání novinky: smažte celý blok { ... } i s čárkou za ním.
  Po úpravě soubor uložte — na webu se změna projeví po načtení stránky.
*/

window.NOVINKY = [
  {
    obrazek: "images/dovolena.svg",
    popisek: "Dovolená od 4. do 18. července — slunečník, míč a kufr na kolečkách",
    sirka: 228,
    vyska: 222
  },
  {
    stitek: "Novinka",
    nadpis: "Pokémon TCG: Pitch Black",
    text: "Edice Pitch Black boostery i ETB boxy právě dorazily. Držíme po jednom kusu na zákazníka, ať se dostane na co nejvíce z vás.",
    obrazek: "images/produkty/pokemon-pitchblack.jpg",
    popisek: "Booster box Pokémon TCG: Mega Evolution Pitch Black",
    sirka: 732,
    vyska: 1000
  },
  {
    stitek: "Výhodná cena",
    nadpis: "Sada šesti náplní Pilot Frixion",
    text: "U nás dlouhodobě k dostání za bezkonkurenční cenu 209 Kč.",
    obrazek: "images/produkty/pilot-familypack.png",
    popisek: "Sada šesti náplní Pilot Frixion",
    sirka: 600,
    vyska: 524,
    rezervace: true
  }
];
