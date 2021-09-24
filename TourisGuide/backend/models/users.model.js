const sql = require("./db.js");

// constructor
const User = function(user) {
  this.user_name = user.user_name;
  this.user_password = user.user_password;
  this.first_name=user.first_name,
  this.last_name = user.last_name;
  this.email_address = user.email_address;
  this.phone_no = user.phone_no;
  this.bank_details = user.bank_details;
  this.user_status = user.user_status;
  this.registered_date = user.registered_date;
  this.last_visit_date = user.last_visit_date;
  this.age = user.age;
  this.nic = user.nic;
  this.birthday = user.birthday;
  this.hotel_name = user.hotel_name;
  this.hotel_contact_no = user.hotel_contact_no;
  this.city = user.city;
  this.role_id = user.role_id;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (userId, result) => {
  sql.query(`SELECT * FROM users WHERE user_id = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};

User.getAll = (role,result) => {
  sql.query(`SELECT * FROM users u INNER JOIN user_role r ON u.role_id=r.role_id WHERE r.role_name= '${role}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET user_name = ?, user_password = ?, first_name = ?,last_name = ?,email_address = ?, phone_no = ?,bank_details = ?,user_status = ?, registered_date = ?,last_visit_date = ?, age = ?,nic = ?, birthday = ?,hotel_name = ?, hotel_contact_no = ?,city = ?, role_id = ? WHERE user_id = ?",
    [user.user_name,
     user.user_password,
     user.first_name,
     user.last_name,
     user.email_address,
     user.phone_no,
     user.bank_details,
     user.user_status,
     user.registered_date,
     user.last_visit_date,
     user.age,
     user.nic,
     user.birthday,
     user.hotel_name,
     user.hotel_contact_no,
     user.city,
     user.role_id,
     id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE user_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found User with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

User.removeAll = result => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} user`);
    result(null, res);
  });
};

module.exports = User;