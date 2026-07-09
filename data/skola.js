/*
  ŠKOLA — obsah a nastavení sezónní sekce „Školní balíčky" na webu.

  Nejsnazší je upravovat sekci v editoru (soubor editor.html, sekce „Škola") —
  otevřete ho dvojklikem. Můžete ale upravovat i ručně tady.

  SEZÓNNÍ ZOBRAZENÍ:
    zobrazit    — true = sekce (i tlačítko „Škola" v menu) je na webu vidět,
                  false = celá sekce i tlačítko se skryjí (mimo sezónu).
    zobrazitOd  — nepovinné „RRRR-MM-DD". Když vyplníte OBĚ data, sekce se
    zobrazitDo    ukáže jen v tom období (a jinak se sama skryje). Necháte-li
                  prázdné, řídí se jen přepínačem „zobrazit".

  TEXTY: jednotlivé texty jsou v uvozovkách. Kroky (kroky, obalyKroky…) jsou
  seznamy — každá položka je jeden řádek oddělený čárkou. U návodu na obaly má
  každý krok dvě části: „tucne" (tučný začátek) a „text" (zbytek věty).

  Po úpravě soubor uložte. Na webu se změna projeví po načtení stránky.
  Tlačítka „Napsat e-mail" a „Zavolat" jsou napevno v kódu (mají v sobě
  předvyplněný e-mail), tady se neupravují.
*/

window.SKOLA = {
  // --- Sezónní zobrazení ---
  zobrazit: true,
  zobrazitOd: '',
  zobrazitDo: '',

  // --- Karta „Školní balíčky" ---
  stitek: 'služba pro rodiče',
  nadpis: 'Školní balíčky',
  text: 'Nechte přípravu pomůcek na nás. Pošlete nám seznam ze školy a my vám balíček nachystáme k vyzvednutí. Ušetříte si shánění i frontu na začátku září.',
  cenaPopisek: 'Orientační cena balíčku pro prvňáčka:',
  cena: '[doplňte cenu] Kč',
  poznamka: 'Aktovku a penál vám rádi pomůžeme vybrat osobně na prodejně.',
  kroky: [
    'Pošlete nám seznam pomůcek e-mailem (klidně jako fotku) nebo se stavte v obchodě.',
    'Připravíme vše, co máme skladem, a co nemáme, se pokusíme sehnat.',
    'Dáme vám vědět a balíček si v klidu vyzvednete a zaplatíte na místě.'
  ],

  // --- Návod „Jak vybrat obaly na učebnice" ---
  obalyStitek: 'poradíme',
  obalyNadpis: 'Jak vybrat obaly na učebnice',

  // Krátká verze pro mobil
  obalyMobilUvod: 'Nevíte si s obaly na učebnice rady? Máme dvě cesty:',
  obalyMobilKroky: [
    { tucne: 'Přineste učebnice s sebou.', text: 'Na prodejně vám je přeměříme a vybereme správné obaly.' },
    { tucne: 'Změřte výšky učebnic a přijďte se seznamem.', text: 'Podle nich vám obaly vybereme.' }
  ],

  // Plná verze pro počítač
  obalyUvod: 'Obalování učebnic dokáže potrápit a známe to i my z druhé strany pultu. „Něco mezi A5 a A4" bohužel nestačí. Máme ale dvě spolehlivé cesty, jak to zvládnout rychle a bez nervů:',
  obalyKroky: [
    { tucne: 'Nejlepší: přineste učebnice s sebou.', text: 'Na prodejně vám je přeměříme a vybereme obaly se správnou výškou a nastavitelnou šířkou. Tu si pak v klidu doladíte doma přesně na míru.' },
    { tucne: 'Druhá možnost: změřte výšku a přijďte se seznamem.', text: 'Doma změřte výšku každé učebnice a přineste nám seznam výšek. Podle nich vám obaly vybereme.' }
  ],
  obalyTip: 'Hotovým sadám obalů „pro určitou třídu" se raději vyhněte. Z naší zkušenosti rozměry často nesedí a bývá to spíš vyhozený peníz.'
};
