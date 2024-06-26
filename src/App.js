import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import FlightDetails from "./Pages/FlightDetails/FlightDetails.jsx";
import BookingDetails from "./Pages/BookingDetails/BookingDetails.jsx";
import Navbar from "./Components/Home/Navbar/Navbar.jsx";
import Footer from "./Components/Home/Footer/Footer.jsx";
import LoginSignup from "./Pages/Login/LoginSignup.jsx";
import MyTrips from "./Pages/MyTrips/MyTrips.jsx";
// import PaymentGateway from "./Pages/PaymentGateway/PaymentGateway.jsx";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState("");

  const [flightDetails, setFligthDetails] = useState({
    origin: "",
    destination: "",
    departureDate: new Date(),
    returnDate: new Date(),
    class_of_service: "",
    passenger: {
      adult: 1,
      children: 0,
      infants: 0,
    },
    total_Passenger: 1,
  });

  const [searchResults, setSearchResults] = useState([
    {
      _id: "",
      airline: "",
      flight_number: "",
      departure_location: "",
      arrival_location: "",
      departure_date: "",
      arrival_date: "",
      available_seats: 70,
      price: 1999,
      class_of_service: "",
      created_at: "",
      __v: 0,
    },
  ]);

  const [selectedFlight, setSelectedFlight] = useState({
    _id: "",
    airline: "",
    flight_number: "",
    departure_location: "",
    arrival_location: "",
    departure_date: "",
    arrival_date: "",
    available_seats: 70,
    price: 1999,
    class_of_service: "",
    created_at: "",
    __v: 0,
  });

  const [updateFormData, setUpdateFormData] = useState({
    country: "India",
    state: "",
    city: "",
    pincode: "",
  });

  const [passengerDetails, setPassengerDetails] = useState([
    {
      title: "",
      first_name: "",
      last_name: "",
      age: "",
      gender: "",
    },
  ]);

  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

  return (
    <BrowserRouter>
      <Navbar userDetails={userDetails} setUserDetails={setUserDetails} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              flightDetails={flightDetails}
              setFligthDetails={setFligthDetails}
              setSearchResults={setSearchResults}
              alert={alert}
              setAlert={setAlert}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={<LoginSignup alert={alert} setAlert={setAlert} />}
        ></Route>
        <Route
          path="/mytrips"
          element={<MyTrips userDetails={userDetails} />}
        ></Route>
        <Route
          path="/flightdetails"
          element={
            <FlightDetails
              searchResults={searchResults}
              setSelectedFlight={setSelectedFlight}
            />
          }
        ></Route>
        <Route
          path="/bookingdetails"
          element={
            <BookingDetails
              passengerDetails={passengerDetails}
              setPassengerDetails={setPassengerDetails}
              flightDetails={flightDetails}
              selectedFlight={selectedFlight}
              updateFormData={updateFormData}
              setUpdateFormData={setUpdateFormData}
              alert={alert}
              setAlert={setAlert}
            />
          }
        ></Route>
        {/* <Route path="/paymentgateway" element={<PaymentGateway />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
