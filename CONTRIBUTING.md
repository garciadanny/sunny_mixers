# Contributing

## Overview
The codebase is made up of HTML, CSS, and very little Javascript, and uses
[Eleventy (11ty)] for static site generation.

As of the time of this writing (12/2025), there are 5 distinct pages on the site:
1. The home page (aka: the index page)
2. The mixology info page
3. The contact page
4. The blog home page
5. The individual blog post page

All of the code for these files and supporting files can be found within the
`src/` directory.

### HTML
The markup (HTML) files for each page on the site can be found 
within `src/pages/` directory with supporting partials files and layout files
within the `src/_includes` directory. The HTML files use [nunjucks] as the
templating language to make use of partials, layouts, variables, etc.


```
sunny-mixers
├─ src/
|  |- pages/
│  |  ├─ blog/
|  |  |  |-- index.njk
|  |  |-- contact.njk
|  |  |-- index.njk
│  |__└─ etc...

```

### Javascript
There are two javascript files in this project, both located within the `src/js/`
directory.

1. The `src/js/admin/blog-post-preview.js` file, contains logic for displaying
blog post previews on the admin site. This logic ensures that previews look very
close to what the actual blog post would look like once published on the site.

2. The `src/js/contact/form-submitter.js` file, contains logic for submitting
the contact form on the site. As of the time of this writing, this form data
is submitted to a Google spreadsheet owned by Sunny Mixers.

```
sunny-mixers
├─ src/
|  |- js/
│  |  ├─ admin/
│  |  |   ├─ blog-post-preview.js
│  |  ├─ contact/
│  |  |   ├─ form-submitter.js

```

### CSS
Directly within the `src/css/` directory, you'll find some stylesheets for the
site's base styles, resets, and typography. You'll also find subdirectories for
each page on the site; these subdirectories include their own stylesheets that
are unique to each page. Lastly, you'll find a `src/css/components/` subdirectory
that contains multiple stylesheets for specific UI components on the site - many
which are reused. These contain styles for buttons, container elements, the
footer and navbar on the site, etc. 

```
sunny-mixers
├─ src/
|  |- css/
│  |  ├─ blog/
│  |  ├─ components/
│  |  ├─ mixology/
│  |  |   ├─ mixology.css
|  |  |-- etc....
|  |  |-- index.css
|  |  |-- base.css
│  |__└─ etc...

```

### Images
All images for the site (except for images used in blog posts) are located in
the `src/assets/images/` directory. For blog posts, when uploading images via
the admin site, images are automatically stored in a CDN called [uploadcare].
Uploadcare provides an image CDN which means that when users visit a blog post,
images won't take a long time to download onto the site which can create a bad
user experience. Currently, the images on the rest of the site don't make use of
this. To enable loading all of the images via the CDN, upload all the images
within `src/assets/images/` into Uploadcare and replace the `src` on all the 
`<img>` tags on the site with the appropriate Uploadcare URLs that they provide.

### The blog
Individual blog posts are located within `src/_posts/blog/` and are served 
automatically on the site via the following URL structure:

```
https://sunnymixers.com/blog/blog-post-title/
```

Blog post files are stored within this directory with the following filename
convention:

```
year-month-day-blog-post-title.md

Example:

2025-12-2-how-to-be-the-best-bartender.md
https://sunnymixers.com/blog/how-to-be-the-best-bartender/
```

The layout for blog posts is located in `src/_includes/layouts/blog.njk` and
the css is located in `src/css/blog/`.

The create a blog post, you can either create a file directly in the directory
mentioned above or you can use the admin console UI via the following URL:

```
https://sunnymixers.com/admin
```

You can only access this site if you're a collaborator on the Github
repository/codebase as this uses Github for authentication.

This UI is powered by a free and opensource software called [Decap CMS].
It provides a user interface for drafting, previewing, and publishing blog posts.
When you publish a blog post, the file is automatically saved in `src/_posts/blog/`
for you and made available on the site. Also, when you upload an image via the
Decap platform, it's automatically uploaded to Uploadcare for you.

Because the core of the blog is just individaul files located in `src/_posts/blog`,
this means if you ever wanted to swap Decap CMS for a different blog-authoring
solution, it would be straightfoward to do so - you're not tied into a single
vendor.


[Eleventy (11ty)]: https://www.11ty.dev/
[nunjucks]: https://mozilla.github.io/nunjucks/templating.html
[uploadcare]: https://uploadcare.com/
[Decap CMS]: https://decapcms.org/ 