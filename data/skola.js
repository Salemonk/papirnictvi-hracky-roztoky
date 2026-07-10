/*
  SEZÓNNÍ SEKCE webu (obsah + nastavení). Univerzální sekce, jejíž náplň se mění
  podle sezóny (teď „školní balíčky", jindy třeba Vánoce). Nejsnáz se upravuje
  v editoru (editor.html, sekce „Sezóna"). Názvy skola/SKOLA jsou jen historické.

  zobrazit    — true = sekce i její tlačítko v menu jsou vidět, false = skryté.
  zobrazitOd  — nepovinné „RRRR-MM-DD"; když vyplníte obě data, sekce se ukáže
  zobrazitDo    jen v tom období. Jinak se řídí jen přepínačem „zobrazit".
  nazev       — název sekce; použije se jako nadpis i jako text tlačítka v menu.
  polozky     — karty obsahu (jako novinky): stitek, nadpis, text, obrazek.
                Každá karta může mít i vlastní tlačítka: telefonTlacitko /
                emailTlacitko (+ emailPredmet / emailText pro předvyplněný e-mail).

  Po úpravě soubor uložte. Na webu se změna projeví po načtení stránky.
*/

window.SKOLA = {
  zobrazit: true,
  zobrazitOd: "",
  zobrazitDo: "",

  nazev: "Škola",

  polozky: [
    {
      stitek: "služba pro rodiče",
      nadpis: "Školní balíčky",
      text: "Nechte přípravu pomůcek na nás. Pošlete nám seznam ze školy a my vám balíček nachystáme k vyzvednutí.\nUšetříte si shánění i frontu na začátku září. Orientační cena balíčku pro prvňáčka: 1500-2000 Kč.",
      telefonTlacitko: true,
      emailTlacitko: true,
      emailPredmet: "Školní balíček",
      emailText: "Dobrý den,\n\nmám zájem o sestavení školního balíčku pro chlapce/dívku.\n\nSeznam pomůcek prosím přiložte jedním z těchto způsobů:\n- vyfoťte seznam (čitelně, v dobrém osvětlení)\n- přiložte jako soubor (.txt, Word nebo PDF)\n\nJméno:\nTelefon:\nKdy si balíček vyzvednu (orientačně):\n\nPoznámky (nepovinné):\nNapř. oblíbené barvy a motivy, zda se jedná o leváka atp.\n\nDěkuji."
    },
    {
      stitek: "poradíme",
      nadpis: "Jak vybrat obaly na učebnice",
      text: "Nevíte si s obaly na učebnice rady?\nPřineste je k nám, nebo si doma změřte jejich výšku, a vybereme je s vámi přesně na míru."
    }
  ]
};
