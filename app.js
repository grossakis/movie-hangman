// movie titles scraped from IMDB's Top 250 (Sept. 24th, 2018)
var movies=[
    "The Shawshank Redemption","The Godfather","The Dark Knight","The Godfather: Part II","Pulp Fiction","Schindler's List","The Lord of the Rings: The Return of the King","12 Angry Men","The Good, the Bad and the Ugly","Inception","The Lord of the Rings: The Fellowship of the Ring","Fight Club","Forrest Gump","Star Wars: Episode V - The Empire Strikes Back","Goodfellas","The Matrix","One Flew Over the Cuckoo's Nest","The Lord of the Rings: The Two Towers","Seven Samurai","Avengers: Infinity War","Interstellar","Star Wars: Episode IV - A New Hope","Léon: The Professional","The Silence of the Lambs","Se7en","Saving Private Ryan","The Usual Suspects","Spirited Away","City of God","Life Is Beautiful","It's a Wonderful Life","City Lights","The Departed","Back to the Future","Gladiator","Alien","Whiplash","The Prestige","The Lion King","Apocalypse Now","Psycho","The Green Mile","Terminator 2","Raiders of the Lost Ark","American History X","Memento","The Intouchables","Once Upon a Time in the West","The Pianist","Casablanca","Rear Window","Dangal","Cinema Paradiso","Grave of the Fireflies","Sunset Blvd.","Modern Times","The Great Dictator","Coco","The Dark Knight Rises","The Shining","Django Unchained","American Beauty","Aliens","Braveheart","Your Name.","Oldeuboi","Once Upon a Time in America","The Lives of Others","3 Idiots","Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb","WALL·E","Citizen Kane","Princess Mononoke","Das Boot","Taare Zameen Par","M","Paths of Glory","Witness for the Prosecution","Babam ve Oglum","Inglourious Basterds","Taxi Driver","Scarface","Requiem for a Dream","Full Metal Jacket","A Clockwork Orange","Eternal Sunshine of the Spotless Mind","2001: A Space Odyssey","Batman Begins","Good Will Hunting","Snatch","Reservoir Dogs","To Kill a Mockingbird","Star Wars: Episode VI - Return of the Jedi","Indiana Jones and the Last Crusade","Up","Toy Story","L.A. Confidential","Jagten","Amélie","Lawrence of Arabia","Amadeus","Toy Story 3","Monty Python and the Holy Grail","Vertigo","The Sting","Metropolis","Some Like It Hot","Singin' in the Rain","North by Northwest","A Separation","For a Few Dollars More","The Apartment","Tangerines","All About Eve","Double Indemnity","Rashômon","Children of Heaven","Bicycle Thieves","The Treasure of the Sierra Madre","The Kid","Yojimbo","Ikiru","The Bandit","Three Billboards Outside Ebbing, Missouri","Room","The Wolf of Wall Street","A Beautiful Mind","Blade Runner","Die Hard","Heat","Inside Out","Unforgiven","Trainspotting","Pan's Labyrinth","Warrior","V for Vendetta","Gone with the Wind","Chinatown","Lock, Stock and Two Smoking Barrels","Casino","The Great Escape","Downfall","Incendies","Howl's Moving Castle","The Secret in Their Eyes","Raging Bull","The Elephant Man","My Neighbor Totoro","Come and See","Gangs of Wasseypur","The Third Man","Dial M for Murder","The Seventh Seal","On the Waterfront","The Bridge on the River Kwai","Judgment at Nuremberg","Ran","Andrei Rublev","A Wednesday","Rang De Basanti","Wild Strawberries","Mr. Smith Goes to Washington","Tokyo Story","Sunrise","The Passion of Joan of Arc","The General","The Gold Rush","Sherlock Jr.","Blade Runner 2049","Guardians of the Galaxy","Jurassic Park","Gone Girl","Logan","The Princess Bride","No Country for Old Men","Mad Max: Fury Road","Harry Potter and the Deathly Hallows: Part 2","La La Land","Prisoners","The Help","Hacksaw Ridge","Spotlight","Shutter Island","The Big Lebowski","The Truman Show","Kill Bill: Vol. 1","The Grand Budapest Hotel","Donnie Darko","Platoon","Stand by Me","Into the Wild","The Thing","Fargo","The Sixth Sense","There Will Be Blood","Rocky","12 Years a Slave","Catch Me If You Can","Dead Poets Society","Monsters, Inc.","Million Dollar Baby","Finding Nemo","The Deer Hunter","Gran Torino","How to Train Your Dragon","Rush","Relatos salvajes","Butch Cassidy and the Sundance Kid","Before Sunrise","Stalker","Barry Lyndon","Akira","Hachi: A Dog's Tale","In the Mood for Love","Life of Brian","In the Name of the Father","Cool Hand Luke","Touch of Evil","Persona","Before Sunset","Ben-Hur","Hotel Rwanda","Network","Memories of Murder","Paris, Texas","Rebecca","Amores Perros","Gandhi","La Haine","Mary and Max","Nausicaä of the Valley of the Wind","It Happened One Night","Paper Moon","The Maltese Falcon","Three Colors: Red","Castle in the Sky","Lagaan: Once Upon a Time in India","The Best Years of Our Lives","The Grapes of Wrath","The 400 Blows","Diabolique","The Wages of Fear","The Nights of Cabiria","Jaws","Pirates of the Caribbean: The Curse of the Black Pearl","Beauty and the Beast","The Terminator","Groundhog Day","The Wizard of Oz","The Bourne Ultimatum"
]

