var playlist = new Object ({Eagles: 'Alright'});
function updatePlaylist(playlist, artistName, songTitle){
  //adds the `artistName: songTitle` key-value pair to `playlist`
  return Object.assign({}, playlist { [artistName]: songTitle});
}
function removeFromPlaylist(playlist, artistName){
  //removes `artistName` from `playlist`

}
