# Jhapu Documentation

Public product documentation for Jhapu ERP, intended for `docs.jhapu.com`.

## Content boundary

This repository contains public user, administrator and approved developer documentation. Never add passwords, tokens, tenant database details, provider credentials, private infrastructure diagrams or internal security runbooks.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Create the static export deployed to AWS S3 and CloudFront with:

```bash
npm run build:aws
```

The AWS-ready files are written to `out/`.

## Writing documentation

- Keep instructions task-oriented and use the same labels users see in Jhapu.
- Explain tenant, company and financial-year scope where relevant.
- Add or update release notes when behaviour changes.
- Include failure and permission guidance for sensitive operations.
- Use redacted example data in screenshots.

Current guides live as routes under `app/`. Shared navigation and search metadata are in `app/docs-data.ts`.
