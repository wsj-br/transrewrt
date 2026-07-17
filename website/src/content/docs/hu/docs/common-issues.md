---
title: Gyakori problémák
description: Hibaelhárítás és gyors tippek a Transrewrt-hez.
---



Ha valami nem a várt módon működik, először ellenőrizze ezeket a pontokat.

## Az alkalmazás nem fordít, nem ír újra, vagy nem alakít át

Ellenőrizze, hogy:

- kiválasztott egy **előbeállítást** (Egyszerű) vagy **modellt** (Haladó) az eszköztáron
- **Egyszerű** módban a **Beállítások → Általános beállítások** menüpontban a **Szolgáltató** rendelkezik működő kulccsal (vagy helyi LLM URL-lel)
- **Haladó** módban legalább egy modell szerepel a **Beállítások → Modellek** menüpontban
- az API beállítása működik (asztali: **Beállítások → API konfiguráció → Teszt**)

## A modelllista üres

**Egyszerű** módban ellenőrizze, hogy a **Szolgáltató** be van-e állítva, és a kulcsok/URL-ek tesztelve vannak-e. **Helyi LLM** esetén győződjön meg arról, hogy a helyi szerver fut, és a modellek be vannak töltve.

**Haladó** módban nyissa meg a **Beállítások → Modellek** menüpontot, kattintson a **Frissítés** gombra, és adja hozzá a modelleket a **Kiválasztott modellek** listához. Opcionálisan kapcsolja be a **Csak ingyenes** opciót.

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

- csak **ingyenes modelleket** használ, és a **költség**adatokat nézi (ezek nullák lehetnek); a hívásszám KPI-knek továbbra is adatokra van szükségük a kiválasztott időszakra vonatkozóan
- a kiválasztott **időszűrő** nem fedi le a hívások idejét – próbálja meg az **Összes** lehetőséget

Ha a KPI-k az **Összes** után is nullák, ellenőrizze az [Előzmények](/docs/history/) vagy az Irányítópult → **Összes hívás** lehetőséget.

## A költség „nem elérhető” vagy hibásnak tűnik

Az OpenRouter a tényleges kiadásokat mutatja, ha alkalmazható. Más szolgáltatók esetében a költség az OpenRouter árazásából becsült; ha nincs megfelelő ár, a költség **nem elérhető**ként jelenik meg, és nem adódik hozzá az összeghez.

## A teljes költség nem egyezik meg a szolgáltatói számlámmal

Az alkalmazásban szereplő adatok **referencia becslések**, nem számlák. Az OpenRouter esetében használja a **Beállítások → Költségkövetés → Szinkronizálás API kulcs használatával** lehetőséget.

## A történet oldal hiányzik az oldalsávból

Lehet, hogy a **végrehajtási előzmények megőrzése** ki van kapcsolva. Engedélyezze az Általános beállításokban, hacsak az előzményeket az adminisztrátor nem tiltotta le (`HISTORY_DISABLED` – lásd a [Konfiguráció](/docs/configuration/#privacy-mode) részt).

## Web: váratlanul átirányítva a bejelentkezési oldalra

Lehet, hogy a munkamenete lejárt. Jelentkezzen be újra. Ha ez gyakran előfordul, ellenőrizze a szerver munkamenet élettartam beállításait.

## Webes adminisztrátor: elfelejtett jelszó

Ha egy másik adminisztrátor be tud jelentkezni, akkor a jelszót a **Beállítások → Felhasználók** menüpont alatt tudja visszaállítani. Ha Ön kizárta magát, de van shell hozzáférése:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Az alapértelmezett adminisztrátori felhasználónév `admin`. Forráskód ellenőrzésből: `pnpm run reset-web-password -- <username> <new-password>`.

## Az irányítópult nem mutat adatokat más felhasználók számára (web)

Csak az **adminisztrátorok** tekinthetik meg más felhasználókat a **Felhasználó** szűrőn keresztül. A normál felhasználók csak a saját tevékenységüket látják.

## Módosított egy promptot és elveszítette a szerkesztéseket

A Transform prompt szerkesztésekor kattintson a **Mentés** gombra a **Vissza a futtatáshoz** előtt.

## Gyors tippek

- Kezdje a [Fordítás](/docs/translate/) funkcióval, hogy megerősítse a beállításait az Átírás vagy Átalakítás előtt
- Használja az [Átírás](/docs/rewrite/) funkciót a mindennapi szövegjavításokhoz
- Használja az [Átalakítás](/docs/transform/) funkciót az ismételhető egyéni munkafolyamatokhoz
- Maradjon az **Egyszerű** módban, amíg finomhangolt modellazonosítókra nincs szüksége
- Exportálja a promptokat rendszeresen, ha prompt könyvtárat épít
- Használja az [Irányítópult](/docs/dashboard/) és az [Előzmények](/docs/history/) funkciót a használat és a korábbi futtatások áttekintéséhez

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
