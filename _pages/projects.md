---
layout: page
title: Projects
permalink: /projects/
description: Case studies — Fast Ad, AdScrape, QuickAds, Turing, PhishNet, and UAV/IoT security research.
nav: true
nav_order: 3
display_categories: [Product, Industry, Research]
horizontal: true
---

<div class="page-hero projects-hero">
  <p class="page-kicker">Work</p>
  <h2 class="page-hero-title">Products, frontier AI evaluation, and peer-reviewed systems</h2>
  <p class="page-hero-lead">
    Detailed case studies spanning shipped products, frontier AI evaluation, and peer-reviewed research.
    Open any card for problem, approach, contributions, and links.
  </p>
</div>

<div class="impact-strip" aria-label="Projects highlights">
  <div class="impact-card">
    <span class="impact-value" data-text="~48h">~48h</span>
    <span class="impact-label">Video ads (Fast Ad)</span>
  </div>
  <div class="impact-card">
    <span class="impact-value" data-count="240" data-suffix="M+">0</span>
    <span class="impact-label">Meta ads (AdScrape)</span>
  </div>
  <div class="impact-card">
    <span class="impact-value" data-count="30" data-suffix="K+">0</span>
    <span class="impact-label">Brands (QuickAds)</span>
  </div>
  <div class="impact-card">
    <span class="impact-value" data-count="30" data-suffix="+">0</span>
    <span class="impact-label">Research papers</span>
  </div>
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
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
{% assign sorted_projects = site.projects | sort: "importance" %}
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
