import proj_image1 from "./components/images/voting.png";
import proj_image2 from "./components/images/drone.jpg";
import proj_image3 from "./components/images/btc.avif";

export const projects = [
  {
    title: "IRV and OPL Voting System",
    subtitle: "Java",
    description:
      "A voting system written in Java that takes can run Instant Runoff Voting or Open Party Listing systems. Complete with documentation and testing.",
    image: proj_image1,
    link: "https://github.com/seanbeaulieu/voting_irv_opl_system",
  },
  {
    title: "Drone Delivery Simulation",
    subtitle: "C++",
    description:
      "Semester long project for CSCI 3081: Program Design and Development. Simulates a drone pickup and delivery service.",
    image: proj_image2,
    link: "https://github.com/seanbeaulieu/drone_simulation",
  },
  {
    title: "BTC and Gold",
    subtitle: "R",
    description:
      "Project written in R to explore the historical pricing of Bitcoin and Gold.",
    image: proj_image3,
    link: "https://github.com/seanbeaulieu/btc_gold",
  },
];

