# Landing Page Agencia Creativa - Angular 18

Landing page atrevida y moderna para agencias creativas, estudios de diseño, agencias de marketing digital y portfolios profesionales. Diseño oscuro con efectos neón impactantes.

## 🎨 Características

### Diseño Creativo Atrevido
- Tema oscuro con colores neón (rosa, verde, amarillo, morado)
- Tipografía Space Grotesk (moderna y tech)
- Efectos de glow y animaciones impactantes
- Portfolio-driven design

### 📋 Componentes

1. **Navbar** - Header oscuro con logo neón
2. **Hero** - Mensaje impactante con estadísticas (200+ proyectos, 15 premios)
3. **Services** - 6 servicios creativos (Diseño, Web, UX/UI, Motion, Marketing, Branding)
4. **Portfolio** - Grid de 6 proyectos con hover effects
5. **Process** - 4 pasos del proceso creativo
6. **Team** - 3 miembros del equipo con avatars neón
7. **Awards** - 4 premios y reconocimientos
8. **Contact** - Formulario oscuro con efectos glow
9. **Footer** - Footer minimalista con ubicaciones globales

## 🌈 Diseño

- **Tema**: Oscuro con neón
- **Colores neón**: Rosa (#FF006E), Verde (#00F5A0), Amarillo (#FFC700), Morado (#A259FF)
- **Fondo**: Negro profundo (#0A0A0A)
- **Tipografía**: Space Grotesk
- **Efectos**: Glow, blur, gradientes, animaciones

## 🎯 Público Objetivo

Perfecto para:
- ✅ **Agencias creativas** (diseño, branding, publicidad)
- ✅ **Estudios de diseño** (gráfico, web, UX/UI)
- ✅ **Agencias de marketing digital**
- ✅ **Freelancers creativos** (portfolio personal)
- ✅ **Productoras audiovisuales**
- ✅ **Agencias de desarrollo web**

## 💡 Elementos Creativos Clave

### Diseño Atrevido
- ✅ **Colores neón** con efectos glow
- ✅ **Fondo oscuro** profesional
- ✅ **Animaciones** suaves y modernas
- ✅ **Portfolio grid** con hover impactante
- ✅ **Tipografía bold** y llamativa

### Credibilidad Creativa
- ✅ 200+ proyectos completados
- ✅ 15 premios internacionales
- ✅ 100% satisfacción del cliente
- ✅ Reconocimientos (Awwwards, CSS Design Awards, FWA, Webby)
- ✅ Presencia global (CDMX, Madrid, NYC)

### Portfolio Showcase
- ✅ 6 proyectos destacados
- ✅ Categorías variadas
- ✅ Colores únicos por proyecto
- ✅ Hover effects elegantes

## 🚀 Tecnología

- **Angular 18**
- **Standalone Components**
- **TypeScript 5.5**
- **SCSS** con variables CSS
- **Efectos CSS** avanzados (glow, blur, gradientes)

## 📦 Requisitos

- Node.js 20.19+
- npm 10+

## 🛠️ Instalación

1. Usar Node.js 20:
```bash
nvm use
```

2. Instalar dependencias:
```bash
npm install
```

## 🚀 Desarrollo

```bash
npm start
```

Abrir: `http://localhost:4200/`

## 🏗️ Build

```bash
npm run build
```

## 🎨 Personalización

### Cambiar colores neón
Editar `src/styles.scss`:
```scss
:root {
  --neon-pink: #FF006E;
  --neon-green: #00F5A0;
  --neon-yellow: #FFC700;
  --neon-purple: #A259FF;
}
```

### Modificar portfolio
Archivo: `src/app/components/portfolio/portfolio.ts`
```typescript
projects = [
  {
    title: 'Tu Proyecto',
    client: 'Cliente',
    category: 'Categoría',
    color: '#FF006E'
  }
]
```

### Actualizar premios
Archivo: `src/app/components/awards/awards.ts`

### Cambiar equipo
Archivo: `src/app/components/team/team.ts`

## 📱 Responsive

- ✅ Mobile First
- ✅ Grid adaptativo
- ✅ Menú hamburguesa
- ✅ Animaciones optimizadas

## 🎯 Diferencias vs Otras Landings

| Aspecto | Agencia Creativa |
|---------|------------------|
| **Público** | Agencias, diseñadores, creativos |
| **Tono** | Atrevido, moderno, artístico |
| **Colores** | Negro + neón (rosa/verde/amarillo) |
| **Enfoque** | Portfolio, creatividad, premios |
| **CTAs** | "Ver proyectos", "Hablemos" |
| **Estilo** | Dark theme, glow effects, bold |

## 📋 Estructura

```
landing-agencia/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/         # Header neón
│   │   │   ├── hero/           # Hero impactante
│   │   │   ├── services/       # 6 servicios
│   │   │   ├── portfolio/      # Grid de proyectos
│   │   │   ├── process/        # 4 pasos
│   │   │   ├── team/           # Equipo creativo
│   │   │   ├── awards/         # Premios
│   │   │   ├── contact/        # Formulario
│   │   │   └── footer/         # Footer
│   │   ├── app.ts
│   │   └── app.html
│   ├── styles.scss             # Tema dark neón
│   └── index.html
├── .nvmrc
└── README.md
```

## 🌈 Paleta de Colores Neón

```
Rosa Neón:      #FF006E
Verde Neón:     #00F5A0
Amarillo Neón:  #FFC700
Morado Neón:    #A259FF
Azul Neón:      #00D9FF

Fondo Oscuro:   #0A0A0A
Cards:          #141414
Texto:          #FFFFFF
Secundario:     #B0B0B0
```

## 🎨 Efectos Especiales

- ✅ **Glow effects** en textos y botones
- ✅ **Blur backgrounds** en shapes
- ✅ **Gradientes neón** en títulos
- ✅ **Animaciones float** en elementos
- ✅ **Pulse glow** en logo dot
- ✅ **Grid de puntos** en fondo

## 📄 Licencia

MIT License

---

**Desarrollado con ❤️ para creativos**
*CREATIX Studio - Portfolio Agency*

