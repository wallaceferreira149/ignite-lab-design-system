import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import Logo from './components/Logo'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { SignIn } from './pages/SignIn'
import './styles/global.css'

export function App() {
   return (
     <SignIn />
  )
}
