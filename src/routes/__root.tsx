import { createRootRoute } from '@tanstack/react-router'
import RootLayout from '../components/RootLayout'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Tradebot — Exclusive Opportunity',
      },
    ],
  }),
  component: RootLayout,
})
