# TanStack Start + Supabase Auth Demo

Modern authentication demo with TanStack Start (React SSR), Supabase, and shadcn/ui. Features type-safe routing, server-side sessions, and clean auth flows.

## 🚀 Tech Stack

- **[TanStack Start](https://tanstack.com/start)** - Full-stack React with SSR
- **[Supabase](https://supabase.com)** - Auth & database
- **[shadcn/ui](https://ui.shadcn.com)** - Component library
- **[Tailwind CSS v4](https://tailwindcss.com)** - Styling
- **[React Hook Form](https://react-hook-form.com)** + **[Zod v4](https://zod.dev)** - Form validation
- **[TanStack Query](https://tanstack.com/query)** - Server state
- **[TanStack Router](https://tanstack.com/router)** - File-based routing

## ✨ Features

- Email/Password authentication with Supabase
- Protected routes with auto-redirect
- Server-side session management
- Form validation with Zod
- Toast notifications
- Dynamic user avatars
- TypeScript throughout

## 🔧 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env` in root:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get from [Supabase Dashboard](https://app.supabase.com) → Project Settings → API

### 3. Configure Supabase

1. Enable **Email Auth** in Authentication → Providers
2. Set Site URL to `http://localhost:3000`

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔐 How Auth Works

**Protected Routes**: Add `staticData: { auth: true }` to routes  
**Session Check**: `beforeLoad` in `__root.tsx` validates user  
**Logout**: Clears cookies and redirects to login

## 🎨 Add Components

```bash
npx shadcn@latest add [component-name]
```

## 📚 Docs

- [TanStack Start](https://tanstack.com/start) | [Router](https://tanstack.com/router) | [Query](https://tanstack.com/query)
- [Supabase Auth](https://supabase.com/docs/guides/auth) | [shadcn/ui](https://ui.shadcn.com)

## ⚠️ Notes

Demo project for learning. Not production-ready (missing password reset, email verification UI, cookie security hardening).
