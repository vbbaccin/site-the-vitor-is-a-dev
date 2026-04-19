# Portfolio - Vitor Bidinotto Baccin

Landing page profissional estática desenvolvida com React, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tech Stack

- **React 18** com TypeScript
- **Vite** para build otimizado
- **Tailwind CSS** para estilização utilitária
- **Framer Motion** para animações fluidas
- **shadcn/ui** para componentes base
- **Lucide React** para ícones

## 📋 Estrutura do Projeto

```
src/
├── components/
│   ├── AnimatedElement.tsx       # Wrapper para animações de entrada
│   ├── GradientBG.tsx            # Background com gradiente dinâmico
│   ├── HeroSection.tsx           # Seção hero com CTA
│   ├── SkillsSection.tsx         # Grid de tecnologias
│   ├── ProjectsSection.tsx       # Cards de projetos destacados
│   ├── FooterSection.tsx         # Rodapé e contato
│   └── ui/
│       └── button.tsx            # Componente Button
├── lib/
│   └── utils.ts                  # Utilitários (cn, etc)
├── App.tsx                       # Componente principal
├── main.tsx                      # Entry point
└── index.css                     # Estilos globais e animações
```

## ⚡ Quick Start

### 1. Instalação

```bash
npm install
```

### 2. Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
```

Isso gera uma pasta `dist/` com os arquivos estáticos prontos para deploy.

## 🌐 Deploy no Cloudflare Pages

### Opção 1: Conectar via GitHub (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Vá em **Workers & Pages** → **Pages** → **Create**
4. Selecione seu repositório GitHub
5. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Clique em **Save and Deploy**

### Opção 2: Deploy Manual

```bash
# Instalar Wrangler CLI
npm install -g wrangler

# Fazer login
wrangler login

# Deploy
wrangler pages deploy dist/
```

## 🎨 Customização

### Alterar Cores e Tema

Edite `tailwind.config.js`:

```javascript
colors: {
  neon: {
    cyan: "#00d9ff",
    purple: "#8a2be2",
    blue: "#0066ff",
  },
}
```

### Adicionar/Modificar Projetos

Edite o array `projects` em `src/components/ProjectsSection.tsx`

### Atualizar Informações de Contato

Edite os links em `src/components/FooterSection.tsx`

## 📱 Responsividade

O layout é totalmente responsivo:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚙️ Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

```
VITE_GITHUB_URL=seu_github
VITE_LINKEDIN_URL=seu_linkedin
VITE_EMAIL=seu_email
```

## 🎬 Animações

Todas as seções têm animações de fade-in ao scroll. Customize em:

- `tailwind.config.js` - Defina durações e delay
- `src/components/AnimatedElement.tsx` - Configure comportamento de entrada
- `src/index.css` - Adicione novas keyframes

## 📊 Performance

- Build estático (~50KB gzipped)
- Lazy loading de imagens
- Otimização de CSS
- Nenhuma dependência heavy

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Iniciar dev server
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Verificar erros TypeScript
```

## 📝 Licença

MIT - Vitor Bidinotto Baccin

## 🤝 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Deploy**: the-vitor.is-a.dev
