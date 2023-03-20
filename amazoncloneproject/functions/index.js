const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// use secret key here
const stripe = require("stripe")(
  "sk_test_51Mcv38BTvE63eNWOjGnN6jnQEg8DsLtdO8QmaWLcjqYlrJH4WePqVEAbn0VodvqtPyrw0uwspCvKPh8xcWaGHCQ8003U55EkJZ"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// http://127.0.0.1:5001/project-cf9e0/us-central1/api
// base url the display hello world
app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;
//   console.log("Payment Request Recieved for this amount >>> ", total);
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: "usd",
//   });
//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.clientSecret,
//   });
//   req.end();
// });

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    payment_method_types: ["card"],
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/project-cf9e0/us-central1/api/payments/create
