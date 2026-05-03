/* Author: Gab-Darlin <Gabbie-Darlin>
    Solution: Movie Watchlist Management
*/

let watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator"];

// 1. Print the total number of movies in the watchlist
console.log("\n***********************************************");
console.log(`Total movies in watchlist: ${watchlist.length}`);
console.log("***********************************************"); 

// 2. Add a new movie "The Dark Knight" to the watchlist
// Method push() => add a new item in the last position of the list
// Function that receives as parameter the new element
watchlist.push("The Dark Knight");
console.log("\n***********************************************");
console.log(`Watchlist after adding new movie: ${watchlist}`);
console.log("***********************************************");     

// 3. Add the movie "Avatar" to the watchlist
watchlist.push("Avatar");
console.log("\n***********************************************");
console.log(`Watchlist after adding new movie: ${watchlist}`);
console.log("***********************************************"); 

// 4. Remove the last movie from the watchlist
// Method pop() => Remove the item in the last position of the list
// Function doesn't receive any parameter, it always deletes the last element in the list
watchlist.pop();
console.log("\n***********************************************");
console.log(`Watchlist after removing the last movie: ${watchlist}`);
console.log("***********************************************");

// 5. Print the first movie in the watchlist
console.log("\n***********************************************");
console.log(`First movie in the watchlist: ${watchlist[0]}`);
console.log("***********************************************");

// 6. Print the last movie in the watchlist
console.log("\n***********************************************");
console.log(`Last movie in the watchlist: ${watchlist[watchlist.length - 1]}`);
console.log("***********************************************");

// 7. Check if the watchlist has 4 or more movies:
console.log("\n***********************************************");
if (watchlist.length >= 4) {
    console.log(`You have many movies to watch!`);
} else {
    console.log(`Your watchlist is small`);
}
console.log("*************************************************");

// 8. Display all movies in the watchlist using a loop
console.log("\n***********************************************");
console.log(`Movies in the watchlist:`);    
for (let i = 0; i < watchlist.length; i++) {
    console.log(`Movie ${i + 1}: ${watchlist[i]}`);
    console.log("\n+++++++++++++++++++++++++++++++++++++++++++++++");
}

