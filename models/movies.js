const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  cast: {
    type: [String],
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  }
});

movieSchema.plugin(mongoose_fuzzy_searching, { fields: ['title', 'year'] });
const Movie = mongoose.model('Movie', movieSchema);
module.exports = { Movie };
