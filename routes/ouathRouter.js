const express = require('express');
const router = express();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);
//logout user
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
