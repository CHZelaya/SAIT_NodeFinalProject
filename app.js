/**------------------------------------------------------------------------
 * todo                             TODO
 *  //Create Home Page, About Page, Contact Page, 404 Page and Thank-You Page.
 *  //Create partials
 *  Create a module that returns a random greeting.
 *  //Set up Database connection including: (first name and last name separate), email, phone number, city, province postal code, feedback message etc
 *
 *------------------------------------------------------------------------**/



/**------------------------------------------------------------------------
 **                            EXPRESS/IMPORTS
 *------------------------------------------------------------------------**/
require('dotenv').config()
const express = require('express');
const app = express();

const apiController = require('./controllers/apiController.js');
const sequelize = require('./database/database.js');
const User = require('./models/userModel')
// const bodyparser = require('bodyparser');
const { PORT } = process.env



/**------------------------------------------------------------------------
 **                            MIDDLEWARE
 *------------------------------------------------------------------------**/
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));



/**------------------------------------------------------------------------
 **                            CONTROLLERS
 *------------------------------------------------------------------------**/

app.get('/', apiController.homePage);
app.get('/about', apiController.aboutPage);
app.get('/contact', apiController.contactPage);
app.get('/thankyou', apiController.thankyouPage)
app.post('/submitcontact', apiController.submitContact)


/**------------------------------------------------------------------------
 **                            INTIALIZE SERVER
 *------------------------------------------------------------------------**/

app.listen(PORT, () => {
    console.log(`Its alive! Beware! It lives on http://localhost:${PORT}`);
})



