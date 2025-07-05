import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import fallPic from "../assets/img/Fall.png";
import maratonPic from "../assets/img/Maraton.png";
import galdhopiggenPic from "../assets/img/Gallho.png";


export const OmMeg = () => {
  const [open, setOpen] = useState([false, false, false, false]);

const toggle = (index) => {
  const updated = [...open];
  updated[index] = !updated[index];
  setOpen(updated);
};

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="interesse-seksjon">
              <h2 className="interesse-tittel">Hobby og interesser</h2>
              <p className="klikk-forklaring">Klikk på interesse for å lese mer.</p>
              <div className="interesse-boks">
  {[
    {
      tittel: "🏋️ Trening og sport",
      tekst: "Jeg er opptatt av god helse og en aktiv livsstil. Mesteparten av treningen min er styrketrening, som jeg jobber målrettet med flere ganger i uken. I tillegg liker jeg å spille basketball og volleyball for variasjon og det sosiale ved lagsport.",
    },
    {
      tittel: "🥾 Friluftsliv",
      tekst: "Jeg trives godt ute i naturen, spesielt på fjellturer i utfordrende terreng. Jeg liker å komme meg ut av storbyen. Oppleve stillheten og utsikten sammen med gode venner. Jeg liker å gå på tur med andre – det gjør opplevelsen både mer sosial og minneverdig.",
    },
    {
      tittel: "🧑‍🤝‍🧑 Sosialt",
      tekst: "Jeg liker å være med venner, enten det er å henge sammen i hverdagen eller bare ta en prat. Det gir meg energi, og jeg setter pris på å ha folk rundt meg som kan både utfordre meg og få meg til å le.",
    },
    {
      tittel: "👾 Programmering og spillutvikling",
      tekst: (
        <>
          Jeg har hatt stor interesse for programmering helt siden jeg var ung, og liker spesielt å forstå hvordan systemer fungerer og hvordan man kan løse problemer gjennom kode. Jeg har jobbet med spillutvikling siden jeg var 14 år, og bruker Unity som hovedverktøy, i tillegg til Blender og Krita for grafikk. Jeg publiserte noen av de første spillene mine på{" "}
          <a href="https://evepto.itch.io/" target="_blank" rel="noopener noreferrer">
            itch.io
          </a>.
        </>
      ),
    },
  ].map((item, index) => (
    <div
      className={`flip-card ${open[index] ? "flipped" : ""}`}
      key={index}
      onClick={() => toggle(index)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h4>{item.tittel}</h4>
        </div>
        <div className="flip-card-back">
          <p>{item.tekst}</p>
        </div>
      </div>
    </div>
  ))}
</div>

            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={7}>
            <div className="milepal-bx">
              <h2>Milepæler</h2>
              <p><b>Galdhøpiggen:</b> Besteg Norges høyeste fjell, 2469 moh.</p>
              <p><b>Fallskjermhopp:</b> Hoppet fra 2000 meters høyde med fallskjerm.</p>
              <p><b>Maraton:</b> Fullført fullmaraton i Sør-Afrika etter lang forberedelse.</p>
              <p><b>110 kg benkpress:</b> Oppnådd personlig rekord i benkpress på 110 kg.</p>
              <p><b>Strikkhopp:</b> Utført verdens høyeste strikkhopp fra 160 meter.</p>
              <p><b>7-fjellsturen:</b> Gikk 7-fjellsturen i Bergen – 35 km over syv fjell.</p>
            </div>
          </Col>
          <Col md={5}>
            <div className="image-stack">
              <img src={galdhopiggenPic} alt="Galdhøpiggen" />
              <img src={fallPic} alt="Fallskjermhopp" />
              <img src={maratonPic} alt="Maraton" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
