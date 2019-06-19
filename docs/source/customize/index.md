---
title: Customize
---

One of the fundamental goals of **Bedrock** was to make it very easily customizable with a minimum of effort from the developer. To that end, **Bedrock** exposes CSS variables that allow you to easily override default properties of the library. 

## Basic Overrides
If you were to examine the compiled CSS file, you would notice a lot of lines like this:

{% codeblock lang:css %}
h1 {
  color: var(--bro-color-primary-dark, var(--br-color-primary-dark));
}
{% endcodeblock %}

The above code means that the browser will first look for a `--bro-color-primary-dark` CSS variable to apply as the color of the `h1` element. If it doesn't find one, it will instead look for a `--br-color-primary-dark` variable and use that instead. So what's the difference between the two?

Well, put simply, the fallback variables (prefaced with `--br`) are defined by **Bedrock**. The variables prefaced by `--bro` (**B**ed**R**ock **O**verrides) can be defined by the developer in their own CSS. This allows for two types of interaction with **Bedrock**:

### Overriding defaults
Overriding defaults allows you to make global changes to **Bedrock**. For example, you may want the primary color (used in many different styles for theming), to be red instead of the default blue. To make that change across all **Bedrock** styles, you simply need to define a `--bro-color-primary` variable in your own CSS (common practice is to define the variable in a `:root` pseudo selector):

{% codeblock lang:css %}
:root {
  --bro-color-primary: red;
}
{% endcodeblock %}


### Leveraging defaults
In addition to overriding **Bedrock** defaults, you can also leverage the defaults by using the default variables in your own CSS. For example, if you wanted to reuse the secondary color for your left nav, you could use the `--br-color-secondary` in your CSS styling:

{% codeblock lang:css %}
#leftnav {
  background-color: var(--br-color-secondary);
}
{% endcodeblock %}


