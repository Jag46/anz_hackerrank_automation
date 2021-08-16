var globalTestData = function() {
  this.userCreationData = {
    firstName: "John",
    lastName: "Rossi",
    address1: "404 4th floor",
    address2: "wood street",
    company: "IGS",
    city: "Kern",
    postcode: "95305",
    password: "Rossi@1234",
    email: "test5489@test.com",
    phone_mobile: "9123456789",
    aliasName: "My Address"
  };

  this.setField = function(field, value) {
    this.testData[field] = value;
  };

  this.getField = function(field) {
    return this.testData[field];
  };
  this.deleteField = function(field) {
    delete this.testData[field];
  }
};
module.exports = new globalTestData();