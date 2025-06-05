# Island Tech Commerce - Design System

## 1. Arquitetura Geral

### Diagrama de Componentes

```
├── pages/
│   ├── index.tsx (Página Principal)
│   └── produto/[id].tsx (Página de Detalhes)
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductDetails.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Image.tsx
└── data/
    └── data.json
```

### Fluxo de Dados

- Dados são carregados do JSON local
- Estado global gerenciado com React Context
- Props drilling minimizado através de composição de componentes

### Modelo de Estado

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  // outros campos necessários
}

interface AppState {
  products: Product[];
  selectedProduct: Product | null;
  filters: {
    category: string;
    priceRange: [number, number];
  };
}
```

## 2. Componentes Principais

### Layout Components

- **Header**: Navegação principal e logo
- **Footer**: Links úteis e informações da empresa
- **Layout**: Wrapper para páginas com estrutura comum

### Product Components

- **ProductCard**: Card de produto com imagem, título e preço
- **ProductGrid**: Grid responsivo de produtos
- **ProductDetails**: Visualização detalhada do produto

### UI Components

- **Button**: Botões reutilizáveis com variantes
- **Input**: Campos de formulário padronizados
- **Image**: Componente de imagem otimizado

## 3. Gerenciamento de Dados

### Estrutura dos Dados

- Dados mockados em `/data/data.json`
- Tipagem forte com TypeScript
- Interfaces bem definidas para cada entidade

### Estratégia de Persistência

- Dados carregados via import direto do JSON
- Simulação de API com funções assíncronas
- Cache local para melhor performance

### Mecanismos de Busca e Filtragem

- Filtros por categoria
- Busca por texto
- Ordenação por preço/relevância

## 4. Decisões Técnicas

### Tecnologias e Bibliotecas

- **Next.js**: SSR, roteamento e otimização
- **TypeScript**: Tipagem estática e melhor DX
- **Tailwind CSS**: Estilização rápida e consistente

### Padrões de Design

- Atomic Design para componentes
- Mobile First para responsividade
- Componentes funcionais com hooks
- Composição sobre herança

### Considerações Técnicas

- **Performance**:
  - Code splitting automático
  - Lazy loading de imagens
  - Otimização de bundles
- **Usabilidade**:
  - Feedback visual em interações
  - Estados de loading
  - Mensagens de erro claras
- **Escalabilidade**:
  - Estrutura modular
  - Componentes reutilizáveis
  - Fácil manutenção
