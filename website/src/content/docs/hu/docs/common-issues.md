---
title: Gyakori problémák
description: Hibaelhárítás és gyors tippek a Transrewrt-hez.
---



Ha valami nem a várt módon működik, először ellenőrizze ezeket a pontokat.

## Az alkalmazás nem fordít, nem ír újra vagy nem alakít át

Ellenőrizze, hogy:

- kiválasztott egy **előbeállítást** (Egyszerű) vagy **modellt** (Haladó) az eszköztáron
- **Egyszerű** módban a **Beállítások → Általános beállítások** menüben van egy **Szolgáltató** működő kulccsal (vagy Helyi LLM URL-lel)
- **Haladó** módban ki van választva egy modell az eszköztáron (üres lista megengedett, de legalább egy modellre van szüksége a **Beállítások → Modellek** menüben a futtatáshoz)
- az API beállítása működik (asztali: **Beállítások → API konfiguráció → Teszt**)

## A modelllista üres

**Egyszerű** módban ellenőrizze, hogy a **Szolgáltató** be van-e állítva, és a kulcsok/URL-ek tesztelve vannak-e. **Helyi LLM** esetén győződjön meg arról, hogy a helyi szerver fut, és a modellek be vannak töltve.

**Haladó** módban a kiválasztott modellek üresek lehetnek. Nyissa meg a **Beállítások → Modellek** menüt, kattintson a **Frissítés** gombra, és adja hozzá a modelleket a **Kiválasztott modellek**hez. Opcionálisan kapcsolja be a **Csak ingyenes** opciót. Az utolsó eszköztári modell eltávolítása szintén megnyitja a Beállítások → Modellek menüt.

## Túl lassú vagy túl drága

- Válasszon másik előbeállítást vagy modellt
- Használjon rövidebb bemenetet
- Kapcsolja ki a **Valós idejű fordítás gépelés közben** opciót az Általános beállításokban
- Használjon ingyenes modelleket egyszerű feladatokhoz

## Rossz felületnyelv

Kattintson a földgömb ikonra az eszköztáron, és válassza ki a **Felület nyelvét**.

## Túl kicsi vagy nehezen olvasható szöveg

**Beállítások → Általános beállítások** → módosítsa a **Betűtípust** és a **Méretet**.

## Az irányítópult összefoglalója üresnek tűnik

Ez normális, ha:

- csak **ingyenes modelleket** használ, és a **költség** adatokra néz (ezek nullák lehetnek); a hívásszám KPI-knek még adatokra van szükségük a kiválasztott időszakra vonatkozóan
- a kiválasztott **időszűrő** nem fedi le a hívások idejét — próbálja meg az **Összes** opciót

Ha a KPI-k továbbra is nullák az **Összes** után, ellenőrizze az [Előzmények](/docs/history/) vagy az Irányítópult → **Összes hívás** menüt.

## A költség „nem elérhető” vagy hibásnak tűnik

Az OpenRouter a tényleges költést mutatja, ha alkalmazható. Más szolgáltatók esetében a költséget az OpenRouter árazása alapján becsüljük; ha nincs áregyezés, a költség **nem elérhető**-ként jelenik meg, és nem adódik hozzá az összeghez.

## A teljes költség nem egyezik a szolgáltatói számlámmal

Az alkalmazásban szereplő adatok **becsült értékek, tájékoztató jellegűek**, nem számlák. Az OpenRouter esetében használja a **Beállítások → Költségkövetés → Szinkronizálás API kulcs használatával** lehetőséget.

## Hiányzik az előzmények oldal az oldalsávból

Lehet, hogy a **Végrehajtási előzmények megőrzése** ki van kapcsolva. Engedélyezze az Általános beállításokban, hacsak az előzményeket az adminisztrátor nem tiltotta le (`HISTORY_DISABLED` – lásd [Konfiguráció](/docs/configuration/#privacy-mode)).

## Web: váratlanul átirányított a bejelentkezésre

Lehet, hogy a munkamenet lejárt. Jelentkezzen be újra. Ha ez gyakran előfordul, kérjen meg egy adminisztrátort, hogy növelje a **Munkamenet időtúllépése** értékét a [Beállítások → Felhasználók](/docs/settings/#users) alatt (egy adminisztrátor visszavonhatta a munkameneteit is).

## Web admin: elfelejtett jelszó

Ha egy másik adminisztrátor be tud jelentkezni, visszaállíthatja a jelszót a **Beállítások → Felhasználók** alatt. Ha kizárta magát, de van shell hozzáférése:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Az alapértelmezett adminisztrátori felhasználónév `admin`. Forráskód ellenőrzésből: `pnpm run reset-web-password -- <username> <new-password>`.

## A műszerfal nem mutat adatokat más felhasználók számára (web)

Csak az **adminisztrátorok** tekinthetik meg más felhasználókat a **Felhasználó** szűrőn keresztül. A normál felhasználók csak a saját tevékenységüket látják.

## Megváltoztattam egy promptot és elvesztettem a szerkesztéseket

Amikor egy Transform promptot szerkeszt, kattintson a **Mentés** gombra, mielőtt a **Vissza a futtatáshoz** gombra kattintana.

## Gyors tippek

- Kezdje a [Fordítás](/docs/translate/) funkcióval, hogy megerősítse a beállításait az Átírás vagy Átalakítás előtt
- Használja az [Átírás](/docs/rewrite/) funkciót a mindennapi megfogalmazás javításához
- Használja az [Átalakítás](/docs/transform/) funkciót az ismételhető egyéni munkafolyamatokhoz
- Maradjon az **Egyszerű** módban, amíg szüksége nem lesz finomhangolt modellazonosítókra
- Exportálja a promptokat rendszeresen, ha promptkönyvtárat épít
- Használja a [Műszerfal](/docs/dashboard/) és az [Előzmények](/docs/history/) funkciót a használat és a korábbi futtatások áttekintéséhez

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
