<pre>
red-green-blue
==============

1. Create GitHub Repository "red-green-blue"

2. Dependencies
    Bower - bower init
      Foundation - bower install foundation
    NPM - npm init (package.json), npm i -D gulp gulp-sass (packages: gulp, gulp-sass)
    Gulp
      add gulpfile.js

3. Files
    touch index.html
    mkdir sass/partials css
    touch sass/partials/_settings.scss
    touch sass/styles.scss

4. Fix: 
  Include correct Foundation markup in head and just before end body tag in index.html
      <script src="/bower_components/modernizr/modernizr.js"></script>
      <link rel="stylesheet" href="/css/styles.css">
      ...
      <script src="/bower_components/jquery/dist/jquery.min.js"></script>
      <script src="/bower_components/foundation/js/foundation.min.js"></script>
      <script>
        $(document).foundation();
      </script> 
  Fix Foundation import link in sass/_settings.scss
        @import "../bower_components/foundation/scss/foundation/functions";
  Link to SETTINGS partial in styles.scss
        @import "partials/settings";
  Link to Foundation FUNCTIONS within settings partial
        @import "../bower_components/foundation/scss/foundation/functions";

   Uncomment/edit desired sass/_settins.scss features (i.e., $row-width, $column_gutter, etc.)
        
5. Add node_modules/ and bower_components/ to .gitignore

6. Test:
    Run gulp & http-server
    Verify scss/styles.scss compiles to css/styles.css
    Copy Foundation sample to index.html, and view in browser at localhost:8080

7. Add scss code from board, and create html markup.

8. commit!!
</pre>
