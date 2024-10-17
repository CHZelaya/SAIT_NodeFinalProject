/**------------------------------------------------------------------------
 **                            IMPORTS
 *------------------------------------------------------------------------**/
const User = require('../models/userModel')
const sequelize = require('../database/database.js');
const validator = require('validator')
const greeting = require('../modules/greeting')
const favicon = require('serve-favicon')
sequelize.sync()
    .then(() => {
        console.log('Database Synced!')
    })
    .catch(error => {
        console.error('Error Syncing Databse:', error)
    });


/**------------------------------------------------------------------------
 **                            "GET" METHODS (read)
 *------------------------------------------------------------------------**/
const passGreeting = greeting.chooseRandomGreeting()
//? READ

//*Load Home page
exports.homePage = (req, res) => {

    res.render('../views/pages/index.ejs', { PageTitle: "HomePage", passGreeting })
    console.log('homePage function is being called')
}

//*Load About Page
exports.aboutPage = (req, res) => {
    res.render('../views/pages/aboutPage.ejs', { PageTitle: "About us" })
    console.log('aboutPage is being called successfully')
}

//*Load Contact Page
exports.contactPage = (req, res) => {
    const error = [] //Empty array here, as contact us page is expecting errors to be defined.
    //error handling for validation is dealt with lower in the submitContact method.
    res.render('../views/pages/contactPage.ejs', { PageTitle: 'Contact us', errors: error })
    console.log('contactPage is being called successfully')
}

//*Load Users Page
exports.usersPage = async (req, res) => {
    const users = await User.findAll();
    res.render('../views/pages/users.ejs', { users, PageTitle: 'Users' })
    console.log('usersPage is being called successfully')
}

//* Load Update Page
exports.updatePage = async (req, res) => {
    const userID = req.params.id
    console.log(`The user ID you're updating is ${userID}`)
    const user = await User.findByPk(userID)
    res.render('../views/pages/updateUser.ejs', { user, PageTitle: 'Update Information' })
    console.log('updatePage is being called successfully')
}

//* Filter Users by email.
exports.searchDB = async (req, res) => { // * Filter DB by email
    const { email } = req.query

    try {
        const user = await User.findAll({
            where: { email }
        });

        if (user.length > 0) { //? if the user exists, render the results page and populate with user info. Load all users with the same email
            console.log(user);
            res.render('../views/pages/users.ejs', { users: user, PageTitle: 'Results' });
        } else {
            res.render('../views/pages/noUser.ejs', { PageTitle: "No user found" })
        }

    } catch (error) {
        console.error("You're princess is in another castle", error)
    }

}

/*------------------------------------------ END OF SECTION ------------------------------------------*/


/**------------------------------------------------------------------------
 **                            "GET" METHODS (delete)
 *------------------------------------------------------------------------**/

//? DELETE

exports.deleteUser = async (req, res) => {
    const userID = req.params.id
    if (!userID || isNaN(userID)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    } else await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.render('../views/pages/index.ejs', { PageTitle: "HomePage", passGreeting })



}
/*------------------------------------------ END OF SECTION ------------------------------------------*/





/**------------------------------------------------------------------------
 **                            "POST METHODS" (create)
 *------------------------------------------------------------------------**/

//? CREATE

exports.submitContact = async (req, res) => {
    const { fname, lname, email, phnumber, city, province, postalcode, feedback } = req.body

    const errors = []; // Array to store errors (if any)

    //Validate first name length
    if (!validator.isLength(fname, { min: 1, max: 50 })) {
        errors.push('First name must be between 1 - 50 characters');
    }
    //Validate last name length
    if (!validator.isLength(lname, { min: 1, max: 50 })) {
        errors.push('Last name must be between 1 - 50 characters');
    }
    //Validate email is in email format
    if (!validator.isEmail(email)) {
        errors.push("Invalid Email format");
    }
    //Validate phone number
    if (!validator.isMobilePhone(phnumber, 'any')) {
        errors.push("Invalid Phone Number");
    }
    //Validate city's length
    if (!validator.isLength(city, { min: 1, max: 50 })) {
        errors.push('City must be between 1 and 50 characters');
    }
    //Validate province's length
    if (!validator.isLength(province, { min: 1, max: 50 })) {
        errors.push("Province must be between 1 and 50 characters");
    }
    //validate postalcode in "any" format
    if (!validator.isPostalCode(postalcode, 'any')) {
        errors.push("Invalid postal code.")
    }
    //validate feedback's length
    if (!validator.isLength(feedback, { min: 1, max: 500 })) {
        errors.push("Length must be between 1 and 500 characters. ")
    }
    if (!validator.isAlphanumeric) {
        errors.push('Invalid format in Feedback Field')
    }

    if (errors.length > 0) {
        return res.render('../views/pages/contactPage.ejs', { errors, PageTitle: "Contact us" })
    } else {



        const results = { fname, lname, email, phnumber, city, province, postalcode, feedback }


        try {
            const newUser = await User.create({
                fname,
                lname,
                email,
                phnumber,
                city,
                province,
                postalcode,
                feedback
            });
            res.render('../views/pages/thankyou.ejs', { PageTitle: 'Thankyou!', results: results })


        } catch (error) {
            console.error("I broke!", error)
        }

        console.log('thankyou is being called successfully')
    }
}





/*------------------------------------------ END OF SECTION ------------------------------------------*/




/**------------------------------------------------------------------------
 **                            "POST METHODS" (update)
 *------------------------------------------------------------------------**/


//? UPDATE

exports.updateUser = async (req, res) => {
    const { fname, lname, email, phnumber, city, province, postalcode, feedback } = req.body
    const results = { fname, lname, email, phnumber, city, province, postalcode, feedback }

    try {
        await User.update({ fname, lname, email, phnumber, city, province, postalcode, feedback }, {
            where: {
                id: req.params.id
            }

        });

        res.render('../views/pages/thankyou.ejs', { PageTitle: 'Thankyou!', results: results })

    } catch (error) {
        console.error('I broke some more!', error)
    }

}

/*------------------------------------------ END OF SECTION ------------------------------------------*/

exports.Page404 = (req, res) => {
    res.status(404).render('../views/pages/404.ejs')
} 