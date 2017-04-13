# Reusable bootstrap alert using angularjs


## Overview

This repository demonstrates the bootstrap alert which are commonly used in web application using AngularJS.


## Prerequisites

#### Clone `reusable-bootstrap-alert`

```
git clone https://github.com/aniketmuruskar/reusable-bootstrap-alert.git
cd reusable-bootstrap-alert
```

### Node.js and Tools

* Get [Node.js][node-download].
* Install the tool dependencies: `npm install`

### Bower

* Install [Bower][bower] globally by using `npm install -g bower`
* Now install client-side dependencies using `bower intall`


*Note that the `bower_components` folder would normally be installed in the root folder but
`reusable-bootstrap-alert` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Running the Application during Development

* Run `npm start`.
* Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application running.


## Workings of the Application

* The app is having only single page  i.e `index.html` in app folder.
* This app use simple local static web server i.e Http-Server serve from app root directory.
* For displaying bootstrap alert, using angular js directive.
* Alert title, type of bootstrap alert provided from repective controller.
* Alert will disappear after certain intervals by showing status of operation.
* Non hiddable alert which will not hide by setting `hiddable` to false.


## Application Directory Layout

```
app/			--> all the source code of the app
  bower_components/...	--> 3rd party JS/CSS libraries, including Angular and Bootstrap
  bootstrap-alert/
  	bootstrap.alert.module.js 	--> the main boostrap alert module, here we can extra validation
  app.module.js 	--> the main app module
  index.html 	--> app layout file (the main HTML template file of the app)

node_modules/...	--> development tools (fetched using `npm`)

bower.json 	--> Bower specific metadata, including client-side dependencies
package.json 	--> Node.js specific metadata, including development tools dependencies
.bowerrc 	--> This file specify directory where to place install front end libraries 
		using bower, by default within `app/bower_components/`
```


## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].

[bower]: http://bower.io/
[git-home]: https://git-scm.com
[git-setup]: https://help.github.com/articles/set-up-git/
[node-download]: https://nodejs.org/en/download/package-manager/
[angularjs]: https://angularjs.org/
