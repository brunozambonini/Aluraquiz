import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

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
        <Widget
          as={motion.section}
          transition={{delay:0, duration:0.5}}
          variants={{
            show: {opacity:1 ,y:'0'}, //a mudança do eixo Y no hidden e no show, faz a animação do Widget se movendo
            hidden: {opacity: 0, y:'100%'},
          }}
          initial="hidden"
          animate="show"
          >
          <Widget.Header>
            <h1>Quiz</h1>
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

        <Widget
          as={motion.section}
          transition={{delay:0.5, duration:0.5}}
          variants={{
            show: {opacity:1 ,y:'0'}, //a mudança do eixo Y no hidden e no show, faz a animação do Widget se movendo
            hidden: {opacity: 0, y:'100%'},
          }}
          initial="hidden"
          animate="show"
          >
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimentos</p>
            {/* db.external é onde tem os links de outros quizes */}
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');
                return (
                  <li key={linkExterno}>
                    <Widget.Topic as={Link} href={`/quiz/${projectName}___${githubUser}`}>
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
            
          </Widget.Content>
        </Widget>
        <Footer as={motion.footer}
          transition={{delay:0.7, duration:0.5}}
          variants={{
            show: {opacity:1 ,y:'0'}, //a mudança do eixo Y no hidden e no show, faz a animação do Widget se movendo
            hidden: {opacity: 0, y:'100%'},
          }}
          initial="hidden"
          animate="show"
          />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/brunozambonini" />
    </QuizBackground>
  );
}
