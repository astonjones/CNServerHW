const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//App utilities initialized
const app = express();
app.use(cors());
app.use(bodyParser.json());

//This is the index route, the first route of the application. Relatively useless
app.get('/', function(req, res){
    res.send("This is the index route");
});

//This is the palindrome route that will check the input string for a palindrome
app.post('/palindrome', function(req, res){
    let object = req.body;
    let string = object.value
    let j = string.length - 1;
    object.isPalindrome = true;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = string[i] ;//forward character
      let y = string[j-i];//backward character
      if(x != y)
      {
        // return false if string not match
        object.isPalindrome = false;
      }
    }
    if(object.isPalindrome == true){
        object.isPalindrome = true;
        console.log(`${object.value} is a palindrome!`)
        res.status(200).send(object);
    }
    else {
        console.log(`${object.value} is not a palindrome!`)
        res.status(200).send(object);
    }
});

//starts the server
app.listen(process.env.PORT, () => {
    console.log('Server started!');
});