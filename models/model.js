let playlist = [
    {
      id: 1,
      title: "I Believe",
      artists: ["Irfan Makki", "Maher Zain"],
      songUrl:
        "https://open.spotify.com/track/1ORdWv8kWVPcJWCFumenuv?si=b4fa3f9915964157",
      playedCount: 2,
    },
    {
      id: 2,
      title: "So Real",
      artists: ["Reaf", "Maher Zain"],
      songUrl:
        "https://open.spotify.com/track/65T8C91gpRHOKuWebM5qby?si=cec89f04a0354a83",
      playedCount: 1,
    },
  ];
  
  const getPlaylist = () => {
    return playlist;
  };
  
  const sortPlaylistByPlayedCount = () => {
    return playlist.sort((a, b) => {
      if (a.playedCount > b.playedCount) {
        return -1;
      } else if (a.playedCount < b.playedCount) {
        return 1;
      }
      return 0;
    });
  };
  
  const findSongById = (songId) => {
    return playlist.find((song) => song.id === parseInt(songId));
  };
  
  const addPlayedCount = (songId) => {
    const song = findSongById(songId);
    song.playedCount++;
  };
  
  const addNewSong = (songTitle, songArtists, songUrl) => {
    playlist.push({
      id: playlist.length + 1,
      songTitle,
      songArtists,
      songUrl,
      playedCount: 0,
    });
    return playlist[playlist.length - 1];
  };
  
  module.exports = {
    getPlaylist,
    sortPlaylistByPlayedCount,
    addNewSong,
    addPlayedCount,
    findSongById,
  };
  