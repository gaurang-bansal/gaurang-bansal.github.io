---
layout: page
title: PhishNet
description: ML/LLM — Google × NUS phishing detection with unsupervised learning and a real-time Chrome plugin path.
importance: 6
category: ML and AI
---

<div class="case-study" markdown="1">

<div class="case-hero">
  <p class="case-kicker">Research · Google Collaborator · 2023–2024</p>
  <h2 class="case-headline">PhishNet — catching phishing before users do</h2>
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
  <div><strong>1-shot</strong><span>Learning path</span></div>
  <div><strong>Chrome</strong><span>Plugin prototype</span></div>
  <div><strong>LLMs</strong><span>+ vision pipeline</span></div>
</div>

### State of the art (and the gap)

Classic defenses rely on **URL blacklists** and supervised classifiers trained on large labeled corpora. Attackers evade exact matches by mutating domains, cloning brand logos, and rotating infrastructure. Labeling lags; false positives hurt browser UX.

**Prior art** (e.g. list-based feeds, logo-matching systems such as Phishpedia-style detectors) still struggles with zero-day lookalikes and annotation cost. **PhishNet / PhishDynamics** push toward unsupervised / one-shot learning plus LLM-assisted semantics and an in-browser delivery path.

### My contribution

- Designed and implemented domain-specific + **logo/visual similarity** signals for site identification
- Built deep-learning pipelines (image transformers, autoencoders, classifiers) with reduced manual annotation
- Integrated an LLM-assisted analysis path for page/URL semantics
- Prototyped a **Chrome extension** for real-time URL verification with server-side inference
- Collaborated with Google and NUS researchers on evaluation against strong baselines

### Approach

| Layer | Methods |
| --- | --- |
| Visual | Logo / brand similarity, image transformers |
| Representation | Autoencoders, one-shot / unsupervised learning |
| Language | LLM-assisted page / URL semantics |
| Delivery | Chrome extension + server-side inference |
| Ops | Continuous adaptation to cut training-set churn |

### Outcomes

Reported evaluation reached **~99.6% accuracy** in the study setting, comparing favorably with baselines such as Phishpedia, OpenPhish, and VirusTotal-style feeds. The work bridges academic phishing research and **productizable browser security**.

<p class="case-note">*Accuracy from collaboration / project evaluation notes — not a public Google product claim.</p>

</div>
