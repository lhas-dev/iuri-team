import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import banner from "../images/banner.jpeg";
import logo from "../images/logo.png";
import recepcao from "../images/recepcao.jpeg";
import bar from "../images/bar.jpeg";
import estacionamento from "../images/estacionamento.jpeg";
import professor from "../images/professor.jpeg";

const Banner = styled.section`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9),
      rgba(120, 120, 120, 0.8)
    ),
    url(${banner.src});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100%;
  text-align: center;

  img {
    width: auto;
    height: 300px;
    margin: 0 auto;
    display: block;
  }

  h1 {
    color: #fff;
    font-size: 2rem;
  }
`;
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 3rem;
  text-align: center;
`;

const CallToActionButton = styled.a`
  padding: 20px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  color: #000;
  font-size: 0.8rem;
  text-decoration: none;
`;

const FloatingActionButton = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  cursor: pointer;
`;

const Footer = styled.footer`
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  text-align: center;
  color: #fff;

  p {
    margin-top: 1rem;
  }
`;

const Images = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  li {
    list-style-type: none;
  }
  img {
    width: 140px;
    height: 140px;
    border-radius: 10px;
  }
`;

const whatsAppUrl =
  "https://api.whatsapp.com/send?phone=555181438706&text=Oi%2C%20vi%20esse%20an%C3%BAncio%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20da%20escola.%20Oss";

const WhatsAppButton = ({ label = "Agendar aula experimental GRATUITA" }) => (
  <CallToActionButton href={whatsAppUrl} target="_blank">
    {label}
  </CallToActionButton>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Iuri Team - Escola de Jiu-jitsu, Jiu-jitsu Infantil e Boxe
        </title>
        <meta
          name="title"
          content="Iuri Team - Escola de Jiu-jitsu, Jiu-jitsu Infantil e Boxe"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Iuri Team - Escola de Jiu-jitsu, Jiu-jitsu Infantil e Boxe"
        />
        <meta
          name="description"
          content="Treinos para adultos de todas as idades (iniciante, intermerdiário, avançado e competição). Nós temos treinos KIDS (infantil) em horários alternativos. Para crianças a partir de 5 anos de idade."
        />
        <meta
          property="og:description"
          content="Treinos para adultos de todas as idades (iniciante, intermerdiário, avançado e competição). Nós temos treinos KIDS (infantil) em horários alternativos. Para crianças a partir de 5 anos de idade."
        />
        <meta
          property="og:image"
          content="https://iuriteam.com.br/android-chrome-192x192.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner>
          <Container>
            <Image
              src={logo}
              alt="Iuri Team - Escola de Jiu-jitsu, Jiu-jitsu Infantil e Boxe"
            />
            <h1>Escola de Jiu-jitsu, Jiu-jitsu Infantil e Boxe</h1>
            <WhatsAppButton />
          </Container>
        </Banner>
        <section>
          <Container>
            <p>
              A nossa sede fica localizada na{" "}
              <strong>Zona Norte de Porto Alegre</strong>, próximo ao{" "}
              <em>Bourbon Assis Brasil</em>.
            </p>
            <p>
              Nós temos <strong>treinos KIDS (infantil)</strong> em horários
              alternativos. Para crianças a partir de <em>5 anos de idade</em>.
            </p>
            <p>
              Treinos para <strong>adultos de todas as idades</strong>{" "}
              (iniciante, intermerdiário, avançado e competição).
            </p>
            <WhatsAppButton label="Agende sua AULA EXPERIMENTAL gratuita" />
            <strong>Limitação de alunos por treino!</strong>
            <p>
              Nosso endereço é{" "}
              <strong>
                Rua 25 de Julho, 344, Santa Maria Goretti, Porto Alegre.
              </strong>
            </p>
            <p>
              O Jiu-jitsu proporciona melhora na{" "}
              <strong>
                concentração, aumento da auto-estima, disciplina, respeito e
                saúde
              </strong>{" "}
              para o seu desenvolvimento e do seu filho(a).
            </p>
            <Images>
              <li>
                <a
                  href={recepcao.src}
                  title="Nossa recepção com todo o conforto para você e sua família"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={recepcao}
                    alt="Nossa recepção com todo o conforto para você e sua família"
                  />
                </a>
              </li>
              <li>
                <a
                  href={bar.src}
                  title="Nosso bar onde você pode encontrar bebidas para matar a sua sede."
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={bar}
                    alt="Nosso bar onde você pode encontrar bebidas para matar a sua sede."
                  />
                </a>
              </li>
              <li>
                <a
                  href={estacionamento.src}
                  title="Nosso estacionamento próprio para que você possa deixar seu carro em segurança."
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={estacionamento}
                    alt="Nosso estacionamento próprio para que você possa deixar seu carro em segurança."
                  />
                </a>
              </li>
              <li>
                <a
                  href={estacionamento.src}
                  title="Nosso professor e mestre, Iuri Cilenti, faixa preta."
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src={professor}
                    alt="Nosso professor e mestre, Iuri Cilenti, faixa preta."
                  />
                </a>
              </li>
            </Images>
            <p>
              Nossa estrutura conta com{" "}
              <strong>
                estacionamento próprio, loja de roupas e bebidas e barbearia
              </strong>
              .
            </p>
            <p>Nossos horários são:</p>
            <p>
              <strong>Segundas, Quartas e Sextas:</strong> 06h30.
            </p>
            <p>
              <strong>Todos os dias:</strong> 10h, 12h, 17h, 18h e 19h30*.
            </p>
            <p>
              <strong>Kids:</strong> Terças e Quintas às 16h.
            </p>
            <p>
              Contamos com uma{" "}
              <strong>
                estrutura com mais de 100 m2 de tatame e estacionamento próprio
              </strong>{" "}
              para que você e sua família possam treinar com mais segurança e
              tranquilidade.
            </p>
            <WhatsAppButton label="Agende sua AULA EXPERIMENTAL gratuita" />
          </Container>
        </section>
        <Footer>
          <p>Rua 25 de Julho, 344.</p>
          <p>Santa Maria Goretti - POA, Ao lado do Bourbon Assis Brasil.</p>
          <p>De segunda a sexta: 10h às 20h30.</p>
        </Footer>
        <FloatingActionButton href={whatsAppUrl} target="_blank">
          <i className="fa fa-whatsapp my-float"></i>
        </FloatingActionButton>
      </main>
    </>
  );
}
