const sql = require("./db.js");

// constructor
const Package = function(package) {
  this.no_of_places_visit = package.no_of_places_visit;
  this.time_limit = package.time_limit,
  this.prize_with_van = package.prize_with_van;
  this.prize_with_bus = package.prize_with_bus;
  this.prize_with_car = package.prize_with_car;
};

Package.create = (newPackage, result) => {
  sql.query("INSERT INTO package SET ?", newPackage, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created package: ", { id: res.insertId, ...newPackage });
    result(null, { id: res.insertId, ...newPackage });
  });
};

Package.findByGuideId = (guideId,status, result) => {
  sql.query(`SELECT * FROM package AS b INNER JOIN users AS u ON b.customerID=u.user_id  WHERE guide_id = ${guideId} AND guide_status = '${status}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found package: ", res);
      result(null, res);
      return;
    }

    // not found Package with the id
    result({ kind: "not_found" }, null);
  });
};

Package.findById = (packageId, result) => {
  sql.query(`SELECT * FROM package WHERE package_id = ${packageId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found package: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Package with the id
    result({ kind: "not_found" }, null);
  });
};

Package.findByHotels = (packageId, result) => {
  sql.query(`SELECT * FROM hotel_description As h INNER JOIN package_hotel AS p ON h.hotel_id=p.hotel_id WHERE p.package_id = ${packageId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found package: ", res);
      result(null, res);
      return;
    }

    // not found Package with the id
    result({ kind: "not_found" }, null);
  });
};

Package.findByLocations = (packageId, result) => {
  sql.query(`SELECT * FROM place_description AS p INNER JOIN package_location l ON p.place_id=l.place_id WHERE l.package_id = ${packageId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found package: ", res);
      result(null, res);
      return;
    }

    // not found Package with the id
    result({ kind: "not_found" }, null);
  });
};

Package.findByTransports = (packageId, result) => {
  sql.query(`SELECT u.first_name,u.last_name FROM users u WHERE u.user_id IN (SELECT td.user_id FROM transport_details td INNER JOIN package_transport pt ON td.transport_id=pt.transport_id WHERE pt.package_id =${packageId})`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found package: ", res);
      result(null, res);
      return;
    }

    // not found Package with the id
    result({ kind: "not_found" }, null);
  });
};

Package.getAll = result => {
  sql.query("SELECT * FROM package", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("package: ", res);
    result(null, res);
  });
};

Package.updateById = (id, package, result) => {
  sql.query(
    "UPDATE package SET date = ?, customerId = ?, packageId = ?, booked_date = ?, no_of_days = ?, no_of_visitors = ?, no_of_rooms = ?, transport_type = ?, price = ?, paymentId = ?, guide_status = ?, transport_status = ?, booking_status = ?, guide_id = ? WHERE bookingID = ?",
    [package.date,
    package.customerID,
    package.packageID,
    package.booked_date,
    package.no_of_days,
    package.no_of_visitors,
     id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Package with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated package: ", { id: id, ...package });
      result(null, { id: id, ...package });
    }
  );
};

Package.remove = (id, result) => {
  sql.query("DELETE FROM package WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Package with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted package with id: ", id);
    result(null, res);
  });
};

Package.removeAll = result => {
  sql.query("DELETE FROM package", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Package;