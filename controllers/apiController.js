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
 **                            "GET" METHODS
 *------------------------------------------------------------------------**/
exports.homePage = (req, res) => {
    res.render('../views/pages/index.ejs', { PageTitle: "HomePage" })
    console.log('homePage function is being called')
}

exports.aboutPage = (req, res) => {
    res.render('../views/pages/aboutPage.ejs', { PageTitle: "About us" })
    console.log('aboutPage is being called successfully')
}

exports.contactPage = (req, res) => {
    res.render('../views/pages/contactPage.ejs', { PageTitle: 'Contact us' })
    console.log('contactPage is being called successfully')
}

exports.thankyouPage = (req, res) => {
    res.render('../views/pages/thankyou.ejs', { PageTitle: 'Thank you!', results: results })
    console.log('thankyou is being called successfully')
}

/**------------------------------------------------------------------------
 **                            "POST METHODS"
 *------------------------------------------------------------------------**/

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
        })

        res.status(201).json(newUser);

    } catch (error) {
        console.error("I broke!", error)
    }
    res.render('../views/pages/thankyou.ejs', { PageTitle: 'Contact Us', results: results })

} 