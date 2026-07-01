# Stage 0, "build-stage", based on Bun, to build the static Astro site
FROM oven/bun:1 AS build-stage

WORKDIR /app

COPY package.json bun.lock /app/

RUN bun install --frozen-lockfile

COPY . /app

RUN bun run build


# Stage 1, based on Nginx, to serve only the compiled static site
FROM nginx:1

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
