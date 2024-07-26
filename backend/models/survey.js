// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Define the schema for the personal information section
// const personalInfoSchema = new Schema(
//   {
//     firstname: { type: String, required: true },
//     lastname: { type: String, required: true },
//     email: { type: String, required: true },
//     age: { type: String, required: true },
//     ethnicity: { type: String, required: true },
//   },
//   { _id: false }
// );

// // Define the schema for the questionnaire section
// const questionnaireSchema = new Schema(
//   {
//     question1: { type: String, required: true },
//     question2: { type: String, required: true },
//     question3: { type: Number, required: true },
//     question4: { type: Number, required: true },
//     improvementFeedback: { type: String },
//   },
//   { _id: false }
// );

// // Define the main survey schema
// const surveySchema = new Schema({
//   personalInfo: personalInfoSchema,
//   questionnaire: questionnaireSchema,
//   createdAt: { type: Date, default: Date.now },
// });

// // Create a model from the schema
// const Survey = mongoose.model("Survey", surveySchema);

// module.exports = Survey;

// ------------------------------------------------------------------------

// const mongoose = require("mongoose");

// const surveySchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   age: String,
//   ethnicity: String,
//   productEncounterFrequency: String,
//   influenceByOthers: String,
//   likelihoodToBuy: Number,
//   likelihoodToRecommend: Number,
//   improvementFeedback: String,
// });

// const Survey = mongoose.model("Survey", surveySchema);

// module.exports = Survey;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  purchaseFrequency: {
    type: String,
    enum: ["daily", "weekly", "monthly", "rarely"],
    required: true,
  },
  satisfaction: {
    type: String,
    enum: [
      "very-satisfied",
      "satisfied",
      "neutral",
      "unsatisfied",
      "very-unsatisfied",
    ],
    required: true,
  },
  improvements: {
    type: String,
    required: true,
  },
  recommend: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  favoriteCategory: {
    type: String,
  },
  paymentMethod: {
    type: String,
    enum: ["credit-card", "debit-card", "paypal", "other"],
    required: true,
  },
  returnExperience: {
    type: String,
    required: true,
  },
  shippingPreference: {
    type: String,
    enum: ["standard", "express", "same-day", "in-store-pickup"],
    required: true,
  },
  loyaltyProgram: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  comparisonShopping: {
    type: String,
    enum: ["always", "sometimes", "rarely", "never"],
    required: true,
  },
  techAdoption: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  feedbackImprovements: {
    type: String,
    required: true,
  },
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
