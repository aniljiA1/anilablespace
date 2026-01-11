# 📚 Product Data Explorer — Full-Stack Assignment

A production-minded **Product Exploration Platform** that allows users to navigate from **high-level navigation headings → categories → products → detailed product pages**, powered by **on-demand live scraping** from **World of Books**.

This project demonstrates **scalable full-stack engineering**, **ethical scraping**, **queue-based architecture**, and **modern frontend UX**.

---

## 🔗 Live Links



---

## 🧱 Architecture Overview

Next.js (App Router)
↓ React Query (SWR-style)
NestJS API (REST)
↓ Queue (BullMQ + Redis)
Crawlee + Playwright
↓
WorldOfBooks.com

markdown
Copy code

- **Non-blocking scraping** via background jobs
- **Database-backed caching** to prevent repeated scrapes
- **Idempotent scrape jobs** with deduplication
- **Client + server navigation history persistence**

---

## 🖥️ Frontend

### Tech Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- React Query
- Axios

### Core Pages
- **Landing / Home** — navigation headings
- **Category Drilldown**
- **Product Grid** (pagination + limit)
- **Product Detail Page**
  - Description
  - Ratings & reviews
  - Related products
  - Metadata (ISBN, publisher, etc.)
- **About / Contact / README**

### UX & Accessibility
- Responsive (mobile + desktop)
- Skeleton loaders & smooth transitions
- Semantic HTML
- Keyboard navigation
- WCAG AA color contrast
- `alt` text for all images

---

## 🧠 Backend

### Tech Stack
- NestJS (Node.js + TypeScript)
- PostgreSQL (relational scraping data)
- Prisma ORM
- BullMQ + Redis (job queue)
- Crawlee + Playwright (scraping)
- class-validator (DTO validation)

### Why PostgreSQL?
- Strong relational modeling (navigation → category → product)
- Indexing for `source_id`, `source_url`
- JSON support for flexible metadata
- Production-ready & scalable

---

## 🕷️ Scraping (World of Books)

- **Target**: https://www.worldofbooks.com/
- **Framework**: Crawlee + Playwright
- **Scraped Data**:
  - Navigation headings
  - Categories & subcategories
  - Product cards (title, author, price, image)
  - Product details
  - Reviews & ratings (if available)
  - Related products
  - ISBN, publisher, publication date

### Ethical Scraping
✔ Respects `robots.txt`  
✔ Rate limiting + delays  
✔ Exponential backoff  
✔ Cached results with expiry  
✔ Manual re-fetch allowed  

---

## 🗄️ Database Schema (Core Entities)

- `navigation`
- `category`
- `product`
- `product_detail`
- `review`
- `scrape_job`
- `view_history`

Indexes:
- `source_id`
- `source_url`
- `last_scraped_at`

---

## 🔌 API Endpoints

```http
GET  /navigation
GET  /categories/:slug
GET  /products?category=&page=&limit=
GET  /products/:id
POST /scrape/product
POST /history
Scrapes are triggered on-demand

Requests never block on scraping

Cached data served immediately if valid

🚀 Local Setup
Prerequisites
Node.js 18+

PostgreSQL

Redis

1️⃣ Clone Repository
bash
Copy code
git clone https://github.com/your-username/product-data-explorer.git
cd product-data-explorer
2️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Create .env.local:


3️⃣ Backend Setup
bash
Copy code
cd backend
npm install
npx prisma migrate dev
npm run start:dev
Create .env:

env
Copy code
DATABASE_URL=postgresql://user:password@localhost:5432/products
REDIS_URL=redis://localhost:6379
4️⃣ Scraper Worker
bash
Copy code
cd scraper
npm install
npm run start
🧪 Engineering Highlights
Queue-based scraping (BullMQ)

Idempotent jobs

Safe concurrency limits

Request deduplication

Graceful error handling

Centralized logging

DTO validation

CORS + rate limiting

🔐 Security & Reliability
Environment variables secured

No secrets committed

Input sanitization

Minimal API rate limiting

Retry + backoff for external calls

📈 Observability
Console + file logging

Job status tracking

Error capture per scrape job

🧩 Future Improvements
Auth + user accounts

Full-text search

Scheduled re-scrapes

Admin dashboard

Elasticsearch

CDN image proxy

📝 Notes
This project was built specifically for a production-grade full-stack assessment, emphasizing clean architecture, ethical scraping, and scalability over shortcuts.

👤 Author
Anil Kumar
