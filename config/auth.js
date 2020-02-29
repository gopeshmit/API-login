// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '229049421461544', //  App ID
        'clientSecret'  : 'c44099a346fcab6e13f8fc8867988ecc', //  App Secret
        'callbackURL'   : '/auth/facebook/callback'
        // 'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        // 'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'googleAuth' : {
        'clientID'      : '1013408651301-cpv9dj9vm49ro7pesljk5vtj11c0pj0d.apps.googleusercontent.com',
        'clientSecret'  : 'IndIHdmgdEwwOfAOdpjlvQc4',
        'callbackURL'   : '/auth/google/callback'
    }

};
