import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  redirect,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Toaster } from 'sonner'
import appCss from '../assets/css/index.css?url'
import type { QueryClient } from '@tanstack/react-query'
import type { IUser } from '@/server/user.server'
import TanStackQueryDevtools from '@/integrations/tanstack-query/devtools'
import Navbar from '@/components/navbar'
import { getUser } from '@/server/user.server'

interface MyRouterContext {
  queryClient: QueryClient
  user: IUser | null
}
declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    auth?: boolean
  }
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
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
        title: 'TanStack Supabase Shadcn',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  beforeLoad: async (params) => {
    const user = await getUser() // önce user'ı al
    const requiresAuth = params.matches.some((match) => !!match.staticData.auth)

    if (requiresAuth && !user) {
      throw redirect({ to: '/login' })
    }

    return { user } // her zaman döndür (null ya da user objesi)
  },
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col  grow overflow-auto container mx-auto  bg-white">
          {children}
        </div>
        <Toaster />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
