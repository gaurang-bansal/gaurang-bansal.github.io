---
layout: page
title: AdScrape
description: Founder — Meta Ad Library intelligence platform. Dashboard + REST API over 240M+ Facebook & Instagram ads.
img: assets/img/projects/adscrape.png
importance: 1
category: Product
---

<div class="case-study" markdown="1">

<div class="case-hero">
  <p class="case-kicker">Product · Founder · 2025–Present</p>
  <h2 class="case-headline">The Meta Ad Library, unlocked</h2>
  <p class="case-lead">
    <a href="https://adscrape.in/" target="_blank" rel="noopener noreferrer">AdScrape</a> is a Meta Ad Library intelligence platform I founded —
    a no-code <strong>Discover dashboard</strong> and a production <strong>REST API</strong> on one account.
    Search <strong>240M+</strong> live Facebook &amp; Instagram ads, automate competitor monitoring, and skip Graph tokens, proxies, and Selenium.
  </p>
  <p class="case-links">
    <a class="btn btn-primary btn-sm z-depth-0" href="https://adscrape.in/" target="_blank" rel="noopener noreferrer">Live product</a>
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="https://adscrape.in/docs" target="_blank" rel="noopener noreferrer">API docs</a>
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="https://adscrape.in/pricing" target="_blank" rel="noopener noreferrer">Pricing</a>
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="https://adscrape.in/signup" target="_blank" rel="noopener noreferrer">Sign up</a>
  </p>
</div>

<div class="case-stats">
  <div><strong>240M+</strong><span>Ads searchable</span></div>
  <div><strong>500</strong><span>Ads / API call</span></div>
  <div><strong>12</strong><span>REST endpoints</span></div>
  <div><strong>250+</strong><span>Regions</span></div>
  <div><strong>$49</strong><span>Plans from / mo</span></div>
</div>

{% include figure.liquid path="assets/img/adscrape-logo.png" class="case-logo img-fluid rounded" alt="AdScrape" %}

### Problem

Meta’s Ad Library is a public transparency tool — but the native site is a **single-search browser UI**. Teams cannot programmatically paginate, pull structured JSON, bulk-download creatives, resolve brand names to Page IDs, or run always-on competitor watches. Home-grown scrapers need proxies, break often, and never ship a product UX. Graph API access requires apps, review, and quotas.

### What AdScrape ships

Five product surfaces on one account (from [adscrape.in](https://adscrape.in/)):

| Surface | What it does |
| --- | --- |
| **Platform (Discover)** | Keyword / brand / Ad Library URL search, country filters, Bookmarks, notes, CSV/JSON export |
| **REST API** | Same data as the dashboard — `X-API-Key`, cursor sessions, ≤500 ads/call |
| **Ad Analyser** | Paste archive ID or URL → AI competitive teardown (strategy, strengths, weaknesses, copy / improve / attack) |
| **Brand Spy** | Re-scrape advertisers on a cadence; weekly intel email (hooks, CTAs, A/B tests) |
| **Keyword Spy** | Category / phrase watch — share of voice, rising hooks, intent mix |

### Competitive edge

Industry-first **Meta brand typeahead** (`POST /api/v1/suggestions`) — wraps Meta’s own suggestion source so partial strings, slugs, and IG handles resolve to verified Page IDs with likes, IG followers, and advertiser country. Typical scrapers only accept exact strings.

| Capability | AdScrape | Other scrapers | Meta Graph API |
| --- | --- | --- | --- |
| Brand typeahead | Live, sub-second | Exact strings only | Not exposed |
| Ads per call | Up to **500** | ~30–50 | Graph quotas |
| Cursor pagination | Stateful session | Often offset | Standard paging |
| Cloaked creative CDN | Yes (`/media`) | Rare | No |
| No-code dashboard | Discover + export | Mostly API-only | Dev-only |
| Graph token / app review | **Not required** | Usually not | Required |

### Core API surface

- `POST /api/v1/search` — keyword, brand, or Ad Library URL  
- `POST /api/v1/search/next` — cursor pagination (≤500 / call)  
- `GET /api/v1/suggestions` — Meta brand typeahead  
- `GET /api/v1/ads/{archive_id}` — full ad record  
- `POST /api/v1/ads/analyze` — AI Models teardown  
- `GET /api/v1/media/{archive_id}` — image / video bytes  

### Pricing (live)

Free trial credits on signup (no card). Paid plans: **Starter $49**, **Pro $99** (trackers + weekly reports), **Enterprise $299** — credit-based, ~$0.01 → ~$0.003 per ad as volume rises.

### Stack

Next.js · React · FastAPI / Python · PostgreSQL · AWS · managed scrape infra & cloaked CDN

</div>
