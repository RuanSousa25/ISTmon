import "./Home.css";

import Section from "../../components/section/Section";
import TabButton from "../../components/button/TabButton";

export default function Home() {
  return (
    <main>
      <h1>Página inicial</h1>
      <Section title="O que são IST's?" color="#de0a26">
        Segundo o ministério da saúde, IST's (acrônimo para infecção sexualmente
        transmissível) é o nome dado às infecções causadas por vírus, bactérias
        ou outros microrganimos transmitidos, principalmente, por meeio do
        contato sexual (oral, vagial, anal) sem o uso de camisinha masculina ou
        feminina. A transmissão de uma IST pode acontecer, ainda, da mãe para a
        criança durante a gestação, o parto ou a amamentação. De maneira menos
        comum, as IST também podem ser transmitidas por meio não sexual, pelo
        contato de mucosas ou pele não íntegra com secreções corporais
        contaminadas.
      </Section>
      <Section title="Como tratar as IST's?" color="#ee6b2f">
        Os tratamentos para ISTs variam bastante de infecção para infecção, mas,
        normalmente, são utilizados antibióticos para infecções bacterianas e
        antivirais para infecções virais. Além disso, pessoas em tratamento de
        infecções bacterianas devem se abster de relações sexuais até se
        recuperarem.
        <br></br>
        <br></br>
        As ISTs virais, especialmente o herpes genital e a infecção por HIV,
        geralmente persistem por toda a vida. Os medicamentos antivirais podem
        controlar essas infecções, mas ainda não conseguem curá-las.
      </Section>
      <menu>
        <TabButton>Aulas</TabButton>
        <TabButton>Catálogo</TabButton>
      </menu>
    </main>
  );
}
