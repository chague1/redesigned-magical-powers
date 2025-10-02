// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

// Called when answering question about whether user is human
router.post('/human-answer', (req, res) => {

  // Make a variable and give it the value from 'human-y-n'
  const symptoms = req.session.data.human-y-n

  // Check whether the variable matches a condition (human)
  if (symptoms === 'yes' || symptoms === 'not sure'  ) {

    // Send user to the next question page about age
    res.redirect('/age')

  } else if (symptoms === 'no') {

    // Send user to the Not eligible page
    res.redirect('/not-eligible')

  } else {

    // Send user back to the question page
    res.redirect('/start-page')

  }
})