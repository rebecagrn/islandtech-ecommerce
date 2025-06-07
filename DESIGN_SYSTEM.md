# Island Tech Commerce - Design System

## 1. Arquitetura Geral

### Diagrama de Componentes

```
├── src/
│   ├── app/                # Páginas e entrypoints
│   ├── components/
│   │   ├── layout/         # Header, Footer, Layout
│   │   ├── product/        # Componentes específicos de produto
│   │   ├── shared/         # Primitivos de UI reutilizáveis (Card, IconButton, ícones, etc)
│   │   └── ui/             # Componentes de seção e recursos
│   └── types/              # Tipos TypeScript
└── public/                 # Imagens e assets estáticos
```

- **shared/**: Contém componentes genéricos e ícones usados em todo o app (ex: Card, IconButton).
- **ui/**: Componentes de seção, cards de destaque, sliders, etc.
- **product/**: Componentes específicos de produto (ex: ProductCard).

### Fluxo de Dados

- Dados tipados e mockados em `/data/data.ts`.
- Estado global mínimo, props drilling reduzido via composição.
- Componentes compartilham primitivos de `shared` para consistência visual.

### Modelo de Estado

```typescript
interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  reviews: number;
  // outros campos necessários
}
```

## 2. Componentes Principais

### Layout Components

- **LandingHeader**: Navegação principal e logo
- **Footer**: Links úteis e informações da empresa

### Product Components

- **ProductCard**: Card de produto detalhado
- **ProductSidebarCard**: Card lateral de produto

### UI Components

- **Card** (em `shared/`): Primitivo base para todos os cards
- **IconButton** (em `shared/`): Botão de ícone reutilizável
- **Ícones** (em `shared/`): ArrowTopRightIcon, HeartIcon, etc
- **AvatarsGroup**: Grupo de avatares
- **HeroSection**: Seção principal do landing
- **MoreProductsCard**, **DownloadsCard**, **ListeningReleasedCard**, **PopularColorsCard**: Cards de seção

## 3. Gerenciamento de Dados

- Dados mockados em `/data/data.ts`
- Tipagem forte com TypeScript
- Interfaces bem definidas para cada entidade

## 4. Decisões Técnicas

- **Next.js**: SSR, roteamento moderno, otimização de imagens
- **Tailwind CSS**: Design system responsivo e rápido
- **Componentização**: Primitivos em `shared/`, seções em `ui/`, produto em `product/`
- **Performance**: Lazy loading de imagens, otimização de bundles
- **Acessibilidade**: HTML semântico, alt texts, navegação por teclado
- **Design**: Pixel-perfect, glassmorphism, gradientes, responsividade mobile/desktop
