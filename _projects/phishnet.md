---
layout: page
title: PhishNet
description: ML/LLM — Google × NUS phishing detection with unsupervised learning and a real-time Chrome plugin path.
importance: 2
category: Research
---

<div class="case-study case-study--research" markdown="1">

<div class="case-hero">
  <p class="case-kicker">Research · Google × NUS · 2023–2024</p>
  <h2 class="case-headline">Catch phishing before users do</h2>
  <p class="case-lead">
    Research collaboration with Google
    (<a href="https://sites.google.com/site/psaiteja/home" target="_blank" rel="noopener noreferrer">Sai Teja Peddinti</a>)
    and Dinil Mon Divakaran (NUS) on automated phishing identification —
    unsupervised / one-shot learning, LLM-assisted semantics, and a real-time Chrome plugin path.
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
  <div><strong>LLMs</strong><span>+ vision</span></div>
</div>

<div class="research-block">
  <strong>System</strong>
  PhishNet / PhishDynamics — a multi-signal phishing detector combining logo/visual similarity, deep representation learning (transformers, autoencoders, classifiers), LLM-assisted URL/page semantics, and a Chrome extension for real-time verification with server-side inference.
</div>

<div class="research-block">
  <strong>Problem</strong>
  Blacklists and supervised classifiers lag zero-day lookalikes. Labeling is expensive; attackers mutate domains and clone brand logos. Prior systems (list feeds, logo-matchers such as Phishpedia-style detectors) still struggle with annotation cost and novel clones.
</div>

<div class="research-block">
  <strong>Our contribution</strong>
  Built domain + visual similarity pipelines with reduced manual labeling; integrated LLM semantics; prototyped in-browser delivery; evaluated against strong baselines (Phishpedia, OpenPhish, VirusTotal-style feeds) with continuous adaptation to cut training-set churn.
</div>

### Method

| Layer | Methods |
| --- | --- |
| Visual | Logo / brand similarity, image transformers |
| Representation | Autoencoders, one-shot / unsupervised learning |
| Language | LLM-assisted page / URL semantics |
| Delivery | Chrome extension + server-side inference |

### Achievements

- Reported **~99.6% accuracy** in the study setting vs strong baselines  
- Bridged academic phishing research and a **productizable browser path**  
- Collaboration with Google and NUS researchers  

<p class="case-note">*Accuracy from collaboration / project evaluation notes — not a public Google product claim.</p>

</div>
