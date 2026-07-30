---
layout: page
title: Secure UAV & IoT Systems
description: Doctoral research — PUF/crypto authentication & attestation for UAV swarms and constrained IoT networks.
importance: 2
category: Research
---

<div class="case-study" markdown="1">

<div class="case-hero">
  <p class="case-kicker">Research · Ph.D., NUS ECE · 2020–2025</p>
  <h2 class="case-headline">Trust at swarm scale for resource-constrained networks</h2>
  <p class="case-lead">
    Doctoral and collaborative work on authentication, attestation, and privacy for
    <strong>UAV swarms</strong> and <strong>IoT</strong> devices with tight compute, memory, and energy budgets —
    published across IEEE TVT, IEEE Network, IEEE IoT venues, INFOCOM/Globecom workshops, and ACM.
  </p>
  <p class="case-links">
    <a class="btn btn-primary btn-sm z-depth-0" href="/publications/">Selected Publications</a>
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="/assets/pdf/SecAuthUAV.pdf">SecAuthUAV PDF</a>
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="https://scholar.google.com/citations?user=A-t6Ds8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
  </p>
</div>

<div class="case-stats">
  <div><strong>30+</strong><span>Papers listed</span></div>
  <div><strong>2,200+</strong><span>Citations</span></div>
  <div><strong>IEEE</strong><span>TVT · Network · IoT</span></div>
  <div><strong>PUF</strong><span>Lightweight auth</span></div>
</div>

<figure class="case-shot case-shot-illust">
  <img src="{{ 'assets/img/projects/screens/uav-network.png' | relative_url }}" alt="UAV network applications and security risks overview" loading="lazy">
  <figcaption>UAV applications and security risks — authentication, interference, and physical capture.</figcaption>
</figure>

### State of the art (and the gap)

UAV/IoT deployments need mutual authentication and attestation, but devices are **resource-constrained** and often physically accessible. Classic PKI and heavyweight protocols do not scale to swarms under mobility and failure. PUF-based schemes help bind keys to hardware, yet many assume ideal PUF responses and one-to-one authentication that does not scale.

### My contribution

- Designed lightweight **PUF-based** UAV–GS and UAV–UAV authentication with formal analysis (**SecAuthUAV**, IEEE TVT)
- Built **swarm-scale** protocols (S-MAPS, location-aware clustering, SHOTS) for time-efficient multi-device auth/attestation
- Addressed noise-tolerant and fault-resilient designs (e.g. secret-sharing variants) under realistic PUF error
- Extended into SECaaS / game-theoretic pricing for multi-stakeholder UAV security services
- Collaborated across NUS, NTU, Carleton, NJIT, BITS Pilani, and others

### Flagship results

| Theme | Representative work | Contribution |
| --- | --- | --- |
| UAV ↔ GS / UAV ↔ UAV | SecAuthUAV (IEEE TVT) | Lightweight PUF mutual auth + formal security |
| Swarm scalability | S-MAPS, clustering topologies | Authenticate many UAVs efficiently |
| Attestation | SHOTS, trusted attestation | Auth + attestation under mobility/failure |
| Resilience | Fault-resilient / SSS variants | Tolerate noisy PUF responses |
| SECaaS | UAV SECaaS Stackelberg models | Security-as-a-service economics |

### Outcomes

Part of a portfolio with **30+ listed publications** and **2,200+ citations**. This line of work established scalable, lightweight trust for aerial and IoT networks under real constraints.

</div>
