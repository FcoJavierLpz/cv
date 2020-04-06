import "../sass/style.scss";
import { loading } from "./app";
import Profile from "../images/pixel_paco.png";

loading();
// Add the image to our existing div.
const myProfile = new Image();
myProfile.src = Profile;
myProfile.alt = "Profile - Francisco J. López";

const profile = document.querySelector("#profile");
if (profile.getElementsByTagName("img").length === 0)
  profile.appendChild(myProfile);
