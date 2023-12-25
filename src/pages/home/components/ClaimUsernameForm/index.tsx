import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormAnnotation } from './styles'

const claimUsernameFormSchema = z.object({
    username: z
        .string()
        .min(3, { message: 'Digite no mínimo 3 caracteres' })
        .regex(/^([a-z\\-]+)$/i, { message: 'Digite apenas letras e hifens' })
        .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema),
    })

    async function handleClaimUsername(data: ClaimUsernameFormData) {
        console.log(data.username)
    }

    return (
        <>
            <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
                <TextInput
                    crossOrigin=""
                    size="sm"
                    prefix="ignite.co/"
                    placeholder="Seu usuário"
                    {...register('username')}
                />
                <Button size="sm" type="submit">
                    Reservar usuário
                    <ArrowRight />
                </Button>
            </Form>

            <FormAnnotation>
                <Text size="sm">
                    {errors.username ? errors.username.message : 'Digite o nome do usuário desejado'}
                </Text>
            </FormAnnotation>
        </>
    )
}
