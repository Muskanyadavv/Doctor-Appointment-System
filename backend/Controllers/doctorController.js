import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: " Failed to update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(404).json({ success: false, message: " Failed to delete" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const {id }= req.params;
  try {
    const doctor = await Doctor.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "user", select: "name photo" },  // Populate user details
    })
      .select("-password");
    res
      .status(200)
      .json({ success: true, message: "Doctor found", data: doctor });
  } catch (err) {
    res.status(404).json({ success: false, message: " No Doctor found" });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let filter = { isApproved: "approved" };

    if (query) {
   
      
       filter.$or=[
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }
    
      const doctors = await Doctor.find(filter).select("-password");
    res
      .status(200)
      .json({ success: true, message: "Doctor found", data: doctors });
  } catch (err) {
    res.status(404).json({ success: false, message: " Not found" });
  }
};

export const getDoctorProfile = async(req,res)=>{
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({doctor:doctorId})
    res
      .status(200)
      .json({
        success: true,
        message: "Profile info is getting",
        data: { ...rest, appointments},
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong, cannot get" });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    //1---- retrive appointments from booking

    const bookings = await Booking.find({ user: req.userId });
    // 2---- extract doctor ids from appointments booking

    const doctorIds = bookings.map((el) => el.doctor.id);
    //3---- retrieve doctors using ids

    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Appointments are getting",
        data: doctors,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong, cannot get" });
  }
};


