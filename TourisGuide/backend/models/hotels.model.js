const sql = require("./db.js");

// constructor
const Hotel = function(message){
  this.title = message.title;
  this.message = message.message;
  this.response = message.response;
  this.user_id = message.user_id;
  this.user_role = message.user_role;
}

Hotel.create = (newMessage, result) => {
  sql.query("INSERT INTO hotel_description SET ?", newMessage, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created message: ", { id: res.insertId, ...newMessage });
    result(null, { id: res.insertId, ...newMessage });
  });
};

Hotel.findById = (customerId, result) => {
  sql.query(`SELECT * FROM hotel_description WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found message: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Hotel with the id
    result({ kind: "not_found" }, null);
  });
};

Hotel.getAll = result => {
  sql.query("SELECT * FROM hotel_description", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("hotel_description: ", res);
    result(null, res);
  });
};

Hotel.updateById = (id, message, result) => {
  sql.query(
    "UPDATE hotel_description SET message = ?, response = ?, user_id = ?, title = ?, user_role = ? WHERE messageId = ?",
    [message.message,
    message.response,
    message.user_id,
    message.title,
    message.user_role,
     id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Hotel with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated message: ", { id: id, ...message });
      result(null, { id: id, ...message });
    }
  );
};

Hotel.remove = (id, result) => {
  sql.query("DELETE FROM hotel_description WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Hotel with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted message with id: ", id);
    result(null, res);
  });
};

Hotel.removeAll = result => {
  sql.query("DELETE FROM hotel_description", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Hotel;