// const submitSurvey = async (req, res) => {
//   try {
//     const surveyData = req.body;

//   } catch (error) {
//     // Respond with an error message
//     console.log(error);
//     res.status(500).json({ message: "Error saving survey data", error });
//   }
// };

// module.exports = submitSurvey;
// ----------------------------------------------------------

// const Survey = require("../models/survey");

// const submitSurvey = async (req, res) => {
//   try {
//     const surveyData = req.body;

//     const newSurvey = new Survey(surveyData);

//     await newSurvey.save();

//     res
//       .status(200)
//       .json({ message: "Survey data saved successfully", surveyData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error saving survey data", error });
//   }
// };

// module.exports = submitSurvey;

// ------------------------------------------------------------
const Survey = require("../models/survey");

const submitSurvey = async (req, res) => {
  try {
    const surveyData = req.body;

    const newSurvey = new Survey(surveyData);

    await newSurvey.save();

    res
      .status(200)
      .json({ message: "Survey data saved successfully", surveyData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error saving survey data", error: error.message });
  }
};

module.exports = submitSurvey;
