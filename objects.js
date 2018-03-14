var playlist = new Object ({Eagles: 'Alright'});
function updatePlaylist(playlist, artistName, songTitle){
  //adds the `artistName: songTitle` key-value pair to `playlist`
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  //removes `artistName` from `playlist`

}
