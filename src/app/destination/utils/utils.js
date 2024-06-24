import moon from "@/assets/destination/image-moon.png";
import mars from "@/assets/destination/image-mars.png";
import europa from "@/assets/destination/image-europa.png";
import titan from "@/assets/destination/image-titan.png";

// data
export const planets = [
    {
      name: "Moon",
      image: moon,
      distance: "384,400 km",
      time: "3 days",
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    },
    {
      name: "Mars",
      image: mars,
      distance: "225,000 km",
      time: "9 months",
      description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    },
    {
      name: "Europa",
      image: europa,
      distance: "628,000 km",
      time: "3 years",
      description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    },
    {
      name: "Titan",
      image: titan,
      distance: "1,600,000 km",
      time: "7 years",
      description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    },
  ];