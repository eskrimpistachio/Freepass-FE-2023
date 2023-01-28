import { Container } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Pages Component/Footer";

const Bookings = () => {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Container>
        <div className="rounded-2xl">
          <h1>Bookings</h1>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Bookings;
