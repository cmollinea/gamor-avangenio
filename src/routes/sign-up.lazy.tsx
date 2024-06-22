import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sign-up')({
  component: () => <div>Hello /sign-up!</div>
})