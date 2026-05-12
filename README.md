# S.S Enterprise Website

**Tech Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import repo
3. Click Deploy — done!
4. Add custom domain `ssenterprisepk.com` in Vercel dashboard
5. In Cloudflare DNS, add:
   - Type: `CNAME` | Name: `@` | Value: `cname.vercel-dns.com`
   - Type: `CNAME` | Name: `www` | Value: `cname.vercel-dns.com`

## Folder Structure

```
src/
  app/
    layout.tsx      ← metadata, fonts
    page.tsx        ← main page (imports all sections)
    globals.css     ← tailwind + fonts + base styles
  components/
    sections/
      Navbar.tsx
      Hero.tsx
      Ticker.tsx
      Services.tsx
      Products.tsx
      WhyUs.tsx
      DirectorMessage.tsx
      Clients.tsx
      Contact.tsx
      Footer.tsx
  lib/
    data.ts         ← all company content (edit here)
    utils.ts        ← cn() helper
```

## To Update Content

Edit `src/lib/data.ts` — all company info, products, clients in one place.
