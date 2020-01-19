import '../sass/style.scss';
import { loading } from './app'
import Profile from '/src/images/pixel_paco.png';

loading();
   // Add the image to our existing div.
   const myProfile = new Image();
   myProfile.src = Profile;
   myProfile.alt = 'Profile - Francisco J. López';

   const profile = document.querySelector('#profile');
   profile.appendChild(myProfile);