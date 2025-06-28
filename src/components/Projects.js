import { Container, Row, Col, Nav, Tab, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import starTrailThumbNail from "../assets/img/starTrailThumbNail.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import neatHeatLogo from "../assets/img/NeatHeat.png";
import neatHeatEkstra1 from "../assets/img/neatHeatEkstra1.png";
import neatHeatEkstra2 from "../assets/img/neatHeatEkstra2.png";
import neatHeatEkstra3 from "../assets/img/neatHeatEkstra3.png";
import portofolgeNettside from "../assets/img/protofolieThumbnail.png";
import starTrailEkstra1 from "../assets/img/starTrailExtra1.png";
import starTrailEkstra2 from "../assets/img/starTrailExtra2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Star Trail",
      description: "Et videospill utviklet i  Unity game engine, med fokus på spilldesign og programmering.",
      imgUrl: starTrailThumbNail,
      buttons: [{ tittel: "Prøv spillet", knappDirection: "https://evepto.itch.io/star-trail" }],
      detalier: `
            <h4>Om prosjektet</h4>
            
            <p>Star Trail er et arkadespill utviklet i løpet av et 7-dagers "game jam" arrangert av itch.io. Spillet ble laget fra bunnen av som et samarbeidsprosjekt mellom meg og en visuell designer. Prosjektet fungerer som et tydelig bevis på min evne til å levere et spillbart og engasjerende produkt under tidspress. <img src="${starTrailEkstra2}" alt="Star Trail prototype" style="float: right; width: 80%; max-width: none; margin: 20px 70px 20px 70px; border-radius: 12px;" /></p>
            
            <h4>Teknologi og verktøy</h4>
            <p>Spillet er utviklet i Unity, med C# som programmeringsspråk. Jeg hadde hovedansvaret for programmering og teknisk implementering, inkludert kjernefunksjonalitet, kontrollsystemer og integrasjon av visuelle elementer.</p>

            <h4>Samarbeid og rollefordeling</h4>
            <p>Prosjektet ble gjennomført sammen med en kompis som tok ansvar for det visuelle uttrykket – inkludert grafikk og visuelle effekter. Samarbeidet fungerte svært godt, og vi oppnådde rask arbeidsflyt gjennom tydelig rollefordeling, hyppig kommunikasjon og gjensidig respekt for hverandres fagområder. Dette viser min evne til å samarbeide tett i kreative og tekniske prosjekter.</p>
<img src="${starTrailEkstra1}" alt="Star Trail prototype"/>
            <h4>Spilldesign og gjennomføring</h4>
            <p>Star Trail kombinerer enkle kontroller med progressiv vanskelighetskurve, og fokuserer på flyt og reaksjonsevne. Selv med begrenset tid, la vi vekt på spillfølelse og visuell respons – noe som ble trukket frem som styrker i tilbakemeldinger fra andre deltakere i "game jam-et".</p>

            <h4>Hva prosjektet viser</h4>
            <p>Dette prosjektet demonstrerer min evne til å:</p>
            <ul>
              <li>Planlegge og gjennomføre et spillprosjekt under tidspress</li>
              <li>Samarbeide effektivt med andre i en kreativ prosess</li>
              <li>Utvikle funksjonelle og stabile spillmekanikker med Unity og C#</li>
              <li>Raskt integrere visuelle og tekniske elementer til en helhetlig spillopplevelse</li>
            </ul>

            <h2>Konklusjon</h2>
            <p>Star Trail viser både min tekniske kompetanse, arbeidsevne og samarbeidsevner som utvikler. Det er et prosjekt jeg med stolthet viser frem som eksempel på hva jeg kan levere – også når tid og ressurser er begrenset.</p>
            `,
    },
    {
      title: "NeatHeat",
      description: "Designoppgave/emneoppgave: Designe et digitalt produkt med fokus på brukere",
      imgUrl: neatHeatLogo,
      buttons: [{ tittel: "Fullstendig Rapport", knappDirection: "/Prosjektfiler/RapportIN1060NeatHeat.pdf" }, { tittel: "Konsept Video", knappDirection: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v25/prosjektgrupper/CybSed/neatheat.mp4" }, { tittel: "Teknisk video", knappDirection: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v25/prosjektgrupper/CybSed/tekninsk_video.mp4" } ],
      detalier:  `<p><strong>Kort om prosjektet:</strong><br>
            Jeg har sammen med fire andre i gruppen jobbet med NeatHeat, et velferdsteknologisk semesterprosjekt i emnet "IN1060 - Design for, med og av brukere". Målet vårt var å øke tryggheten for eldre som bor hjemme. Vi utviklet et system som varsler brukeren dersom et tent stearinlys står igjen etter at de har forlatt boligen, for å forhindre brannfare. </p>
            <img src="${neatHeatEkstra1}" alt="NeatHeat prototype"/>
            <p><strong>Målgruppen:</strong><br>
            Målgruppen vi jobbet mot, er eldre hjemmeboende personer som ønsker å være selvstendige, men som trenger litt ekstra støtte i hverdagen for å føle seg trygge. For å sikre at løsningen ble tilpasset faktiske behov, samarbeidet vi tett med ekte brukere, blant annet besteforeldrene til et av gruppemedlemmene, gjennom hele designprosessen.</p>

            <p><strong>Arbeidsprosessen:</strong><br>
            Jeg og gruppen startet med å samle innsikt gjennom dagbøker, intervjuer og workshops. Brukerne var med i alle faser, fra utforming til testing og evaluering av løsningen. Etter flere runder med prototyping og designendringer kom vi fram til et minimalistisk produkt som enkelt kunne henges på en vase, slik at det ikke virket påtrengende i hjemmet.</p>
            <img src="${neatHeatEkstra2}" alt="NeatHeat prototype"/>
            <p><strong>Teknisk løsning:</strong><br>
            Løsningen vi utviklet består av to Arduino-enheter. En flammesensor plasseres nær stearinlyset for å oppdage om det er tent, mens en annen enhet ved døren har en bevegelsessensor og en buzzer. Når systemet registrerer at et lys er tent samtidig som noen forlater boligen, aktiveres alarmen for å varsle brukeren.</p>
            <img src="${neatHeatEkstra3}" alt="NeatHeat prototype" style="float: right; width: 70%; max-width: none; margin: 20px 0 20px 30px; border-radius: 12px;" />
            <p><strong>Resultater:</strong><br>
            Prototypen fungerte som forventet etter at vi forbedret koden. Det viste seg likevel at batterikoblingen og strømforsyningen kunne forbedres for mer stabil drift. Brukertestene ga oss verdifull innsikt som resulterte i flere forslag til videre forbedringer.</p>

            <p><strong>Hva jeg lærte:</strong><br>
            Gjennom prosjektet erfarte jeg at brukermedvirkning er essensielt for å utvikle realistiske og gode løsninger. Det er også viktig å sette av nok tid til testing og feilretting underveis. Sammen med gruppen fikk jeg praktisk erfaring med samskaping, prototyping og evaluering, noe som styrket min kompetanse innen velferdsteknologi og design.</p>
            `

    }, 
    {
      title: "Portefølje nettside",
      description: "Nettside for å vise frem prosjekter og ferdigheter.",
      imgUrl: portofolgeNettside,
      detalier: "<section>\
  <h3><strong>Formål</strong></h3>\
  <p>Denne nettsiden ble laget for å samle all relevant informasjon og visuell informasjon om meg på ett sted. Dette gjør det enkelt for interesserte parter, som arbeidsgivere og samarbeidspartnere, å få innsikt i min progresjon og bakgrunn.</p>\
  <h3><strong>Teknologier og kompetanse</strong></h3>\
  <ul>\
    <li><strong>React:</strong> Bygget en komponentbasert frontend som gir god struktur og enkel vedlikehold.</li>\
    <li><strong>React Bootstrap:</strong> Implementerte responsivt design og moderne brukergrensesnitt med ferdige komponenter.</li>\
    <li><strong>JavaScript og JSX:</strong> Utviklet funksjonalitet og dynamikk i applikasjonen.</li>\
    <li><strong>Responsivt design:</strong> Sikret at nettsiden fungerer sømløst på både mobil, nettbrett og desktop.</li>\
  </ul>\
  <h3><strong>Erfaring og læring</strong></h3>\
  <p>Gjennom utviklingen har jeg styrket mine ferdigheter innen moderne webutvikling, spesielt med React og responsivt design. Arbeidet har også gitt meg praktisk erfaring med å lage intuitive og visuelle løsninger som forbedrer brukeropplevelsen.</p>\
</section>"

    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Prosjekter</h2>
            <p>En samling prosjekter som reflekterer kompetanse innen systemutvikling, UX og kreativ problemløsning</p>
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard 
                          key={index}
                          {...project}
                        />
                      );
                    })}
                  </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="colorSharp2"/>
    </section>
  );
};
