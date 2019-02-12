module.exports = function(app) {
  var contact = require('../controllers/contactsController');

  // contact Routes
  app.route('/contacts')
    .get(contact.list_all_contacts)
    .post(contact.create_a_contact);

  app.route('/contacts/:contactId')
    .get(contact.read_a_contact)
    .put(contact.update_a_contact)
    .delete(contact.delete_a_contact);

    app.get('/add',(req,res)=>{
      res.sendFile(__dirname + '/public/addContact.html');
    });

    app.get('/list',(req,res)=>{
      res.sendFile(__dirname + '/public/listcontacts.html');
    });

};