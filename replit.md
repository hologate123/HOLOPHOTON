# HOLO-GATEWAY

## Overview

HOLO-GATEWAY is a corporate landing page for a deep-tech company specializing in open-air 3D holographic display systems. The application showcases advanced volumetric computing technology with a premium dark-mode aesthetic inspired by Apple, Tesla, and SpaceX design languages. It features a contact form for investor and partner inquiries across defense, medical, and enterprise sectors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark-mode design system featuring deep obsidian backgrounds, photonic cyan, and plasma violet accents
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Typography**: Sora (headings), Inter (body), JetBrains Mono (technical data) via Google Fonts
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints under /api prefix
- **Validation**: Zod schemas with zod-validation-error for user-friendly messages
- **Build**: esbuild for production bundling with selective dependency bundling

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Current Storage**: In-memory storage (MemStorage class) with interface ready for database migration
- **Schema Design**: Users table and contact_inquiries table with Zod validation schemas

### Project Structure
```
client/           # React frontend
  src/
    components/ui/  # shadcn/ui components
    pages/          # Route components
    hooks/          # Custom React hooks
    lib/            # Utilities and query client
server/           # Express backend
  index.ts        # Entry point
  routes.ts       # API route definitions
  storage.ts      # Data access layer
  vite.ts         # Dev server integration
  static.ts       # Production static serving
shared/           # Shared types and schemas
  schema.ts       # Drizzle schemas and Zod validators
```

### Development vs Production
- **Development**: Vite dev server with HMR, integrated with Express via middleware
- **Production**: Static files served from dist/public, server bundled to dist/index.cjs

## External Dependencies

### Database
- **PostgreSQL**: Configured via DATABASE_URL environment variable
- **Drizzle Kit**: For schema migrations (db:push command)

### UI Framework
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, select, tabs, etc.)
- **Lucide React**: Icon library

### Third-Party Services
- **Google Fonts CDN**: Sora, Inter, JetBrains Mono typefaces

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator