const jwt = require("jsonwebtoken");

const authMiddleman = (req, res, next) => {
  // Exract the authorization header from the incoming request
  const authHeader = req.headers.authorization;

  //   If the header is missing or doesn't start with "Bearer", reject the request
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // Pass a 401 Unauthorized error to the next middleware
    return res.status(401).json({ message: "No token provided" });
  }

  //   Split the header into ["Bearer", "token"]
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret key; throw an error message if invalid or expired
    const payload = jwt.verify(token, process.env.JWT_SECRETKey);

    // Attach the decoded userID to req.user
    req.user = { userId: payload.userId };

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleman;

// {
//     Authorization: Bearer token
// }
