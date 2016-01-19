# Managethis
A lightweight way to manage your HTPC.

There will be no more updates.

A more robust PHP version is available at https://github.com/mescon/Muximux

A NodeJS version with a built-in webserver is available at https://github.com/onedr0p/manage-this-node

-----------------

This is based off of: https://codyhouse.co/gem/responsive-tabbed-navigation/

This is a lightweight way to manage your HTPC apps without having to run anything extra, all you need is to have a webserver. It basically acts as a portal for all of your apps in once place so you don't need to keep multiple tabs open.

![alt tag](http://i.imgur.com/04Y0tDD.jpg)

## Setup

- To set it up clone and place the folder inside the root directory of your webserver then navigate to the landing folder. 
- In your favourite editor open the config.json pages and add in the urls of your apps you use inside of the the `url:""` sections.
- You can change the app icons by replacing the classes inside of the `"icons":{ "nav": "", "launchpage": "" }"`, `nav`, try [fontawesome](https://fortawesome.github.io/Font-Awesome/icons/) or [glyphicons](https://getbootstrap.com/components/#glyphicons).
- Navigate to http://youripaddress/Managethis to access Managethis.
- You can access your apps by clicking on the "Launch" button. This was implemented to stop you being hit by multiple login requests as soon as you start the app. It also speeds up loading time.
- To reload an app, double click it in the menu. Only that specific page will reload.

You may want to setup htaccess to secure it but even if you don't your apps will not be accessible as long as they themselves are secure.
