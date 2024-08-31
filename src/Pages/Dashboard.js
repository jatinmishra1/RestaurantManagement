import React from "react";
import Header from "../components/Header/Header.js";
import ScrollableTags from "../components/ScrollableTags/ScrollableTags.js";
import ImageSlider from "../components/Slider/Slider.js";
import DiscountBanner from "../components/Discount/DiscountBanner.js";
import Footer from "../components/Footer/Footer.js";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <ScrollableTags />
      <ImageSlider
        imagesArray={[
          "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-Winterwear-Sweatshirts-Ai-common-1724939699.jpg",
          "https://images.bewakoof.com/uploads/grid/app/1X1-dotw-common-ezgif-com-optimize-1725004500.gif",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SavingsZone-common-1724246289.jpg",
          "https://images.bewakoof.com/uploads/grid/app/1X1-dotw-common-ezgif-com-optimize-1725004500.gif",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SavingsZone-common-1724246289.jpg",
        ]}
      />
      <DiscountBanner />
      <ImageSlider
        componentWidth="300px"
        imagesArray={[
          "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Women-11-1724743210.jpg",
          "https://images.bewakoof.com/t1080/women-s-blue-baggy-straight-fit-jeans-625170-1723547286-1.jpg",
          "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Women-11-1724743210.jpg",
          "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=600",
        ]}
      />
      <ImageSlider
        componentWidth="300px"
        imagesArray={[
          "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.bewakoof.com/t1080/women-s-blue-baggy-straight-fit-jeans-625170-1723547286-1.jpg",
          "https://images.bewakoof.com/uploads/grid/app/1X1-dotw-common-ezgif-com-optimize-1725004500.gif",
          "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.bewakoof.com/uploads/grid/app/1X1-dotw-common-ezgif-com-optimize-1725004500.gif",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SavingsZone-common-1724246289.jpg",
        ]}
      />
      <ImageSlider
        componentWidth="300px"
        imagesArray={[
          "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.bewakoof.com/t1080/women-s-blue-baggy-straight-fit-jeans-625170-1723547286-1.jpg",
          "https://images.bewakoof.com/uploads/grid/app/1X1-dotw-common-ezgif-com-optimize-1725004500.gif",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SavingsZone-common-1724246289.jpg",
          "https://images.bewakoof.com/uploads/grid/app/1X1-dotw-common-ezgif-com-optimize-1725004500.gif",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SavingsZone-common-1724246289.jpg",
        ]}
      />
      <ImageSlider
        componentWidth="300px"
        imagesArray={[
          "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-Winterwear-Sweatshirts-Ai-common-1724939699.jpg",
          "https://images.bewakoof.com/uploads/grid/app/1X1-dotw-common-ezgif-com-optimize-1725004500.gif",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SavingsZone-common-1724246289.jpg",
          "https://images.bewakoof.com/uploads/grid/app/1X1-dotw-common-ezgif-com-optimize-1725004500.gif",
          "https://images.bewakoof.com/uploads/grid/app/1x1-2024-HC-SavingsZone-common-1724246289.jpg",
        ]}
      />
      <Footer />
    </div>
  );
};

export default Dashboard;
