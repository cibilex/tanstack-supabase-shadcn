/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Client-side environment variables
  //   readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Server-side environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly SUPABASE_URL: string
      readonly SUPABASE_ANON_KEY: string
    }
  }
}

export {}
