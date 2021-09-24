const sql = require("./db.js");

// constructor
const Booking = function(booking) {
  this.date = booking.date;
  this.customerID = booking.customerID;
  this.packageID=booking.packageID,
  this.booked_date = booking.booked_date;
  this.no_of_days = booking.no_of_days;
  this.no_of_visitors = booking.no_of_visitors;
  this.no_of_rooms = booking.no_of_rooms;
  this.transport_type = booking.transport_type;
  this.price = booking.price;
  this.paymentID = booking.paymentID;
  this.guide_status = booking.guide_status;
  this.transport_status = booking.transport_status;
  this.booking_status = booking.booking_status;
  this.guide_id = booking.guide_id;
  this.transport_id=booking.transport_id
};

Booking.create = (newBookings, result) => {
  sql.query("INSERT INTO bookings SET ?", newBookings, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created booking: ", { id: res.insertId, ...newBookings });
    result(null, { id: res.insertId, ...newBookings });
  });
};

Booking.findByGuideId = (guideId,status,history, result) => {
  if(history){
    sql.query(`SELECT * FROM bookings AS b INNER JOIN users AS u ON b.customerID=u.user_id  WHERE b.guide_id = ${guideId} AND b.guide_status = '${status}' AND booked_date < NOW()`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found booking: ", res);
        result(null, res);
        return;
      }
  
      // not found Booking with the id
      result({ kind: "not_found" }, null);
    });
  }else{
    sql.query(`SELECT * FROM bookings AS b INNER JOIN users AS u ON b.customerID=u.user_id  WHERE b.guide_id = ${guideId} AND b.guide_status = '${status}' AND booked_date > NOW()`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found booking: ", res);
        result(null, res);
        return;
      }
  
      // not found Booking with the id
      result({ kind: "not_found" }, null);
    });
  } 
};

Booking.findById = (bookingId, result) => {
  sql.query(`SELECT * FROM bookings WHERE bookingId = ${bookingId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found booking: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Booking with the id
    result({ kind: "not_found" }, null);
  });
};

Booking.getAll = (status,result) => {
    sql.query(`SELECT * FROM bookings AS b INNER JOIN users AS u ON b.customerID=u.user_id  WHERE b.booking_status = '${status}' AND booked_date > NOW()`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("bookings: ", res);
      result(null, res);
    })
};

Booking.updateById = (id, booking, result) => {
  console.log('bndoqwnfonfie',booking);
  sql.query(
    "UPDATE bookings SET date = ?, customerId = ?, packageId = ?, booked_date = ?, no_of_days = ?, no_of_visitors = ?, no_of_rooms = ?, transport_type = ?, price = ?, paymentId = ?, guide_status = ?, transport_status = ?, booking_status = ?, guide_id = ?, transport_id=? WHERE bookingID = ?",
    [booking.date,
    booking.customerID,
    booking.packageID,
    booking.booked_date,
    booking.no_of_days,
    booking.no_of_visitors,
    booking.no_of_rooms,
    booking.transport_type,
    booking.price,
    booking.paymentID,
    booking.guide_status,
    booking.transport_status,
    booking.booking_status,
    booking.guide_id,
    booking.transport_id,
     id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Booking with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated booking: ", { id: id, ...booking });
      result(null, { id: id, ...booking });
    }
  );
};

Booking.remove = (id, result) => {
  sql.query("DELETE FROM bookings WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Booking with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted booking with id: ", id);
    result(null, res);
  });
};

Booking.removeAll = result => {
  sql.query("DELETE FROM bookings", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Booking;