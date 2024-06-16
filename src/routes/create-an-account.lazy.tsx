import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/create-an-account')({
  component: () => <div>Hello /create-an-account!</div>
})