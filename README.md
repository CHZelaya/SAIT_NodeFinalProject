# SAIT_NodeFinalProject
/**-----------------------------------------------------------------------------------------------------------------------
 * ?                                                     ABOUT
 * @author         :  Carlos Hernandez-Zelaya
 * @email          :  carlos.HernandezZelaya@edu.sait.ca
 * @repo           :  https://github.com/CHZelaya/SAIT_NodeFinalProject.git
 *-----------------------------------------------------------------------------------------------------------------------**/

This is the final project for the SAIT Web Development Course (Node.js). The project is a simple web application that allows users to create, read, update, and delete users from a database. The application also has a simple API that allows users to interact with the database.
Since the theme of the application was to be of our choosing, I decided to create a simple page on Tournament Paintball, where a player could view information on the League and register themselves for the upcoming event. The user can also view the current list of registered players and update their information if needed.

Below is the file structure for the project:

```
.vscode/
  └── settings.json

controllers/
  └── apiController.js

database/
  └── database.js

models/
  └── userModel.js

modules/
  └── greeting.js

node_modules/

public/
  ├── images/
  ├── index.js
  └── style.css

views/
  ├── pages/
  │   ├── 404.ejs
  │   ├── aboutPage.ejs
  │   ├── contactPage.ejs
  │   ├── index.ejs
  │   ├── noUser.ejs
  │   ├── thankyou.ejs
  │   ├── updatePage.ejs
  │   └── users.ejs
  └── partials/
      ├── footer.ejs
      ├── header.ejs
      ├── nav.ejs
      └── style.ejs

.env
.env.example
.gitignore
app.js
package.json
package-lock.json
README.md
```

The project uses the following technologies: Node.js, Express.js, EJS, and mysql2. The project also uses the following npm packages: dotenv, sequelize, and nodemon.

To run the project, you will need to create a .env file in the root directory of the project. The .env file should contain the following information:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD= 
DB_NAME=crpg212
```

To start, run the following command in the terminal to install all the dependencies:

```
npm install
```
Followed by the following command to start the server:

```
npm start
```

The server will start on port 3000. You can access the application by going to http://localhost:3000 in your browser.
There is a Navigation bar at the top for your convenience to navigate through the pages.
