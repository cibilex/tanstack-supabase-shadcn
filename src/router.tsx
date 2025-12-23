import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import NotFound from './components/not-found'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'

// Create a new router instance
export const getRouter = () => {
  const context = TanstackQuery.getContext()
  const router = createRouter({
    routeTree,
    context,

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: NotFound,
    defaultPreload: 'intent',
  })

  setupRouterSsrQueryIntegration({
    router,
    queryClient: context.queryClient,
  })

  return router
}
