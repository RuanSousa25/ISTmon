import "./Classes.css";

import TabButton from "../../components/button/TabButton";
import Section from "../../components/section/Section";

import Acc from "../../components/Acc/Acc";
import { useNavigate } from "react-router-dom";

export default function Classes() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Aulas</h1>
      <Section title="Clamídia" color="#ee6b2f">
        <div className="section-content">
          <span className="accordions">
            <Acc title={"Sintomas"}>
              A clamídia é uma IST que, muitas vezes, não apresenta sintomas, o
              que torna a infecão difícil de detectar sem a realização de exames
              regulares.
              <br></br>
              Porém, homens infectados podem sentir ardência ao urinar,
              corrimento uretral, dor nos testículos e ao ejacular, presença de
              sangue no sêmen e até febre.
              <br></br>
              Já mulheres, que em 70% a 80% dos casos são assintomáticas, sofrem
              de corrimento amarelado ou claro, sangramento espontâneo ou
              durante relações sexuais, dor ao urinar e dor pélvica.
            </Acc>
            <Acc title={"Tratamento"}>
              O tratamento para a clamídia para homens é com antibióticos, sob
              orientação de um urologista, clínico geral ou infectologista.
              <br></br>
              Para mulheres não é muito diferente, pois também devem ter
              acompanhamento médico para tratamento com antibióticos como
              azitromicina ou doxiciclina, dependendo do caso.
            </Acc>
            <Acc title={"Prevenção"}>
              O uso de preservativos é a principal forma de prevenir a clamídia,
              pois evita o contato direto com secreções infectadas.
            </Acc>
          </span>
          <span>
            <TabButton
              style={{ fontSize: "14px" }}
              onClick={() => {
                navigate("/activitie", { state: "clamidia" });
              }}
            >
              Realizar avaliação
            </TabButton>
          </span>
        </div>
      </Section>
      <Section title="Candidíase" color="#e6bc2f">
        <div className="section-content">
          <span className="accordions">
            <Acc title={"Sintomas"}>
              <p className="accordion-content">
                Em mulheres, a candidíase pode causar ardência e coceira na
                vagina, corrimento branco, vermelhidão acompanhada de dor na
                área genital e, por fim, dor durante relações sexuais.
                <br></br>
                Já em homens, os sintomas são vermelhidão e inchaçço na glande e
                prepúcio, coceira intensa, dor ao urinar e durante relações
                sexuais, placas brancas na glande, secreção esbranquiçada,
                feridas, ressecamentos e fissuras, assim como mau cheiro e
                dificuldade de retrair o prepúcio.
              </p>
            </Acc>
            <Acc title={"Tratamento"}>
              <p className="accordion-content">
                Para as mulheres, o tratamento costuma ser pomadas ou
                comprimidos antifúngicos, como o Itraconazol. A taxa de cura é
                alta, sendo acima de 90%.
                <br></br>
                Já para homens, o tratamento é com antifúngico sob orientação de
                urologista e com higiene íntima adequada.
              </p>
            </Acc>
            <Acc title={"Prevenção"}>
              Higiene íntima com sabonete de pH neutro Preferência por calcinhas
              de algodão e evitar uso diário de absorventes íntimos Uso de
              preservativo em relações sexuais para evitar transmissão entre
              parceiros
            </Acc>
          </span>
          <span>
            <TabButton
              style={{ fontSize: "14px" }}
              onClick={() => {
                navigate("/activitie", { state: "candidiase" });
              }}
            >
              Realizar avaliação
            </TabButton>
          </span>
        </div>
      </Section>
      <Section title="Gonorreia" color="#4dad5b">
        <div className="section-content">
          <span className="accordions">
            <Acc title={"Sintomas"}>
              Em homens, os sintomas podem são sensação de ardor ao urinar,
              secreção branca, amarela ou verde, e, ocasionalmente, dor ou
              inchaço nos testículos.
              <br></br>
              Mulheres podem sentir aumento do corrimento vaginal, dor ao urinar
              e sangramento entre os períodos menstruais. Muitas vezes, a
              infecção também pode ser assintomática em mulheres, o que
              dificulta a detecção precoce.
            </Acc>
            <Acc title={"Tratamento"}>
              A gonorreia pode ser tratada com antibióticos, mas algumas cepas
              da bactéria se tornaram resistentes, exigindo tratamentos
              específicos.
            </Acc>
            <Acc title={"Prevenção"}>
              A prevenção inclui o uso de preservativos e a realização de exames
              regulares para quem é sexualmente ativo, especialmente com
              múltiplos parceiros.
            </Acc>
          </span>
          <span>
            <TabButton
              style={{ fontSize: "14px" }}
              onClick={() => {
                navigate("/activitie", { state: "gonorreia" });
              }}
            >
              Realizar avaliação
            </TabButton>
          </span>
        </div>
      </Section>
    </main>
  );
}
