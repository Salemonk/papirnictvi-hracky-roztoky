/*
  ŠKOLA — sezónní sekce webu (obsah + nastavení).

  Nejsnáz se upravuje v editoru (editor.html, sekce „Škola") — otevřete ho
  dvojklikem. Můžete ale upravovat i ručně tady.

  zobrazit    — true = sekce i její tlačítko v menu jsou vidět, false = skryté.
  zobrazitOd  — nepovinné „RRRR-MM-DD"; když vyplníte obě data, sekce se ukáže
  zobrazitDo    jen v tom období. Jinak se řídí jen přepínačem „zobrazit".
  nazev       — název sekce; použije se jako nadpis i jako text tlačítka v menu.
  telefonTlacitko / emailTlacitko — zapnutí tlačítek „Zavolat" / „Napsat e-mail".
  emailPredmet / emailText — předmět a text předvyplněného e-mailu (použijí se,
                             jen když je e-mailové tlačítko zapnuté).
  polozky     — karty obsahu (jako novinky): stitek (malý štítek nahoře, nepovinné),
                nadpis, text, obrazek (cesta k obrázku, nepovinné), popisek, sirka, vyska.

  Po úpravě soubor uložte. Na webu se změna projeví po načtení stránky.
*/

window.SKOLA = {
  // --- Sezónní zobrazení ---
  zobrazit: true,
  zobrazitOd: '',
  zobrazitDo: '',

  // --- Název sekce (nadpis + tlačítko v menu) ---
  nazev: 'Školní balíčky',

  // --- Kontaktní tlačítka pod obsahem ---
  telefonTlacitko: true,
  emailTlacitko: true,
  emailPredmet: 'Školní balíček',
  emailText: 'Dobrý den,\n\nmám zájem o sestavení školního balíčku pro chlapce/dívku.\n\nSeznam pomůcek prosím přiložte jedním z těchto způsobů:\n- vyfoťte seznam (čitelně, v dobrém osvětlení)\n- přiložte jako soubor (.txt, Word nebo PDF)\n\nJméno:\nTelefon:\nKdy si balíček vyzvednu (orientačně):\n\nPoznámky (nepovinné):\nNapř. oblíbené barvy a motivy, zda se jedná o leváka atp.\n\nDěkuji.',

  // --- Obsah = karty (jako novinky) ---
  polozky: [
    {
      stitek: 'služba pro rodiče',
      nadpis: 'Školní balíčky',
      text: 'Nechte přípravu pomůcek na nás. Pošlete nám seznam ze školy a my vám balíček nachystáme k vyzvednutí. Ušetříte si shánění i frontu na začátku září. Orientační cena balíčku pro prvňáčka: [doplňte cenu] Kč.'
    },
    {
      stitek: 'poradíme',
      nadpis: 'Jak vybrat obaly na učebnice',
      text: 'Nevíte si s obaly na učebnice rady? Přineste je k nám, nebo si doma změřte jejich výšku, a vybereme je s vámi přesně na míru.'
    }
  ]
};
