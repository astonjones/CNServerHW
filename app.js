const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("This is the index route");
});

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

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});