const express = express();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("This is the index route");
});

app.get('/palindrome', function(req, res){
    let j = req.body.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;//forward character
      let y = str[j-i];//backward character
      if( x != y)
      {
        // return false if string not match
        res.status(200).send("That is a palindrome!");
      }
    }
    /// return true if string is palindrome
    res.status(400).send("That is not a palindrome");
});