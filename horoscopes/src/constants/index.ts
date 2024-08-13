import {
    aries,
    aquarius,
    cancer,
    capricorn,
    gemini,
    leo,
    libra,
    pisces,
    sagittarius,
    scorpion,
    taurus,
    virgo
} from '../assets'

const zodiacSigns = [
  { name: "Aries", startDate: "Mar 21", endDate: "Apr 19", sign: aries },
  { name: "Taurus", startDate: "Apr 20", endDate: "May 20", sign: taurus },
  { name: "Gemini", startDate: "May 21", endDate: "Jun 20", sign: gemini},
  { name: "Cancer", startDate: "Jun 21", endDate: "Jul 22", sign: cancer },
  { name: "Leo", startDate: "Jul 23", endDate: "Aug 22", sign: leo},
  { name: "Virgo", startDate: "Aug 23", endDate: "Sep 22", sign: virgo },
  { name: "Libra", startDate: "Sep 23", endDate: "Oct 22", sign: libra },
  { name: "Scorpio", startDate: "Oct 23", endDate: "Nov 21", sign: scorpion  },
  { name: "Sagittarius", startDate: "Nov 22", endDate: "Dec 21" , sign: sagittarius },
  { name: "Capricorn", startDate: "Dec 22", endDate: "Jan 19", sign: capricorn},
  { name: "Aquarius", startDate: "Jan 20", endDate: "Feb 18", sign: aquarius },
  { name: "Pisces", startDate: "Feb 19", endDate: "Mar 20", sign: pisces },
];

const horoscopeButtons = [
  { name: "YESTERDAY", link: "/horoscopes/daily/yesterday/" },
  { name: "TODAY", link: "/horoscopes/daily/today/" },
  { name: "TOMORROW", link: "/horoscopes/daily/tomorrow/" },
  { name: "WEEKLY", link: "/horoscopes/weekly/" },
  { name: "MONTHLY", link: "/horoscopes/monthly/" },
];

export type horoscopeType = {
  sign: string;
  prediction: {
    personal: string;
    health: string;
    profession: string;
    emotions: string;
    travel: string;
    luck: string[];
  };
};

export {zodiacSigns, horoscopeButtons}