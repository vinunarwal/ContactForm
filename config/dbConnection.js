const mongoose = require("mongoose");

const conn = async () => {

    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/contact_form");
        console.log(
            "Db Connected ",
            connect.connection.name
        );
    }
    catch (err) {
        console.error("err");
        process.exit(1);
    }
}

module.exports = conn;
