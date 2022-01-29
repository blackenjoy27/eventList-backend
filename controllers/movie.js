const { Movie } = require("../models/movies");



exports.searchMovie = async (req, res) => {

  try {
    const newMovie = new Movie({
      year: 2022,
      title: "antra",
      cast: [],
      genres: []
    });
    const info = await newMovie.save();

    const result = await Movie.find({ year: 2022 });
    console.log("result", result, info)


    const { keyword } = req.body;
    const movies = await Movie.fuzzySearch(keyword);
    console.log(movies);
    res.status(200).json(movies);
  } catch (e) {
    res.status(400).json({ message: `Request Fail: ${e.message}` })
  }
};




