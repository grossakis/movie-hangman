// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var fs = require('file-system');

// Initialize Express
var app = express();

app.use(express.static("public"));

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

app.get('/all' , function(req, res) {
  db.scrapedData.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

app.get('/populate', function (req, res) {
  // Make a request call to grab the HTML body from the site of your choice
  request("https://www.imdb.com/search/title?groups=top_250&sort=user_rating&page=5&ref_=adv_nxt", function(error, response, html) {

    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // Select each element in the HTML body from which you want information.
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    $("h3.lister-item-header").each(function(i, element) {

    //   var link = $(element).children().find('img').attr('data-src');
      var title = $(element).children("a").text();

      console.log(i + ": " + title)

      // Save these results in an object that we'll push into the results array we defined earlier
    //   db.scrapedData.insert({
    //     count: i,
    //     title: title,
    //     link: "https:"+link
    //   });
      // writeFile.sync('foo.txt', i + ": " + title);
      fs.appendFile('foo.txt', '"'+title+'"'+',', function(err) {})
    });

    // Log the results once you've looped through each of the elements found with cheerio
    // console.log(results);
  });
  res.send("List Populated");
})



// TODO: make two more routes

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
