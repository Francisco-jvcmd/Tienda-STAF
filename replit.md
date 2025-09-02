# TIENDA DE PRODUCTOS STAF

## Overview

TIENDA DE PRODUCTOS STAF is a single-page e-commerce web application built with React and Vite, designed for an Ecuadorian retail store. The application showcases products across five main categories: Ropa (Clothing), Calzado (Footwear), Cosméticos (Cosmetics), Aseo Personal (Personal Care), and Salud (Health). The store is located in Pifo, Pichincha, Ecuador, and focuses on providing quality products at accessible prices for families.

The application features a responsive design optimized for both desktop and mobile devices, with integrated WhatsApp contact functionality for customer inquiries. The frontend presents a clean, modern interface using shadcn/ui components with a professional color scheme incorporating blues, greens, and oranges that reflect the brand identity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a modern React architecture using functional components with hooks. The frontend is built with Vite as the build tool and bundler for optimal development experience and fast builds. The component structure is organized into:

- **Pages**: Home page showcasing all products and an About page with company information
- **Components**: Reusable UI components including Header, Footer, ProductCard, and WhatsAppButton
- **UI Components**: Complete shadcn/ui component library for consistent design system
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation

The styling approach uses Tailwind CSS with CSS custom properties for theming, ensuring consistent design tokens across the application. The design system includes predefined color schemes, typography scales, and spacing utilities.

### Backend Architecture
The application uses Express.js as the web server framework with TypeScript for type safety. The backend follows a modular architecture with:

- **Route Registration**: Centralized route management with API prefix structure
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management
- **Development Server**: Integrated Vite development server with HMR (Hot Module Replacement)
- **Error Handling**: Centralized error handling middleware for consistent API responses

The server is configured for both development and production environments, with automatic static file serving in production builds.

### Data Management
The application uses a simple in-memory storage system for user data, with a well-defined interface that can be easily extended or replaced with persistent storage solutions. Product data is currently managed as static data structures in TypeScript files, making it easy to migrate to a database-driven approach.

State management on the frontend utilizes React Query (TanStack Query) for server state management, providing caching, synchronization, and error handling for API calls. Local component state is managed using React's built-in useState and useContext hooks.

### Database Design
The application includes Drizzle ORM configuration for PostgreSQL integration, indicating preparation for database-driven functionality. The current schema includes a users table with basic authentication fields (username, password) and UUID primary keys. The Drizzle configuration is set up for schema migrations and supports environment-specific database URLs.

### Responsive Design Strategy
The application implements a mobile-first responsive design using Tailwind CSS breakpoints. The layout adapts seamlessly across device sizes with:
- Collapsible mobile navigation menu
- Responsive product grid layouts that adjust from single-column on mobile to multi-column on desktop
- Optimized typography scales for different screen sizes
- Touch-friendly interface elements for mobile devices

## External Dependencies

### UI Framework and Styling
- **React 18**: Core frontend framework with hooks and functional components
- **Vite**: Build tool and development server for fast builds and HMR
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Radix UI**: Low-level UI primitives for accessibility and customization
- **Lucide React**: Icon library for consistent iconography

### State Management and Data Fetching
- **TanStack React Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation for type-safe data handling

### Backend and Database
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: TypeScript ORM for database operations
- **PostgreSQL**: Relational database (via @neondatabase/serverless)
- **Neon Database**: Serverless PostgreSQL hosting solution

### Development Tools
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for vendor prefixes

### Communication Integration
- **WhatsApp Business API**: Direct customer communication through floating WhatsApp button
- **Font Awesome**: Icon library for social media and communication icons

### Deployment and Hosting
The application is configured for deployment on Vercel with optimized build settings and static asset handling. The build process generates both client-side assets and server bundles for production deployment.

### External Services
- **Unsplash**: Product images sourced from Unsplash for realistic product displays
- **Google Fonts**: Web fonts (Inter) for typography consistency
- **Replit Integration**: Development environment support with runtime error handling