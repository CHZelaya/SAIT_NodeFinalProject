# SAIT_NodeFinalProject
This is the final project for the SAIT Web Development Course (Node.js). The project is a simple web application that allows users to create, read, update, and delete users from a database. The application also has a simple API that allows users to interact with the database.

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