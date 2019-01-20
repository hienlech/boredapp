import React from 'react'
import { WelcomeCard } from './Elements'

const Welcome = () => (
  <WelcomeCard>
    <div>
      <h1>Xin chào!</h1>
      <h2>Bạn nghĩ bạn đang chán và không biết làm gì</h2>
      <p>Chatbot này sẽ nói cho bạn điều hay ho để làm , hãy thử xem!</p>
    </div>
    <div>
      <p>
        Made by{' '}
        <a
          href="https://twitter.com/miuki_miu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elizabet Oliveira
        </a>{' '}
        &{' '}
        <a
          href="https://twitter.com/NikkitaFTW"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sara Vieira
        </a>{' '}
      </p>
      <p>
        Vietnamese Version by{' '}
        <a
          href="https://www.facebook.com/hienlech7999"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hiển Lếch
        </a>
      </p>
      <p>
        Code on{' '}
        <a
          href="https://github.com/SaraVieira/bored.inc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
      <p>
        <a
          href="https://airtable.com/shrsvsMAtGMlFvGP6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add an Activity
        </a>
      </p>
    </div>
  </WelcomeCard>
)

export default Welcome
