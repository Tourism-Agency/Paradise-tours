const sql = require("./db.js");

// constructor
const Message = function(message){
  this.title = message.title;
  this.message = message.message;
  this.response = message.response;
  this.user_id = message.user_id;
  this.user_role = message.user_role;
}

Message.create = (newMessage, result) => {
  sql.query("INSERT INTO messages SET ?", newMessage, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created message: ", { id: res.insertId, ...newMessage });
    result(null, { id: res.insertId, ...newMessage });
  });
};

Message.findById = (customerId, result) => {
  sql.query(`SELECT * FROM messages WHERE id = ${customerId}`, (err, res) => {
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

    // not found Message with the id
    result({ kind: "not_found" }, null);
  });
};

Message.getAll = result => {
  sql.query("SELECT * FROM messages m INNER JOIN users u ON m.user_id=u.user_id", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("messages: ", res);
    result(null, res);
  });
};

Message.findByGuideId = (guideId,result) => {
  sql.query(`SELECT * FROM messages WHERE user_id = ${guideId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("messages: ", res);
    result(null, res);
  });
};

Message.updateById = (id, message, result) => {
  sql.query(
    "UPDATE messages SET message = ?, response = ?, user_id = ?, title = ?, user_role = ? WHERE messageId = ?",
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
        // not found Message with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated message: ", { id: id, ...message });
      result(null, { id: id, ...message });
    }
  );
};

Message.remove = (id, result) => {
  sql.query("DELETE FROM messages WHERE messageId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Message with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted message with id: ", id);
    result(null, res);
  });
};

Message.removeAll = result => {
  sql.query("DELETE FROM messages", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Message;