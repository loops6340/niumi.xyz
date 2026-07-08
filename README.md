# Ñumi.xyz

Ola, esta este es el codigo fuente de la página [Ñumi.xyz](https://ñumi,xyz)

## Build

Como esta hecho en Next.js (Por ahora), se puede iniciar como cualquier proyecto de dicho framework

```bash
npm run dev
# o
pnpm dev
```

```bash
npm run build
# o
pnpm build
```

**Importante**, para que el proyecto funcione, debes crear un bot de discord el cual debe estar en un server donde tenga algún rol que le permita poder leer los mensajes de los canales del server.

Tambien debes añadir la id de un canal del server que servirá como el "chat" de la página (en realidad leerá los mensajes de dicho canal, y cuando quieras enviar un mensaje, los enviará allí, técnicamente el que hace la mayoría del trabajo es discord)

.env

```bash
TOKEN=<discord-bot-token>
CHANNEL_ID=<discord-channel-id>
```

## Partes del proyecto

| Objetivo              | Implementado      |
| --------------------- | ----------------- |
| Página principal      | ✅ Si             |
| /Chat (discord)       | ✅ Si (casi todo) |
| /Archivos             | No                |
| /Tareas               | No                |
| /Chat (db)            | No                |
| Sistema de cuentas... | No                |
