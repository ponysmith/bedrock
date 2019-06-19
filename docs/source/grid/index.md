---
title: Grid
---


Bedrock includes a basic grid. The grid uses twelve columns, meaning that the column widths in any row of the grid should add up to `12`. To create a grid, create a `.br-row` element and nest one or more `.br-col-{n}` elements, where `{n}` is the number of columns you want to span.

The grid system is reponsive and will collapse to a single column display when the viewport drops beneath the mobile width defined in the `$br_width_mobile` variable.

<div class="br-message br-theme-secondary">
  Some styling has been added to the examples below to make them easier to see (e.g. background color and padding); normally the grid has no such styling.
</div>

## Normal grid
    
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/grid.html %}
  {% br_example_code _partials/grid.html %}
</div>


## Padded grid

<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/grid-padded.html %}
  {% br_example_code _partials/grid-padded.html %}
</div>
