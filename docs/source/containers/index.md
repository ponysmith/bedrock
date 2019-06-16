---
title: Containers
---

Bedrock has a basic container system to aid in layout. There are two container types. Note that in the examples below, an additional background color added to make them more visible. Normally, the containers have no background color.

<div class="br-message br-theme-secondary">
  The examples below have had a border added to make them easier to see. The Bedrock container has no borders by default.
</div>

## Full-width Container

The full-width container spans the entire available width of the parent element.

<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/container-full.html %}
  {% br_example_code _partials/container-full.html html %}
</div>


## Fixed-width Container

The fixed-width container spans the entire available width of the parent element up to a max width as defined by `$br_width_fixed`.

<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/container-fixed.html %}
  {% br_example_code _partials/container-fixed.html html %}
</div>