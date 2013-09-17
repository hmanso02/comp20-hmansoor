Hamid Mansoor
Comp 120 
Assignment 1

1) I minified all my js and CSS files using the tools listed 
   below. I also organized the cotent by putting CSS on top of the 
   index.html and js files at the bottom. All my CSS and js files 
   external. I compressed the frogger_sprites.png file. I also included
   	offline caching. 

2) I made a basic cache.manifest file which tells the browser to
   store all the js, CSS, HTML and image files in the offline cache.
   I took help from the cache tutorial provided and I emptied the cache
   to make sure the browser asked for permission every time to store
   files on the local machine. 
 	
3) These are the tools that I used: 
    -> Google Closure Tools to minify game.js
    -> http://www.csscompressor.com/ to minify style.css
    -> http://refresh-sf.com/yui/ to combine both the js files in my
       game.
    -> http://tinypng.org/ to compress the frogger_sprites.png image.

4) The loading time is a bit quicker because of formating and 
   compressing the code. In addition, using a compressed image
   means that less space is used so better loading time. The various
   numbers provided by different tools used are listed below: 
 
   -> Google Closure Tools
      Original Size: 	2.86KB gzipped (13KB uncompressed)
      Compiled Size: 	1.93KB gzipped (7.7KB uncompressed)
      Saved 30.30% off the gzipped size (39.29% without gzip)

   -> http://www.csscompressor.com/
      Compression ratio: 0.174KB/0.233KB = 25.3% (-59 Bytes)

   -> http://refresh-sf.com/yui/
      combined both js files 
      the ratio was actually negative
      the file was actually bigger so I did not keep the modified 
      file

   -> http://tinypng.org/
      frogger_sprites.png
      Original Size: 33.7 KB
      Compressed Size: 13.6 KB

5) Since I am using an offline cache, it can be easily corrupted by 
   a large file. Also, compressing the image may lower its quality. 
   Apart from that, minifying the javaScript files sometimes leads
   to altered functionality of the code. 
