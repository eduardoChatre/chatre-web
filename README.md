# Chatre Web

Landing page comercial de [Chatre](https://chatre.io), una empresa de automatización digital e inteligencia artificial que conecta agentes, mensajería, datos y procesos de negocio.

## Tecnologías

- Next.js 16 con App Router
- React 19
- TypeScript estricto
- Tailwind CSS 4
- React Server Components; JavaScript cliente únicamente para la navegación móvil

La interfaz usa una pila tipográfica del sistema, SVG propio y CSS. El build no descarga fuentes ni requiere recursos visuales remotos.

## Instalación y desarrollo

Requiere una versión de Node.js compatible con Next.js 16.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre `http://localhost:3000`. Comandos de validación:

```bash
npm run lint
npm run build
```

## Variables de entorno

| Variable | Uso | Respaldo |
| --- | --- | --- |
| `NEXT_PUBLIC_BOOKING_URL` | Enlace para solicitar diagnóstico | Correo a la dirección de contacto |
| `NEXT_PUBLIC_WHATSAPP_URL` | Enlace oficial de WhatsApp | Correo a la dirección de contacto |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Correo público | `hola@chatre.io` |

No se inventa un número de WhatsApp. Si su variable está vacía, la interfaz ofrece contacto por correo.

## Estructura

- `src/app`: rutas, layout, SEO, manifest e iconos generados.
- `src/components`: secciones reutilizables y navegación accesible.
- `src/data`: navegación y contenido repetitivo.
- `src/lib`: configuración pública del sitio y valores de respaldo.
- `public`: recursos estáticos locales.

## Despliegue

El proyecto está preparado para Vercel. Configura las variables públicas en el entorno del proyecto, despliega la rama autorizada y asigna `chatre.io` como dominio de producción. La identidad y la separación de configuración dejan preparado un futuro portal independiente en `app.chatre.io`; esta landing no incluye autenticación, base de datos ni lógica del portal.

Las rutas legales actuales son provisionales y requieren revisión profesional antes del lanzamiento definitivo.
