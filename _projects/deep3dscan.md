---
layout: page
title: Deep3DSCan
description: ML — deep residual networks + morphological descriptors for lung cancer classification and 3D segmentation.
importance: 2
category: ML and AI
---

<div class="case-study case-study--research" markdown="1">

<div class="case-hero">
  <p class="case-kicker">ML and AI · Medical imaging</p>
  <h2 class="case-headline">Classify and segment lung cancer in 3D</h2>
  <p class="case-lead">
    <strong>Deep3DSCan</strong> combines deep residual networks with morphological descriptors for
    lung cancer classification and 3D segmentation — bridging CNN feature learning with shape priors used clinically.
  </p>
  <p class="case-links">
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="/publications/">Publications</a>
    <a class="btn btn-outline-primary btn-sm z-depth-0" href="/assets/pdf/lungpaper.pdf">Paper PDF</a>
  </p>
</div>

<div class="research-block">
  <strong>System</strong>
  An end-to-end medical imaging pipeline: volumetric CT inputs → residual CNN backbone → morphological descriptor fusion → dual outputs for malignancy classification and 3D nodule segmentation.
</div>

<div class="research-block">
  <strong>Problem</strong>
  Pure deep models can miss clinically meaningful shape cues; handcrafted morphology alone lacks representational power. Lung screening needs both accurate class decisions and spatially precise segmentations.
</div>

<div class="research-block">
  <strong>Our contribution</strong>
  Fused residual deep features with morphological descriptors in a unified framework; framed classification and 3D segmentation as joint goals; demonstrated a practical architecture for volumetric lung-cancer analysis.
</div>

### Achievements

- Published medical-imaging ML system with dual-task framing  
- Showed how morphology + deep residuals improve nodule characterization  
- Artifact available via project PDF on this site  

</div>
