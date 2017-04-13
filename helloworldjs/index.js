var greetings = require('./lib/greetings.json');
/**
 * @param {string} language - The language to call out e.g English or French 
 */
var greetCall = function(language){
    //if language is specified
    if(language){
        //Print out greetings in language
        console.log(greetings[language]);
    }else{
        //Print out greetings in default language - English since no language specified
        console.log(greetings['English']);
    }
}

/**
 * @param {string} language - The language to call out e.g English or French
 * @returns {string} 
 */
var greetReturn = function(language){
    //if language is specified
    if(language){
        //Return greetings in language
        return greetings[language];
    }else{
        //Return greetings in default language - English since no language specified
        return greetings['English'];
    }
}


module.exports = {
    'greetCall': greetCall,
    'greetReturn': greetReturn
};