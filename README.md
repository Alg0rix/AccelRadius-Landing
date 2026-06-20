# Accel Radius — Landing Page

Halaman landing Astro + React untuk produk **Accel Radius** (AccelRad) — platform billing & operasi all-in-one untuk ISP.

> **Catatan:** Repo ini berada di dalam [AccelLicense](https://github.com/Alg0rix/AccelRadius-License) sebagai git submodule. AccelLicense adalah server lisensi; **Accel Radius** adalah produk ISP yang dilisensikan olehnya.

## Stack

- [Astro](https://astro.build/) + [React](https://react.dev/) + [Tailwind CSS v4](https://tailwindcss.com/)
- [React Bits](https://reactbits.dev/) — animasi UI
- [Bun](https://bun.sh/)

## Pengembangan

```bash
bun install
bun run dev
```

Buka http://localhost:4321

## Build & Typecheck

```bash
bun run build
bun run typecheck
```

## Produk Terkait

| Repo | Peran |
|------|-------|
| [Accel-Radius/radius](https://github.com/Accel-Radius/radius) | Rilis publik & installer Accel Radius |
| [AccelRad](~/Project/go-proj/AccelRad) | Kode sumber aplikasi (privat) |
| [AccelLicense](https://github.com/Alg0rix/AccelRadius-License) | Server lisensi & konsol admin |