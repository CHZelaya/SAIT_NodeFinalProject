
/**------------------------------------------------------------------------
 **                            EXPRESS/IMPORTS
 *------------------------------------------------------------------------**/
require('dotenv').config()
const express = require('express');
const app = express();
const apiController = require('./controllers/apiController.js');
const favicon = require('serve-favicon')
const path = require('path')
const { PORT } = process.env




/**------------------------------------------------------------------------
 **                            MIDDLEWARE
 *------------------------------------------------------------------------**/
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




/**------------------------------------------------------------------------
 **                            CONTROLLERS
 *------------------------------------------------------------------------**/

//*GET
app.get('/', apiController.homePage,);
app.get('/about', apiController.aboutPage);
app.get('/contact', apiController.contactPage);
app.get('/users', apiController.usersPage)
app.get('/search', apiController.searchDB)
app.get('/update/:id', apiController.updatePage)
app.get('/delete/:id', apiController.deleteUser)

//*POST
app.post('/submitcontact', apiController.submitContact)
app.post('/updateUser/:id', apiController.updateUser)

//*USE
app.use(apiController.Page404)
/**------------------------------------------------------------------------
 **                            INTIALIZE SERVER
 *------------------------------------------------------------------------**/

app.listen(PORT, () => {
    console.log(`Its alive! Beware! It lives on http://localhost:${PORT}`);
})



