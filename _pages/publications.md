---
layout: page
permalink: /publications/
title: Publications
years: ["Revision","Review",2022,2021, 2020, 2019]
---

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography sw-f papers -q @*[year={{y}}]* %}
{% endfor %}