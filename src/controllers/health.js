import { connect } from "../database/mongoTest.js";

export const health = async (req, res) => {
  try {
    await connect();
    res.send("OK");
  } catch (error) {
    res.status(500).send("Internal Error: ", error);
  }
};
