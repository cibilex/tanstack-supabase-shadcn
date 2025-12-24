import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  staticData: {
    auth: true,
  },
})

function RouteComponent() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