// select movie title at random
var movieQuery = movies[Math.floor((Math.random() * 250) + 1)]

// console.log(movieQuery)

// set request url for OMDB api
// var queryUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&apikey=trilogy";

// $.ajax({url: queryUrl, success: function(result){
    
//     var movieOutput = "\nOMDB Movie Search Results: \n\nMovie Title: " + result.Title + "\nRelease Year: " + result.Year + "\nStarring: " + result.Actors + "\nIMDB Rating: " + result.imdbRating + "\nRotten Tomatoes Rating: " + result.Ratings[1].Value + "\nPlot: " + result.Plot + "\nCountry Produced in: " + result.Country + "\nLaguage: " + result.Language + '\n\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n'

//     console.log(result)
//     console.log(movieOutput)
// }});








var playableWords = movies

var newGame = function(){
    var possibleChoices = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    //set number of guesses
    var guessCount = 5
    //pull a random word from the playableWords array
    var playerWord = playableWords[Math.floor(Math.random() * playableWords.length)].toLowerCase();

    var selectedMovieImage;

    // set request url for OMDB api
    var queryUrl = "http://www.omdbapi.com/?t=" + playerWord + "&y=&plot=short&apikey=trilogy";
    $.ajax({url: queryUrl, success: function(result){
        
        selectedMovieImage = result.Poster
        var movieOutput = "\nOMDB Movie Search Results: \n\nMovie Title: " + result.Title + "\nRelease Year: " + result.Year + "\nStarring: " + result.Actors + "\nIMDB Rating: " + result.imdbRating + "\nRotten Tomatoes Rating: " + result.Ratings[1].Value + "\nPlot: " + result.Plot + "\nCountry Produced in: " + result.Country + "\nLaguage: " + result.Language + '\n\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n'

        console.log(result.Poster)
        console.log(movieOutput)

        var movieIndex = playableWords.indexOf(playerWord);
        // remove movie from array to prevent repeats
        playableWords.splice(movieIndex , 1)
        // set the image to be used for the end of the game
        console.log(selectedMovieImage)
        var gameoverImage = $('<img>').attr('src' , selectedMovieImage).addClass('hero-image')
        // make an array out of the letters of the playWord
        var playerWordArray = playerWord.split('');
        //set up elements for game display
        var gameSpace = $('#game-space');
        var activeGameDiv = $('<div>').addClass('active-game-div');
        var blankSpaceDiv = $('<div>').addClass('blank-space-div');
        var guessLetterHead = $('<h2>').text('incorrect guesses');
        var guessedLettersDiv = $('<div>').addClass('guessed-letters-div');
        var replayButton = $('<button>').text('play again').addClass('game-button');
        //set guesses to be its own variable within the guess header
        var guessCountText = $('<span>').html(guessCount);
        var guessCountHeader = $('<h2>').text(' guesses left');
        guessCountHeader.prepend(guessCountText);
        activeGameDiv.append(blankSpaceDiv , guessCountHeader , guessLetterHead , guessedLettersDiv);
        var winLossDiv = $('<div>').addClass('win-loss-div');
        gameSpace.append(activeGameDiv , winLossDiv);
        //set up an array for the blanks to be filled
        var blanksArray = [];
        //set up an array for the missed letters
        var missedLetters = [];
        //fill with the appropriate blanks spaces
        for(var i = 0; i<playerWordArray.length; i++){
            if(playerWordArray[i] === " "){
                blanksArray.push('||')
            }else if(playerWordArray[i] === ":"){
                blanksArray.push(': ')
            }else if(playerWordArray[i] === "."){
                blanksArray.push('.')
            }else{
                blanksArray.push(' _ ')
            }
        }
        //create a function for writing out the blanks and letters for the word in play
        function blankSpaceWrite(){
            blankSpaceDiv.empty();
            console.log(blanksArray)
            for(var i = 0; i<blanksArray.length; i++){
                var blankSpan = $('<span>').text(blanksArray[i]);
                blankSpaceDiv.append(blankSpan);
            }
        }
        blankSpaceWrite();
        //replay button functionality
        replayButton.on('click' , function(){
            var gameSpace = $('#game-space')
            var newGameSpace = $('<div>').addClass("new-game-space")
            gameSpace.empty();
            gameSpace.append(newGameSpace);
            newGame();
        });
        // check for win/loss conditions
        function gameoverCheck(){
            if(guessCount < 1){
                //loss
                var lossText = $('<h2>').text('you lost! the movie is '+playerWord);
                winLossDiv.append(lossText , gameoverImage);
                activeGameDiv.append(replayButton);
                $(document).off('keyup');
            }else if(!blanksArray.includes(' _ ')){
                //win
                var winText = $('<h2>').text('you got it! the movie is '+playerWord);
                winLossDiv.append(winText , gameoverImage);
                activeGameDiv.append(replayButton);
                $(document).off('keyup');
            }
        }
        //keystroke to register guesses
        $(document).on('keyup' ,  function (event) {
            // sets keystrok to a variable
            var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
            // validates keystroke to include only letters and numbers
            if(possibleChoices.includes(letterGuess)){
                if(playerWordArray.includes(letterGuess)){
                    // if the guess is correct...
                    for(var i=0; i < playerWordArray.length; i++){
                        // replace it in the blanks array
                        if(letterGuess === playerWordArray[i]){
                            blanksArray[i] = letterGuess
                        }
                    }
                    // rewrite blanks to include correctly guessed letters
                    blankSpaceWrite();
                    // win/loss check
                    gameoverCheck();
                }else{
                    // if the guess is wrong...
                    // checks to make sure it hasn't been guessed already
                    if(missedLetters.includes(letterGuess)){
                        return
                    }else{
                        // adds it to an array for validation purposes
                        missedLetters.push(letterGuess);
                        missDisplay = $('<span>').text(letterGuess)
                        guessedLettersDiv.append(missDisplay);
                        // lowers the amount of guesses left
                        guessCount--
                        guessCountText.text(guessCount);
                        // win/loss check
                        gameoverCheck();
                    }
                }
            }else{
                return
            }
        })

    }});
    
}
// add functionality for the new game button
$('.game-button').on('click' , function(){
    var gameSpace = $('#game-space')
    var newGameSpace = $('<div>').addClass("new-game-space")
    gameSpace.empty();
    gameSpace.append(newGameSpace);
    newGame();
})