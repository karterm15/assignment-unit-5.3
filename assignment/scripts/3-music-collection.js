console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
console.log('in myCollection');


function addToCollection(myCollection, title, artist, yearPublished){
let newCollection = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
};
myCollection.push(newCollection);

return newCollection;
}

addToCollection(myCollection, 'Kaleidoscope', 'Tiesto', 2009 )
addToCollection(myCollection, 'Coming Home', 'Usher', 2024 )
addToCollection(myCollection, 'Here I Stand', 'Usher', 2008 )
addToCollection(myCollection, 'My 21st Century Bules', 'Raye', 2023 )
addToCollection(myCollection, 'Memento', 'Jes', 2022 )
addToCollection(myCollection, 'This Ones For You', 'Luke Combs', 2017 )

console.log('Checking collections with addToCollection Function', myCollection);

function showCollection(myCollection){
for(let i=0; i<myCollection.length; i++)
console.log(myCollection[i].title + 'by' + myCollection[i].artist + ', published in ' + myCollection[i].yearPublished);
}
showCollection(myCollection)

let albumFound =[]; //empty array

function findByArtist(myCollection, artist){
for(let i=0; i<myCollection.length; i++){
  
  if(myCollection[i].artist === artist){
    
albumFound.push(myCollection[i]);

}//end if
}//end for
}//end Function


findByArtist(myCollection,'Usher');
console.log('did we find who we were looking for?', albumFound);

findByArtist(myCollection, 'kane brown')
console.log('did we find this artist?', albumFound);

//Stretch Goal:



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
