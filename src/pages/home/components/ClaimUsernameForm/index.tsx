import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'

export function ClaimUsernameForm() {
    return (
        <Form as="form">
            <TextInput
                crossOrigin=""
                size="sm"
                prefix="ignite.co/"
                placeholder="Seu usuário"
            />
            <Button size="sm" type="submit">
                Reservar usuário
                <ArrowRight />
            </Button>
        </Form>
    )
}
