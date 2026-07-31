---
layout: page
title: UAV Security
description: Research — PUF/crypto authentication, attestation, and SECaaS for UAV swarms under resource constraints.
importance: 4
category: Research
---

<div class="case-study case-study--research" markdown="1">

<div class="case-hero">
  <p class="case-kicker">Research · UAV swarms · Ph.D., NUS</p>
  <h2 class="case-headline">Trust for aerial swarms that cannot run heavyweight PKI</h2>
  <p class="case-lead">
    Research on securing <strong>UAV–ground-station</strong> and <strong>UAV–UAV</strong> communication:
    lightweight PUF-based authentication, swarm-scale attestation, fault-resilient designs, and SECaaS economics —
    published in IEEE TVT and major networking venues.
  </p>
  <p class="case-links">
    <a class="btn btn-primary btn-sm z-depth-0" href="/publications/">Selected Publications</a>
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="/assets/pdf/SecAuthUAV.pdf">SecAuthUAV PDF</a>
  </p>
</div>

<div class="case-stats">
  <div><strong>SecAuthUAV</strong><span>IEEE TVT</span></div>
  <div><strong>S-MAPS</strong><span>Swarm auth</span></div>
  <div><strong>SHOTS</strong><span>Attestation</span></div>
  <div><strong>SECaaS</strong><span>Game theory</span></div>
</div>

<div class="research-block">
  <strong>System</strong>
  Protocol suite for UAV networks: mutual authentication (UAV↔GS, UAV↔UAV), scalable swarm authentication/attestation (S-MAPS, SHOTS, clustering topologies), and Stackelberg SECaaS models for multi-stakeholder aerial security services.
</div>

<div class="research-block">
  <strong>Problem</strong>
  Drones are mobile, failure-prone, and compute-poor. Classic certificates and heavyweight crypto do not scale to swarms; physical capture and noisy PUFs break naive hardware-rooted schemes.
</div>

<div class="research-block">
  <strong>Our contribution</strong>
  Designed and formally analyzed SecAuthUAV; built swarm-efficient auth/attestation; added secret-sharing / fault-resilient variants; formulated UAV SECaaS pricing. Collaborations across NUS and partner labs.
</div>

### Achievements

| Theme | Result |
| --- | --- |
| Mutual auth | SecAuthUAV — lightweight PUF auth with formal security (IEEE TVT) |
| Swarm scale | S-MAPS / clustering — authenticate many UAVs efficiently |
| Attestation | SHOTS — auth + attestation under mobility |
| Resilience | SSS / fault-resilient designs for noisy PUFs |
| Economics | UAV SECaaS Stackelberg models |

</div>
