---
title: Form Elements
---

**Bedrock** provides styling for all default form elements. With few exceptions, all form elements in **Bedrock** are block elements rather than inline elements, making it easy to compose complex form layouts using the **Bedrock** grid system.

## Fieldset and Legend
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/form-fieldset-legend.html %}
  {% br_example_code _partials/form-fieldset-legend.html %}
</div>

## Form labels
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/form-labels.html %}
  {% br_example_code _partials/form-labels.html %}
</div>

## Text input 
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/form-textinput.html %}
  {% br_example_code _partials/form-textinput.html %}
</div>

## Text area
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/form-textarea.html %}
  {% br_example_code _partials/form-textarea.html %}
</div>

## Checkboxes
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/form-checkboxes.html %}
  {% br_example_code _partials/form-checkboxes.html %}
</div>

## Radio Buttons
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/form-radio-buttons.html %}
  {% br_example_code _partials/form-radio-buttons.html %}
</div>

## Buttons
**Bedrock** button styling can be applied to any `<input>`, `<button>`, or `<a>` button element by adding the `br-button` CSS class and optional theme class as seen below.

### Using `button` element
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/buttons-button.html %}
  {% br_example_code _partials/buttons-button.html html %}
</div>

### Using `input` element
<div class="br-message br-theme-charchoal">
The examples below use <code>input type="button"</code>, but other input button types could also be used (e.g. <code>submit</code> and <code>reset</code>)
</div>

<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/buttons-input.html %}
  {% br_example_code _partials/buttons-input.html html %}
</div>


### Using `a` element
<div class="example">
  {% br_example_tabs %}
  {% br_example_html _partials/buttons-a.html %}
  {% br_example_code _partials/buttons-a.html html %}
</div>