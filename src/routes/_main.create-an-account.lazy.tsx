import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_main/create-an-account')({
  component: () => <div>Hello /create-an-account!</div>
})