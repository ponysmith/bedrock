# Bedrock
Bedrock is a very simple and customizable CSS framework. **Bedrock** is a lightweight, minimal CSS framework with a focus on easy customization. Installing **Bedrock** into your site is extremely simple:


## Installing Bedrock
To install **Bedrock** on your site, you'll need to add three things to the `<head>` section of your site:

### 1. Bedrock
First, you'll need to install **Bedrock** itself. You can download the latest compiled production CSS build from the `/dist` folder of this repository. Once you have a copy of **Bedrock**, place the file next to the other CSS files of your site and simply include it in the `<head>` section of your HTML.

```html
<head>
  ...
  <link rel="stylesheet" href="path/to/bedrock.css">
  ...
</head>
```


### 2. Fonts
**Bedrock** uses a set of Google Fonts for its various font options. For **Bedrock** to function properly, you will need to make sure you include the fonts in your document's `<head>`: 

```html
<head>
  ...
  <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:300,400' rel='stylesheet' type='text/css' />
  <link href='http://fonts.googleapis.com/css?family=Roboto:100,400' rel='stylesheet' type='text/css' />
  <link href='http://fonts.googleapis.com/css?family=Roboto+Mono:300' rel='stylesheet' type='text/css' />
  ...
</head>
```

<div class="br-message br-theme-secondary">
If you don't include the fonts from Google Fonts, your site will still function properly, but all the fonts will revert to their browser defaults. If you would like to change the fonts, the documentation site explains how you can.
</div>


### 3. Fontawesome Icons
**Bedrock** uses Font Awesome for icons. To make sure all the latest Font Awesome-awesomeness is available, and to take advantage of CDN loading, **Bedrock** uses a Font Awesome kit. You can install Font Awesome by including the kit in your site's `<head>` section:

```html
<head>
  ...
  <script src="https://kit.fontawesome.com/e015fb99b6.js"></script>
  ...
</head>
```

## Local Development
If you would like to work on **Bedrock** locally, use the instructions below to run the **Bedrock** build locally.

### Clone repo
```bash
git clone git@github.com:ponysmith/bedrock.git
```

### Launch Bedrock
Install dependencies and run Webpack to watch the files and rebuild **Bedrock** on changes:

```bash
# Install dependencies
cd /path/to/bedrock
npm install

# Run Webpack
npm run start
```

### Launch the docs site
**Bedrock** includes a documentation site with examples. The site is built using [Hexo](https://hexo.io/). You can run the documentation site locally to see and test changes you make to the **Bedrock** CSS.

> Running Webpack in dev mode (as mentioned above), will automatically compile the CSS and place the updated compiled CSS file into the appropriate location to load it into the docs site.

The documentation site exist in the `/docs` folder of the repository. To launch the site:

```bash
cd /path/to/bedrock/docs
npm install
npm run start
```

> Since the docs site is a Hexo site, you can also use any Hexo commands from within the `/docs` directory.