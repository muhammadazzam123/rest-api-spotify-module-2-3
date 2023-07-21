const express = require("express");

const {
  newSong,
  playSong,
  showPlaylist,
  getPlaylstByMostPlayed,
} = require("../controllers/controller");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const response = showPlaylist();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/most-played", (req, res) => {
  try {
    const response = getPlaylstByMostPlayed();
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/song", (req, res) => {
  try {
    const response = newSong(
      req.body.title,
      req.body.artists,
      req.body.songUrl
    );
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/play/:id", (req, res) => {
  try {
    const playedSong = playSong(req.params.id);
    const response = `Now playing ${playedSong.songData.title} by ${playedSong.songData.artists}`;
    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
