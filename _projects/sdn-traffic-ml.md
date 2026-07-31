---
layout: page
title: SDN Traffic Provisioning
description: ML — machine learning for traffic flow provisioning in software-defined networks.
importance: 4
category: ML and AI
---

<div class="case-study case-study--research" markdown="1">

<div class="case-hero">
  <p class="case-kicker">ML and AI · Networking</p>
  <h2 class="case-headline">Learn how to provision SDN flows</h2>
  <p class="case-lead">
    A machine-learning approach for traffic flow provisioning in software-defined networks —
    learned policies instead of brittle hand-tuned rules under dynamic load.
  </p>
  <p class="case-links">
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="/publications/">Publications</a>
  </p>
</div>

<div class="research-block">
  <strong>System</strong>
  An SDN control-plane workflow where traffic measurements feed ML models that recommend or assign flow / path provisioning decisions, evaluated in SDN settings (ICOIN and related work).
</div>

<div class="research-block">
  <strong>Problem</strong>
  Static or manually tuned SDN provisioning fails when traffic mixes shift. Operators need adaptive policies without rewriting OpenFlow logic for every regime.
</div>

<div class="research-block">
  <strong>Our contribution</strong>
  Cast flow provisioning as a learning problem; built models for SDN path/flow decisions under changing load; demonstrated the approach in published networking venues.
</div>

### Achievements

- Peer-reviewed ML-for-SDN provisioning work  
- Clear separation of measurement → learn → provision loop  

</div>
