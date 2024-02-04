---
layout: page
permalink: /research-areas/
title: Research Areas
areas: ["Network Security", "Deep Learning", "Artificial Intelligence", "Metaverse", "Blockchain", "Optimisation"]

---

{% for y in page.areas %}
  <h3 class="areas">{{y}}</h3>
  {% bibliography sw-f papers -q @*[areas~={{y}}]*%}
  ---
{% endfor %}