---
title: Overview
---

**Bedrock** is a lightweight, minimal CSS framework with a focus on easy customization. Installing **Bedrock** into your site is extremely simple:


## Installing Bedrock
To install **Bedrock** on your site, you'll need to add three things to the `<head>` section of your site:

### 1. Bedrock
First, you'll need to install **Bedrock** itself. Go to the [**Bedrock** Github repository](https://github.com/ponysmith/bedrock) and download the latest compiled production CSS build from the `/dist` folder. Once you have a copy of **Bedrock**, place the file next to the other CSS files of your site and simply include it in the `<head>` section of your HTML.

{% codeblock lang:html %}
<head>
  ...
  <link rel="stylesheet" href="path/to/bedrock.css">
  ...
</head>
{% endcodeblock %}


### 2. Fonts
**Bedrock** uses a set of Google Fonts for its various font options. For **Bedrock** to function properly, you will need to make sure you include the fonts in your document's `<head>`: 

{% codeblock lang:html %}
<head>
  ...
  <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:300,400' rel='stylesheet' type='text/css' />
  <link href='http://fonts.googleapis.com/css?family=Roboto:100,400' rel='stylesheet' type='text/css' />
  <link href='http://fonts.googleapis.com/css?family=Roboto+Mono:300' rel='stylesheet' type='text/css' />
  ...
</head>
{% endcodeblock %}

<div class="br-message br-theme-secondary">
If you don't include the fonts from Google Fonts, your site will still function properly, but all the fonts will revert to their browser defaults. If you would like to change the fonts, visit the <a href="/customize">Customize</a> page to learn how.
</div>


### 3. Fontawesome Icons
**Bedrock** uses Font Awesome for icons. To make sure all the latest Font Awesome awesomeness is available, and to take advantage of CDN loading, **Bedrock** uses a Font Awesome kit. You can install Font Awesome by including the kit in your site's `<head>` section:

{% codeblock lang:html %}
<head>
  ...
  <script src="https://kit.fontawesome.com/e015fb99b6.js"></script>
  ...
</head>
{% endcodeblock %}
