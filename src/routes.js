const express = require("express");
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");
const CompanyController = require("./controllers/CompanyController");

const routes = express.Router();

//users routes
routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.delete);
//address routes
routes.post("/users/:user_id/addresses", AddressController.store);
routes.get("/users/:user_id/addresses", AddressController.index);
routes.delete(
  "/users/:user_id/:address_id/addresses",
  AddressController.delete
);
routes.put("/users/:address_id/addresses", AddressController.update);
//Techs routes
routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);
routes.put("/users/:tech_id/techs", TechController.update);

//report routes
routes.get("/report", ReportController.show);

//company routes
routes.post("/company", CompanyController.store);
routes.get("/company", CompanyController.index);
routes.put("/company/:company_id", CompanyController.update);
routes.delete("/company/:company_id", CompanyController.delete);

module.exports = routes;
