/*
  NOVINKY — obsah sekce „Co je u nás nového" na webu.

  Tady se dají novinky snadno upravovat, aniž byste sahali do index.html.
  Každá novinka je jeden blok { ... } oddělený čárkou. Karty se na webu
  zobrazí v tom pořadí, v jakém jsou tady napsané (shora dolů = zleva doprava).

  Existují dva druhy karet:

  1) KARTA S TEXTEM — má nadpis, popisek a obrázek. Vyplňte:
       stitek   — malý štítek nahoře, např. "Novinka" nebo "Výhodná cena"
                  (nepovinné — když ho vynecháte, štítek se nezobrazí)
       nadpis   — název novinky (tučný text)
       text     — popis pod nadpisem
       obrazek  — cesta k obrázku, např. "images/produkty/nazev.jpg"
       popisek  — krátký popis obrázku (pro čtečky a Google; nepovinné)
       sirka,   — rozměry obrázku v pixelech (nepovinné, ale doporučené —
       vyska      zabrání „poskočení" stránky při načítání)

  2) KARTA JEN S OBRÁZKEM — nemá nadpis, jen obrázek přes celou kartu
     (jako naše grafika „DOVOLENÁ"). Stačí vyplnit obrazek, popisek,
     sirka a vyska a NEvyplňovat nadpis.

  Přidání novinky: zkopírujte jeden blok { ... }, vložte ho a upravte.
  Smazání novinky: smažte celý blok { ... } i s čárkou za ním.
  Po úpravě soubor uložte — na webu se změna projeví po načtení stránky.
*/

window.NOVINKY = [
  {
    // karta jen s obrázkem (dovolená)
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
    vyska: 524
  }
];
