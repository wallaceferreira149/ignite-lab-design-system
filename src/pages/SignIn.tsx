import { Checkbox } from '@radix-ui/react-checkbox'
import { Envelope, Lock } from 'phosphor-react'
import { useState, FormEvent } from 'react'
import axios from 'axios'

import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import Logo from '../components/Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import '../styles/global.css'

export function SignIn() {
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  
  function handleSignIn(event: FormEvent) {
    event.preventDefault();

    axios.post('/sessions', {
      email: 'wac@fab.mil.br',
      password: '123456'
    })

    setIsUserSignIn(true)
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-900 flex  items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text className='text-gray-400 mt-1'>Faça login e começe a usar</Text>
      </header>
      <form onSubmit={handleSignIn} action="" className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        {isUserSignIn && <Text>Login Realizado com sucesso...</Text>}
        <label htmlFor="email" className='flex flex-col gap-2'>
          <Text className="font-semibold">Digite seu e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' type='email' placeholder="meu_email@fab.mil.br"/>
          </TextInput.Root>
          <Text className="font-semibold">Digite sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='password' type='password' placeholder="************"/>
          </TextInput.Root>

          <label htmlFor="remember" className="flex item-center gap-2 mt-4">
            <Checkbox id='remember'/>
            <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
          </label>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-3 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline  hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possuí uma conta? Crie uma agora</a>
        </Text>
      </footer>
    </div>
  )
}
