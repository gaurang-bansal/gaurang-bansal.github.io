---
layout: page
title: Video Intelligence Agent
description: AI agent — hours of video → scene detection for investigations & court. Used by Govt. of Canada & Singapore; outperformed 12 labs.
importance: 1
category: Research
---

<div class="case-study case-study--research" markdown="1">

<div class="case-hero">
  <p class="case-kicker">Research · Video intelligence · Government use</p>
  <h2 class="case-headline">Hours of video → the scenes that matter</h2>
  <p class="case-lead">
    A Video Intelligence Agent that analyzes long-form footage to identify particular scenes —
    built for criminal investigation and court workflows. Used with the
    <strong>Government of Canada</strong> and <strong>Singapore</strong>, and evaluated as outperforming
    <strong>twelve competing labs</strong>.
  </p>
</div>

<div class="case-stats">
  <div><strong>Hours→scenes</strong><span>Long-form video</span></div>
  <div><strong>Gov</strong><span>Canada · Singapore</span></div>
  <div><strong>12 labs</strong><span>Outperformed</span></div>
  <div><strong>Court</strong><span>Investigation-ready</span></div>
</div>

<div class="research-block">
  <strong>System</strong>
  End-to-end video intelligence pipeline: ingest long recordings → hierarchical encoding (frame → shot → scene → case context) → retrieve / rank scenes matching investigative queries → human-verifiable outputs for case files.
</div>

<div class="research-block">
  <strong>Problem</strong>
  Investigators and legal teams drown in CCTV, bodycam, and case video. Finding a specific event across hours of footage is slow and error-prone when done only with linear human review. Prior lab systems often lacked hierarchy, auditability, or throughput for real case loads.
</div>

<div class="research-block">
  <strong>Our contribution</strong>
  Designed a deep networked agent with explicit <em>hierarchy</em>, <em>layering</em>, <em>data mapping</em>, and <em>pipelining</em> — so scene search is structured and scalable rather than a flat embedding sweep. Mapped raw video signals into searchable scene/event records suitable for investigation and court use.
</div>

### Method

| Layer | Role |
| --- | --- |
| **Hierarchy** | Multi-level representations — frame → shot → scene → case |
| **Layering** | Stacked perception and reasoning (detection, temporal linking, semantics) |
| **Data mapping** | Raw signals → structured scene / event records |
| **Pipelining** | Ingest → encode → retrieve → verify at hours-scale throughput |

### Achievements

- Deployed / used in government contexts (**Canada**, **Singapore**)
- Benchmarked ahead of **twelve labs** in comparative evaluation
- Practical path from bulk video to investigation- and court-usable scene intelligence

</div>
