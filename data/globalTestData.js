var globalTestData = function() {
  this.userCreationData = {
    firstName: "John",
    lastName: "Rossi",
    address1: "",
    address2: "",
    company: "",
    city: "",
    postcode: "",
    password: "Rossi@1234",
    email: "test2134@test.com",
    phone_mobile: "",
    aliasName: ""
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