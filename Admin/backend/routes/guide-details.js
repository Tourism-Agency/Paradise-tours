var express = require('express');
var router = express.Router();
const guildDetails = require("../controllers/guide-details.controller.js");

  // Create a new Customer
  router.post("/", guildDetails.create);

  // Retrieve all Customers
  router.get("/", guildDetails.findAll);

  // Retrieve a single Customer with customerId
  router.get("/:customerId", guildDetails.findOne);

  // Update a Customer with customerId
  router.put("/:guideId", guildDetails.update);

  // Delete a Customer with customerId
  router.delete("/:customerId", guildDetails.delete);

  // Create a new Customer
  router.delete("/", guildDetails.deleteAll);

module.exports = router;
