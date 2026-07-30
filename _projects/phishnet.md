---
layout: page
title: PhishNet
description: Google × NUS research — unsupervised / LLM phishing detection with Chrome plugin path; ~99.6% reported accuracy.
img: assets/img/projects/phishnet.png
importance: 1
category: Research
---

<div class="case-study" markdown="1">

<div class="case-hero">
  <p class="case-kicker">Research · Google Collaborator · 2023–2024</p>
  <h2 class="case-headline">PhishNet — real-time phishing defense</h2>
  <p class="case-lead">
    Research collaboration with <a href="https://about.google/" target="_blank" rel="noopener noreferrer">Google</a>
    (<a href="https://sites.google.com/site/psaiteja/home" target="_blank" rel="noopener noreferrer">Sai Teja Peddinti</a>)
    and <strong>Dinil Mon Divakaran</strong> (NUS) on automated phishing identification —
    from one-shot / unsupervised deep learning to a real-time Chrome plugin path.
  </p>
  <p class="case-links">
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="/publications/">Selected Publications</a>
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="https://research.google/" target="_blank" rel="noopener noreferrer">Google Research</a>
  </p>
</div>

<div class="case-stats">
  <div><strong>99.6%</strong><span>Reported accuracy*</span></div>
  <div><strong>1-shot</strong><span>Deep learning path</span></div>
  <div><strong>Chrome</strong><span>Plugin prototype</span></div>
  <div><strong>LLMs</strong><span>+ vision pipeline</span></div>
</div>

### Problem

Phishing sites mutate faster than manual blocklists. Systems that depend on large labeled corpora (or exact URL matching) lag behind attackers who clone brands, swap TLDs, and rotate infrastructure. Production defense needs **high precision**, low annotation cost, and signals that generalize to never-before-seen campaigns.

### PhishNet / PhishDynamics

Working titles from the Google collaboration:

- **PhishNet** — unsupervised / one-shot deep learning for phishing site identification using **domain-specific features** and **logo comparison**, reducing manual annotation.  
- **PhishDynamics** — real-time **Chrome browser plugin** path: immediate URL verification, server-side processing with image transformers, autoencoders, and classifiers; continuous adaptation; privacy-aware design that reduces reliance on brittle external blocklists alone.

Reported evaluation (project notes) reached **~99.6% accuracy**, comparing favorably against baselines such as Phishpedia, OpenPhish, and VirusTotal-style feeds in the study setting.

### Technical approach

| Layer | Methods |
| --- | --- |
| Visual | Logo / brand similarity, image transformers |
| Representation | Autoencoders, one-shot / unsupervised learning |
| Language | LLM-assisted analysis for page / URL semantics |
| Delivery | Chrome extension + server-side inference |
| Ops | Continuous learning to cut manual training-set churn |

### Impact

Bridges academic phishing research and **productizable browser security** — fewer false dependencies on curated lists, faster reaction to novel lookalike sites, and a path from paper methods to an in-browser warning UX.

<p class="case-note">*Accuracy figure from collaboration / CV project notes for the PhishDynamics evaluation setting; not a public Google product claim.</p>

</div>
