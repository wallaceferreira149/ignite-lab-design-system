import {Meta, StoryObj} from '@storybook/react'
import {within, userEvent, waitFor} from '@storybook/testing-library'
import {expect} from '@storybook/jest'
import {rest} from 'msw'
import {SignIn} from './SignIn'

export default {
  title: 'Components/Sign In',
  component: SignIn,
  args: {
  },
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado'
          }))
        })
      ]
    }
  },
  argTypes: {
  }
} as Meta;

export const Default: StoryObj = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('meu_email@fab.mil.br'), 'wallace@fab.mil.br')
    userEvent.type(canvas.getByPlaceholderText('************'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login Realizado com sucesso...')).toBeInTheDocument()
    })
  }
}
