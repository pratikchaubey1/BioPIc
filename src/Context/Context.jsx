import React, { createContext, useContext, useEffect, useState } from "react";
import pone from "../assets/onec.webp";
import ptwo from "../assets/twoc.webp";
import pthree from "../assets/threec.webp";
import pfour from "../assets/fourc.webp";

import pfive from "../assets/Photo/pone.webp";
import psix from "../assets/Photo/ptwo.webp";
import pseven from "../assets/Photo/pthree.webp";
import peight from "../assets/Photo/pfour.webp";
import pnine from "../assets/Photo/pfive.webp";
import pten from "../assets/Photo/psix.webp";
import peleven from "../assets/Photo/pseven.webp";
import ptwelve from "../assets/Photo/peight.webp";
import pthirteen from "../assets/Photo/pnine.webp";

import { p } from "framer-motion/client";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
const photo = [
  {
    img: pone,
    name: "Reva & Zach",
    des: `Let’s call this our “Happy New Year Wedding”. We welcomed 2024 partying with Reva and Zach and we couldn’t have asked for a better beginning for the new year.
This was quite an experience for us and the 450 American friends of Reva and Zach who flew all the way to Udaipur for this cross cultural union.`,
    contry: "Indian",
  },

  {
    img: ptwo,
    name: "",
    des: "An evening of love , style and blend of two cultures in the heart of Singapore.",
    contry: "International",
  },

  {
    img: pthree,
    name: "Alia & Ranbir, Mumbai",
    des: `Two of the greatest actors of this generation decided to get married in the simplest possible way - in their balcony surrounded by only 30 of their closest friends and family members. We spent three days in their Apartment and witnessed love in its purest form.`,
    contry: "Indian",
  },

  { img: pfour, name: "Kiara & Siddharth", des: ``, contry: "Indian" },

  {
    img: pfive,
    name: "Joanna & Matt, Phuket",
    des: `Against the backdrop of the Azure ocean and on a floral altar, adorned with blooms in every shade imaginable, Joanna and Matt exchanged vows that echoed their deep affection and unwavering commitment to each other. It was a celebration of love that transcended cultural differences and embraced the diversity of their backgrounds.`,
    contry: "International, Intimate",
  },

  {
    img: psix,
    name: "Raina & Darshan , Greece",
    des: "Surrounded by calm oceans with clear skies above, Athens, Greece was a stunning location to host an elegant and bespoke wedding. The gracious couple chose this setting to tie the knot in hopes that it would serve as the perfect vacation for their loved ones. Each event during the weekend was scheduled so guests would still have plenty of time to explore this beautiful city and take advantage of the delicious local cuisine.",
    contry: "International, Intimate",
  },

  {
    img: pseven,
    name: "Arpita Mehta & Kunal Rawal, Mumbai",
    des: `Friends then, friends now, friends forever….

Some bonds do not need a seal or approval… but they only get stronger and better with this institution we call marriage… or union… Arpita and Kunal’s wedding was a true testimony of 2 best friends getting married… among their best and the closest ones… that made it all the more special and happier…

Fun, flair and laughter … what more does one need…

Oh yes, lots of love and hugs…!!`,
    contry: "Indian",
  },

  {
    img: peight,
    name: "Ananya & Jahan , Delhi",
    des: "In a beautiful home, amidst intimacy and ecstasy, Ananya and Jahan gave their hand to each other. They are the message to this world that a wedding is meant for the hearts: not for the rituals, not for the razzmatazz, but for “being in love”. It was 80 of their loved ones, a day of celebration, and what shone through were their smiles.",
    contry: "Indian",
  },

  {
    img: pnine,
    name: "Meghna and Karan , Mumbai",
    des: "Rare is that Indian Wedding celebrated with intimacy, for intimacy. Rare is the atypical aesthetics used to decorate an age old tradition. Rare is the coming together of two souls in love amidst large flowers and dusky skies. Rare; that’s the word that best describes our bride- Meghna.",
    contry: "Indian",
  },

  { img: pten, name: "Mona & Ahmad , Dubai", des: "", contry: "International" },

  {
    img: peleven,
    name: "Alya and Yahia, Dubai",
    des: "We can’t stop thanking our stars for taking us to places we have never been before, exploring cultures we have never experienced before , meeting people we have never met before. And this was yet another one of such occasion. Alya and Yahia’s all Arabic wedding was an experience to behold - one for witnessing the beautiful Arabic culture, second for spending time with the families and though we were the only outsiders but still we felt like a part of the family.",
    contry: "International",
  },

  {
    img: ptwelve,
    name: "Zina and Zain, Kashmir",
    des: "This wedding, we witnessed two love stories made for the books. Each one surreal, sublime, spiritual in its own way. One between Zina and Zain. The other between Zina and Zoya. And this beautiful handover between soulmates took place in Kashmir, amidst snow-covered mountains and peeking trees. This intimate Nikah was a transcendent experience for us- the myriad emotions punctuating every event and the coming together of two cultures. It oftentimes escapes us how spiritual a wedding is",
    contry: "Intimate, Indian",
  },

  {
    img: pthirteen,
    name: "Rhea & Divish",
    des: `The first conversation we ever had with Rhea and Divish, she said, "Guys, do something crazy. We are ready for absolutely anything!". We are sure many couples say that. But boy, was it different with this one. Rhea's friends call her a firecracker with unlimited energy. That's an understatement. She is sexy and confident, relentless and tireless. Nothing can match her except Divish's swagger and cool aura. When we say we took them out for a lakeside session in the cold, then trapped them in a dark room for some experimental shots, put them in a pool, then a bath tub, and all the while they kept up their energy, we ain't lying. Their wedding was a three day party with craze, energy, drinks and dancing that we thoroughly enjoyed capturing and being a part of.`,
    contry: "Indian",
  },
];


  const landingPageData = {
    secondSection: {
      paragraph1:
        "Considered to be the epitome of Modern Photography and Filmmaking, HOTC has transformed the Indian Wedding landscape on a regular basis. For almost a decade House On The Clouds has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.",
      paragraph2:
        "Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards HOTC is the only company listed on IMDB for its award winning films.",
    },
    bannerSection: {
      description:
        "Ibtida is our finest offering with fine-art editorial style photography lead by Siddharth Sharma, founder of House On The Clouds. The essence of Ibtida is to create photographs that stand the test of time. The classic, non-intrusive approach of documenting the most important day of your life with bright and airy images that take you back in time. This is an exclusive package which we offer to selected weddings only and we believe this deserves a website of its own. Click below to visit Ibtida.Co",
      buttonText: "Visit Ibtido.Co",
      contact: {
        locations: "Mumbai . Bangalore",
        phone: "+91 9621549873",
        email: "hello@houseone.com",
      },
    },
  };

  const value = {
    landingPageData,
    photo,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
