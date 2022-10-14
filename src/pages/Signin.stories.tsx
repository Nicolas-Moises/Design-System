import { SignIn } from './Signin';
import { Meta, StoryObj } from '@storybook/react'

import { rest } from 'msw';

import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ],
        },
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('johndoe@example.com.br'), 'nicolas.nicc21@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('*******'), 'cebolinha')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!'))
        })

    }
}