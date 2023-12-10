require("dotenv/config");
const print = (...msgs) => console.log(new Date(), ...msgs);

exports.api = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    print("ERR:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.ENV = process.env;

exports.print = print;
