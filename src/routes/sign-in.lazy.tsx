import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sign-in')({
  component: () => <div>Hello /sign-in!</div>
})