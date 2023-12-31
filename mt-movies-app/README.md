# Webpack 4 starter boilerplate template with React, Bootstrap 4

> Starter template for projects that use webpack 4 in pair with React, Bootstrap 4 and ES6 Javascript. This project contains configuration for development and production deploy using webpack 4 module bundler and tools which _might_ be helpful


## Getting started

Make sure you install all dependencies first, run npm -i (shorthand for npm install)

```
npm i
```

To use configured development mode simply run

```
npm run start
```

To build all files for the production run

```
npm run build
```

An output is minified via --mode flag which is set to production (already minified, optimized bundle) - additionally **/dist** directory is removed each time you run this script to make sure there are no artifacts left in the output location

Optionally there is configured a task to export files with development mode (output is **not** minimized/optimized). To use it run

```
npm run dev
```

## What's already configured?

* **React** - create app components using Facebook's React Javascript UI library
* **Bootstrap 4** - popular framework for building responsive, mobile-first sites
* **Babel** - transpile javascript ES6 code down to ES5
* **Extract Text Plugin** - extract styles to separate files
* **SASS Loader** - utilize modern SASS preprocessor to create styles for your app and compile them to .css
* **Html Webpack Plugin** - allows use of predefined HTML template (entry file: **./src/index.html**)
* **File Loader** - allows use of media files in project via emitted URL
* **Image Webpack Loader** - compress source images in build with imagemin
* **Webpack Dev Server** - serves an app and opens a browser for development. Updates the browser on file changes.

## Project structure

* **/src** - here are all development files
* **/dist** - production output, imported libraries are bundled into separated vendor.[hash].js, while rest of components are in app.[hash].js (same for styles)

## Tools used to make life a little better

* **eslint** - Javascript linter - configuration in **eslintrc.json** file
* **jshint** - Javascript linter - configuration in **.jshintrc** file

## License

This project is licensed under MIT license.


https://dribbble.com/shots/15091759-E-Prescription-Platform-Drug-Search
https://dribbble.com/shots/3849312-Patient-Profile
https://dribbble.com/shots/6901495-Telemedicine-Doctor-s-Portal-Chats
https://dribbble.com/shots/9866814-Zendenta-Patient-detail/attachments/1899945?mode=media
https://dribbble.com/shots/14499854-Medical-Web-App
https://dribbble.com/shots/11277875-Patient-Portal-Medical-Dashboard
https://dribbble.com/shots/4696518-eVet-Patient-s-Medical-Record

https://bootsnipp.com/snippets/1ea0N (Message)
https://bootsnipp.com/snippets/5MaWv
https://www.bootdey.com/snippets/view/chat-room
https://www.bootdey.com/snippets/view/light-user-list
https://www.bootdey.com/snippets/view/bs4-email-app
https://www.bootdey.com/snippets/view/view-user-information
https://www.bootdey.com/snippets/view/notes-dashboard
https://www.bootdey.com/snippets/view/manage-users
https://www.bootdey.com/snippets/view/projects-dashboard
https://www.bootdey.com/snippets/view/General-Search-Results
https://www.bootdey.com/snippets/view/career-list
https://www.bootdey.com/snippets/view/General-Search-Results
https://www.bootdey.com/snippets/view/career-list
https://www.bootdey.com/snippets/view/Task-Details
https://www.bootdey.com/snippets/view/Assign-Project-List

Medical record:
    Appointments
    Lab Result
    Radiology


Close on click navbar
Unread count on notification & inbox
Unread color in notifications
Navbar color