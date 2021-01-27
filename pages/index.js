import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>
          AluraQuiz - Modelo
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit = { function (infosDoEvento) {
              infosDoEvento.preventDefault();
              // router manda para a próxima página
              router.push(`/quiz?name=${name}`);

              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input 
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  //State -> variáveis que mudam na tela
                  setName(infosDoEvento.target.value);
                }}
                placeholder = "Diz ai seu nome"
                value={name}
                />

                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
            </form>
              
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimentos</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/brunozambonini" />
    </QuizBackground>
  );
}
