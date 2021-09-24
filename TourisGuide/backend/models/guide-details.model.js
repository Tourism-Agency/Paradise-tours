const sql = require("./db.js");

// constructor
const GuideDetail = function(guideDetail) {
  this.skills = guideDetail.skills;
};

GuideDetail.create = (newGuideDetail, result) => {
  sql.query("INSERT INTO guide_details_skills SET ?", newGuideDetail, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created guideDetail: ", { id: res.insertId, ...newGuideDetail });
    result(null, { id: res.insertId, ...newGuideDetail });
  });
};

GuideDetail.findById = (customerId, result) => {
  sql.query(`SELECT * FROM guide_details_skills WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found guideDetail: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found GuideDetail with the id
    result({ kind: "not_found" }, null);
  });
};

GuideDetail.findByGuideId = (guideId,result) => {
  sql.query(`SELECT * FROM guide_details_skills WHERE guide_id = ${guideId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("messages: ", res);
    result(null, res);
  });
};

GuideDetail.getAll = result => {
  sql.query("SELECT * FROM guide_details_skills", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

GuideDetail.updateById = (id, guideDetail, result) => {
  sql.query(
    "UPDATE guide_details_skills SET email = ?, name = ?, active = ? WHERE id = ?",
    [guideDetail.email, guideDetail.name, guideDetail.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found GuideDetail with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated guideDetail: ", { id: id, ...guideDetail });
      result(null, { id: id, ...guideDetail });
    }
  );
};

GuideDetail.remove = (id, result) => {
  sql.query("DELETE FROM guide_details_skills WHERE guide_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found GuideDetail with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted guideDetail with id: ", id);
    result(null, res);
  });
};

GuideDetail.removeAll = result => {
  sql.query("DELETE FROM guide_details_skills", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = GuideDetail;