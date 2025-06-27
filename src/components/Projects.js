import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import starTrailThumbNail from "../assets/img/starTrailThumbNail.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import neatHeatLogo from "../assets/img/NeatHeat.png";
import neatHeatEkstra1 from "../assets/img/neatHeatEkstra1.png";
import neatHeatEkstra2 from "../assets/img/neatHeatEkstra2.png";
import neatHeatEkstra3 from "../assets/img/neatHeatEkstra3.png";

export const Projects = () => {

  const projects = [
    {
      title: "Star Trail",
      description: "Et videospill utviklet i  Unity game engine, med fokus på spilldesign og programmering.",
      imgUrl: starTrailThumbNail,
      detalier: "Star Trail er et videospill utviklet i Unity game engine. Spillet kombinerer elementer av utforskning, overlevelse og strategisk kamp. Spilleren navigerer gjennom en galakse, samler ressurser og bekjemper fiender for å overleve og oppnå mål.",
    },
    {
      title: "NeatHeat",
      description: "Designoppgave/emneoppgave: Designe et digitalt produkt med fokus på brukere",
      imgUrl: neatHeatLogo,
      extraImages: [neatHeatEkstra1, neatHeatEkstra2, neatHeatEkstra3],
      buttons: [{ tittel: "Se prosjekt", knappDirection: "https://example.com" }, { tittel: "Last ned", knappDirection: "https://example.com/download" }    ],
      detalier:  `<p><strong>Kort om prosjektet:</strong><br>
            Jeg har sammen med fire andre i gruppen jobbet med NeatHeat, et velferdsteknologisk semesterprosjekt i emnet "IN1060 - Design for, med og av brukere". Målet vårt var å øke tryggheten for eldre som bor hjemme. Vi utviklet et system som varsler brukeren dersom et tent stearinlys står igjen etter at de har forlatt boligen, for å forhindre brannfare.</p>

            <p><strong>Målgruppen:</strong><br>
            Målgruppen vi jobbet mot, er eldre hjemmeboende personer som ønsker å være selvstendige, men som trenger litt ekstra støtte i hverdagen for å føle seg trygge. For å sikre at løsningen ble tilpasset faktiske behov, samarbeidet vi tett med ekte brukere, blant annet besteforeldrene til et av gruppemedlemmene, gjennom hele designprosessen.</p>

            <p><strong>Arbeidsprosessen:</strong><br>
            Jeg og gruppen startet med å samle innsikt gjennom dagbøker, intervjuer og workshops. Brukerne var med i alle faser, fra utforming til testing og evaluering av løsningen. Etter flere runder med prototyping og designendringer kom vi fram til et minimalistisk produkt som enkelt kunne henges på en vase, slik at det ikke virket påtrengende i hjemmet.</p>

            <p><strong>Teknisk løsning:</strong><br>
            Løsningen vi utviklet består av to Arduino-enheter. En flammesensor plasseres nær stearinlyset for å oppdage om det er tent, mens en annen enhet ved døren har en bevegelsessensor og en buzzer. Når systemet registrerer at et lys er tent samtidig som noen forlater boligen, aktiveres alarmen for å varsle brukeren.</p>

            <p><strong>Resultater:</strong><br>
            Prototypen fungerte som forventet etter at vi forbedret koden. Det viste seg likevel at batterikoblingen og strømforsyningen kunne forbedres for mer stabil drift. Brukertestene ga oss verdifull innsikt som resulterte i flere forslag til videre forbedringer.</p>

            <p><strong>Hva jeg lærte:</strong><br>
            Gjennom prosjektet erfarte jeg at brukermedvirkning er essensielt for å utvikle realistiske og gode løsninger. Det er også viktig å sette av nok tid til testing og feilretting underveis. Sammen med gruppen fikk jeg praktisk erfaring med samskaping, prototyping og evaluering, noe som styrket min kompetanse innen velferdsteknologi og design.</p>
            `

    }, 
    {
      title: "Portefølje nettside",
      description: "Nettside for å vise frem prosjekter og ferdigheter.",
      imgUrl: projImg3,
      detalier: "<section>\
  <h3><strong>Formål</strong></h3>\
  <p>Nettsiden ble laget for å samle all relevant informasjon og visuell informasjon om meg på ett sted. Dette gjør det enkelt for interesserte parter, som arbeidsgivere og samarbeidspartnere, å få innsikt i min progresjon og bakgrunn.</p>\
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
