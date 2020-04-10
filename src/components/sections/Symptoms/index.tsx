import React, { FC } from 'react';

import Title from '~/components/Title';

import cough from '~/assets/svg/cough-2.svg';
import fever from '~/assets/svg/fever.svg';
import soreThroat from '~/assets/svg/sore-throat.svg';
import virus from '~/assets/svg/virus-2.svg';

import { Container } from './styles';

const Symptoms: FC = () => (
  <Container id="sintomas">
    <Title subtitle="Os possíveis">Sintomas</Title>
    <div>
      <ul>
        <li>
          <img src={fever} alt="Febre alta" />
          <span>Febre alta</span>
        </li>
        <li>
          <img src={cough} alt="Tosse" />
          <span>Tosse</span>
        </li>
        <li>
          <img src={soreThroat} alt="Dor de garganta" />
          <span>Dor de garganta</span>
        </li>
        <li>
          <img src={virus} alt="Dificuldade de respirar" />
          <span>Dificuldade de respirar</span>
        </li>
      </ul>
      <p>
        Os dois primeiros sintomas são facilmente confundidos com uma gripe
        comum ou com um resfriado, por isso não se precipite, fique em casa se
        for os sintomas forem leves.{' '}
        <strong>
          Em casos de piora na dificuldade de respirar (falta de ar), deve
          procurar a emergência do hospital mais próximo!
        </strong>
      </p>
      <h2>Transmissão</h2>
      <p>
        A principal forma de contágio do novo coronavírus é o contato com uma
        pessoa infectada, que transmite por meio de espirro, tosse, saliva,
        aperto de mão, contato com superfície contaminada (levando, em
        sequência, as mãos aos olhos, nariz e/ou boca).
      </p>
    </div>
  </Container>
);

export default Symptoms;
