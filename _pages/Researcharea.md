---
layout: page
permalink: /research-areas/
title: Research Areas
areas: ["Network Security", "Machine Learning / Deep Learning", "Artificial Intelligence", "Game Theory" , "Theoratical Computer Science" ,"Metaverse", "Blockchain", "Optimisation"]

---
---
{% for y in page.areas %}
  <h3 class="areas">{{y}}</h3>
  {% bibliography sw-f papers -q @*[areas~={{y}}]*%}
  ---
{% endfor %}