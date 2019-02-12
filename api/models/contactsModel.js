var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the contact name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  phone: {
    type: String,
    required: 'Enter the phone'
  }

});

module.exports = mongoose.model('Contacts', ContactSchema);