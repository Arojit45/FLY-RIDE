const express = require("express");
const router = express.Router();
const rideController = require("../Controllers/Ride.controller");
const { body, query } = require("express-validator");
const authMiddleware = require("../middlewares/auth.middleware");


router.post("/create",authMiddleware.authUser, 
  [
    body("pickup")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid pickup address"),
    body("destination")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Invalid destination address"),
    body("vehicleType")
      .isString()
      .isIn(["auto", "car", "bike"])
      .withMessage("Invalid vehicle type"),
  ],
  rideController.createRide
);
router.get('/get-fare',authMiddleware.authUser,
  query('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup'),
  query('destination').isString().isLength({min:3}).withMessage('Invalid Pickup'),
  rideController.getFareForAllVehicles
)

router.post(
  "/confirmride",
  authMiddleware.authCaptain,
  body("rideId").isMongoId().withMessage("Invalid ride id"),
  rideController.confirmRide
);

router.get('/start-ride',authMiddleware.authCaptain,
  query('rideId').isMongoId().withMessage('Invalid ride id'),
  query('otp').isString({min:6,max:6}).withMessage('Invalid otp'),
  rideController.startRide
)

router.post('/complete',authMiddleware.authCaptain,
  body('rideId').isMongoId().withMessage('Invalid ride id'),
  rideController.ridecomplete
)

module.exports = router;
