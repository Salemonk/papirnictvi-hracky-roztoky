# Papírnictví a Hračky Roztoky

Web rodinného papírnictví a hračkářství v Roztokách — https://www.hrackyroztoky.cz/

Jednostránkový statický web (`index.html`), bez buildu a závislostí.

## Jak upravovat obsah

- **Novinky, tipy a sezónní sekci** upravíte v editoru: otevřete `editor.html`
  dvojklikem, upravte formuláře a stažený soubor nakopírujte do složky `data/`.
- **Nahrání na GitHub:** spusťte `nahrat-na-github.bat` (sám stáhne případné
  změny z mobilu a pak nahraje ty vaše).
- **Nahrání na ostrý web (hrackyroztoky.cz):** spusťte `nahrat-na-web.bat`
  (potřebuje WinSCP s uloženým připojením „forpsi-web"; funguje jen z ČR).
- Podrobná mapa projektu je v komentáři na začátku `index.html`,
  technické detaily pro vývojáře v `CLAUDE.md`.

## Náhled

Otevřete `index.html` v prohlížeči (funguje i přímo z disku), nebo:

```
python -m http.server 8080
```

a pak http://localhost:8080.
