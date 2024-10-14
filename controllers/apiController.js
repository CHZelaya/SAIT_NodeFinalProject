/**------------------------------------------------------------------------
 **                            IMPORTS
 *------------------------------------------------------------------------**/
const User = require('../models/userModel')
const sequelize = require('../database/database.js');

sequelize.sync()
    .then(() => {
        console.log('Database Synced!')
    })
    .catch(error => {
        console.error('Error Syncing Databse:', error)
    });


/**------------------------------------------------------------------------
 **                            "GET" METHODS (read, delete)
 *------------------------------------------------------------------------**/

//? READ

//*Load Home page
exports.homePage = (req, res) => {
    res.render('../views/pages/index.ejs', { PageTitle: "HomePage" })
    console.log('homePage function is being called')
}

//*Load About Page
exports.aboutPage = (req, res) => {
    res.render('../views/pages/aboutPage.ejs', { PageTitle: "About us" })
    console.log('aboutPage is being called successfully')
}

//*Load Contact Page
exports.contactPage = (req, res) => {
    res.render('../views/pages/contactPage.ejs', { PageTitle: 'Contact us' })
    console.log('contactPage is being called successfully')
}

//*Load Users Page
exports.usersPage = (req, res) => {
    res.render('../views/pages/users.ejs', { PageTitle: 'Users' })
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

//* Load Results Page
exports.searchDB = async (req, res) => { // * Filter DB by email
    const { email } = req.query

    try {
        const user = await User.findAll({
            where: { email }
        });

        if (user.length > 0) { //? if the user exists, render the results page and populate with user info. Load all users with the same email
            console.log(user);
            res.render('../views/pages/results.ejs', { users: user, PageTitle: 'Results' });
        } else {
            res.render('../views/pages/noUser.ejs', { PageTitle: "No user found" })
        }

    } catch (error) {
        console.error("You're princess is in another castle", error)
    }

}

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
    res.render('../views/pages/index.ejs', { PageTitle: "HomePage" })
}

/**------------------------------------------------------------------------
 **                            "POST METHODS" (create, update)
 *------------------------------------------------------------------------**/

//? CREATE

exports.submitContact = async (req, res) => {
    const { fname, lname, email, phnumber, city, province, postalcode, feedback } = req.body

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

