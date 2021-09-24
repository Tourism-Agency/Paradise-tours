const sql = require("./db.js");

// constructor
const Guide = function(guide) {
  this.service_charge = guide.service_charge;
  this.availability=guide.availability;
  this.user_id = guide.user_id;
};

Guide.create = (newGuide, result) => {
  sql.query("INSERT INTO guide_details SET ?", newGuide, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created guide: ", { id: res.insertId, ...newGuide });
    result(null, { id: res.insertId, ...newGuide });
  });
};

Guide.findById = (customerId, result) => {
  sql.query(`SELECT * FROM guide_details WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found guide: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Guide with the id
    result({ kind: "not_found" }, null);
  });
};

Guide.getAll = result => {
  sql.query("SELECT * FROM guide_details WHERE user_id=2", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("guide_details: ", res);
    result(null, res);
  });
};

Guide.updateById = (id, guide, result) => {
  sql.query(
    "UPDATE guide_details SET email = ?, name = ?, active = ? WHERE id = ?",
    [guide.email, guide.name, guide.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Guide with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated guide: ", { id: id, ...guide });
      result(null, { id: id, ...guide });
    }
  );
};

Guide.findByGuideId = (guideId,result) => {
  sql.query(`SELECT * FROM guide_details WHERE user_id = ${guideId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("messages: ", res);
    result(null, res);
  });
};

Guide.remove = (id, result) => {
  sql.query("DELETE FROM guide_details WHERE guide_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Guide with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted guide with id: ", id);
    result(null, res);
  });
};

Guide.removeAll = result => {
  sql.query("DELETE FROM guide_details", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Guide;