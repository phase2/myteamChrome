This code base is used to publish a chrome extention that change the display of content
in the pingboard profile page, as a nicer presentation.

## Chome Store page

the Chrome store item is https://chrome.google.com/webstore/devconsole/50ca3e85-44d8-42dc-9fdd-a09798a6d58d/ffgoadmhifeachjchlllbdfnomikfdkn/edit

At the moment only Erik Summerfield can access it.

### to upload a new version 

* update the version in the manifest.json
* go to page https://chrome.google.com/webstore/devconsole/50ca3e85-44d8-42dc-9fdd-a09798a6d58d/ffgoadmhifeachjchlllbdfnomikfdkn/edit/package
* Zip up the code in this folder 
  * from the parent director run `zip [ZIPFILENAME] [THISFOLDERNAME]
* Click upload new package 
* select the zip file created earlier


### What it does
On the About Display page 
* Change the following fields to be half width
  * My superpowers are ...
  * My Blindspots are ...
  * I want to do more of ...
  * I want to do less of ...
* Change the following to ranges 
  * I work best ...
  * I communicate best ...
  * I want to recive feedback ...
  * I want feeddback to be delivered
  * In my workday ...

