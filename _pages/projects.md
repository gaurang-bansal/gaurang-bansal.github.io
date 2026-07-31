---
layout: page
title: Projects
permalink: /projects/
description: Case studies — products, Turing & Anthropic industry work, and security / ML research.
nav: true
nav_order: 3
display_categories: [Product, Industry, Research]
horizontal: true
---

<div class="page-hero projects-hero">
  <p class="page-kicker">Work</p>
  <h2 class="page-hero-title">Products, industry impact, and research systems</h2>
  <p class="page-hero-lead">
    <strong>Product</strong> pages cover offer, approach, SoTA, and stack.
    <strong>Industry</strong> covers Turing and Anthropic frontier-model work.
    <strong>Research</strong> covers system, problem, contribution, and achievements (security + selected ML).
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
