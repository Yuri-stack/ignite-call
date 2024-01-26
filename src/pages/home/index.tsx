import Image from 'next/image'
import { Heading, Text } from '@ignite-ui/react'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import previewImage from '../../assets/app-preview.png'
import { Container, Hero, Preview } from './styles'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua Agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="lg">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendário que simboliza a aplicação em funcionamento"
          />
        </Preview>
      </Container>
    </>
  )
}
