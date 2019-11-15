not-a-platform
================

Dette er en samling av npm-moduler som skal kunne brukes på tvers av frontend-kodebaser i saksbehandlingsløsningene som utvikles for foreldrepenger og pleiepenger (og andre ytelser knyttet til kapittel 9 i Folketrygdloven). Bruken er ikke begrenset til disse bruksområdene, og koden skal for øvrig være helt frikoblet fra domenet som det jobbes med, men funksjonaliteten som lages er basert på behov som har oppstått/oppstår i forbindelse med saksbehandling av de nevnte ytelsene.

Modulene består i hovedsak av React-komponenter med tilhørende styling og funksjonalitet, men vil også kunne omfatte andre ting som er lurt å lage likt på tvers.

**OBS!** Må ikke forveksles med designsystemet som er dokumentert på [design.nav.no](https://design.nav.no). Vi har som mål å få flyttet så mange som mulig av React-komponentene vi lager over i designsystemet på sikt.


# Komme i gang
* Kjøre opp storybook: `npm run storybook`
* Boostrapping av moduler: `lerna bootstrap --hoist`
* Bygge alle moduler under `packages/@navikt`: `npm run build`
* Lint: `npm run lint`

# Henvendelser

Spørsmål knyttet til koden kan stilles som issues her på GitHub.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #sif-fp-samarbeidsplattform.
