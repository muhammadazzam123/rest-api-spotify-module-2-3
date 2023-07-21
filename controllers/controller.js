const {
    addNewSong,
    findSongById,
    addPlayedCount,
    getPlaylist,
    sortPlaylistByPlayedCount,
  } = require("../models/model");
  
  const showPlaylist = () => {
    const playlist = getPlaylist();
    return playlist;
  };
  
  const getPlaylstByMostPlayed = () => {
    const playlist = sortPlaylistByPlayedCount();
    return playlist;
  };
  
  const newSong = (songTitle, songArtists, songUrl) => {
    if (songTitle == null || songArtists == null || songUrl == null) {
      throw {
        type: "missing-parameter",
        message: "Song' title and artists can't be empty",
      };
    }
    const addedSong = addNewSong(songTitle, songArtists, songUrl);
    return {
      status: "success",
      message: "Song is successfuly added to playlist",
      addedSong,
    };
  };
  
  const playSong = (songId) => {
    const songData = findSongById(songId);
    if (songData == null) {
      throw {
        type: "not-found",
        message: "Song is not in your playlist",
      };
    }
    addPlayedCount(songId);
    return {
      status: "success",
      songData,
    };
  };
  
  module.exports = { showPlaylist, getPlaylstByMostPlayed, newSong, playSong };
  