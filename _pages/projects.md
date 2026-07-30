---
layout: page
title: Projects
permalink: /projects/
description: State-of-the-art products, industry AI evaluation, and peer-reviewed systems research.
nav: true
nav_order: 3
display_categories: [Product, Industry, Research]
horizontal: true
---

<div class="page-hero projects-hero">
  <p class="page-kicker">Work</p>
  <h2 class="page-hero-title">Built end-to-end — from research to shipped systems</h2>
  <p class="page-hero-lead">
    Flagship products in ad intelligence &amp; generative creative, frontier-model evaluation with Anthropic via Turing,
    and security research published in top IEEE/ACM venues.
  </p>
</div>

<div class="impact-strip" aria-label="Projects highlights">
  <div class="impact-card">
    <span class="impact-value" data-count="5" data-suffix="">0</span>
    <span class="impact-label">Featured case studies</span>
  </div>
  <div class="impact-card">
    <span class="impact-value" data-count="240" data-suffix="M+">0</span>
    <span class="impact-label">Meta ads searchable</span>
  </div>
  <div class="impact-card">
    <span class="impact-value" data-count="30" data-suffix="M+">0</span>
    <span class="impact-label">Creative library (QuickAds)</span>
  </div>
  <div class="impact-card">
    <span class="impact-value" data-count="30" data-suffix="+">0</span>
    <span class="impact-label">Research papers</span>
  </div>
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
