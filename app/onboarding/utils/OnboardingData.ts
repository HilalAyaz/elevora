import ProfileBranding from "../components/ProfileBranding";
import Skills from "../components/Skills";
import Links from "../components/Links";
import About from "../components/About";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import ReviewSubmit from "../components/ReviewSubmit";

const steps = [
  { name: "Profile Branding", component: ProfileBranding },
  { name: "Skills", component: Skills },
  { name: "Links", component: Links },
  { name: "About", component: About },
  { name: "Projects", component: Projects },
  { name: "Gallery", component: Gallery },
  { name: "Review & Submit", component: ReviewSubmit },
];

export default steps;
