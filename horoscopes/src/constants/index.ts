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
    virgo,
    user,
    briefcase,
    heart,
    star,
    globe,
    ariesPic,
    piscesPic,
    aquariusPic,
    capricornPic,
    sagittariusPic,
    scorpionPic,
    libraPic,
    virgoPic,
    leoPic,
    cancerPic,
    geminiPic,
    taurusPic
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

const horoscopeCategoryButtons = [
  { name: "personal", link: "personal", icon: user },
  { name: "profession", link: "profession",icon: briefcase },
  { name: "health", link: "health",icon: heart },
  { name: "emotions", link: "emotions",icon: star },
  { name: "travel", link: "travel",icon: globe },
];


export type horoscopeMonthlyType = {
  month: string
  sign: string;
  monthly_horoscope: {
    personal: string;
    health: string;
    profession: string;
    emotions: string;
    travel: string;
    luck: string[];
  };
}

export type horoscopeWeeklyType = {
  week: string
  sign: string;
  weekly_horoscope: {
    personal: string;
    health: string;
    profession: string;
    emotions: string;
    travel: string;
    luck: string[];
  };
}

export type horoscopeDailyType = {
    sign: string;
  prediction: {
    personal: string;
    health: string;
    profession: string;
    emotions: string;
    travel: string;
    luck: string[];
  };
}

const zodiacSignsInfo = [
    {
    name: "Aries",
      sign: aries,
      image: ariesPic,
        dates: "March 21 - April 19",
        element: "Fire",
        symbol: "Ram",
        traits: "Boldness, energy, and confidence",
        strengths: ["Courageous", "Determined", "Enthusiastic", "Optimistic"],
        challenges: ["Impulsive", "Short-tempered", "Impatient"],
        description: "Aries is a trailblazer, full of energy and enthusiasm. They are natural leaders who thrive in challenging situations, often taking the initiative and setting the pace for others. Their passion and confidence make them unstoppable when pursuing their goals. However, their impulsive nature can sometimes lead to rash decisions, and their fiery temperament can flare up if things don’t go their way."
    },
    {
      name: "Taurus",
      sign: taurus,
      image: taurusPic
      ,

        dates: "April 20 - May 20",
        element: "Earth",
        symbol: "Bull",
        traits: "Values stability, comfort, and pleasure",
        strengths: ["Dependable", "Patient", "Practical", "Devoted"],
        challenges: ["Stubborn", "Possessive", "Resistant to change"],
        description: "Taurus is known for its steadfast nature, valuing security and stability in all aspects of life. They appreciate the finer things and often indulge in sensory pleasures, from good food to comfortable surroundings. Their patience and reliability make them strong and dependable partners. However, their resistance to change and stubbornness can sometimes make them inflexible, especially when their routine is disrupted."
    },
    {
      name: "Gemini",
      sign: gemini,
      image: geminiPic,

        dates: "May 21 - June 20",
        element: "Air",
        symbol: "Twins",
        traits: "Adaptable, curious, and dual nature",
        strengths: ["Sociable", "Communicative", "Intellectually curious"],
        challenges: ["Inconsistent", "Indecisive", "Nervous"],
        description: "Gemini is a sign of duality, known for their adaptability and intellectual curiosity. They are highly sociable, thriving in environments where they can engage in lively discussions and explore new ideas. Their versatility allows them to excel in various situations, but their constant need for stimulation can lead to inconsistency. Geminis may struggle with making decisions, as their quick minds are always considering multiple options."
    },
    {
      name: "Cancer",
      sign: cancer,
      image: cancerPic,

        dates: "June 21 - July 22",
        element: "Water",
        symbol: "Crab",
        traits: "Deeply emotional and intuitive",
        strengths: ["Loyal", "Empathetic", "Tenacious", "Protective"],
        challenges: ["Moody", "Pessimistic", "Overly sensitive"],
        description: "Cancer is deeply connected to their emotions and is highly intuitive, often picking up on the feelings of others. They are fiercely loyal and protective, especially when it comes to family and close friends. This sign finds comfort in the home and values creating a safe, nurturing environment. However, their sensitivity can sometimes make them prone to mood swings and bouts of pessimism, particularly when they feel unappreciated."
    },
    {
      name: "Leo",
      sign: leo,
      image: leoPic,

        dates: "July 23 - August 22",
        element: "Fire",
        symbol: "Lion",
        traits: "Charisma, confidence, and natural leadership",
        strengths: ["Confident", "Ambitious", "Generous", "Creative"],
        challenges: ["Arrogant", "Stubborn", "Self-centered"],
        description: "Leo is a natural-born leader, radiating confidence and warmth wherever they go. They thrive in the spotlight and are often the life of the party, using their charisma to draw people in. Their generosity knows no bounds, and they take great pride in helping others and sharing their success. However, their desire for attention and recognition can sometimes make them seem arrogant or overly self-centered, and they can be stubborn when challenged."
    },
    {
      name: "Virgo",
      sign: virgo,
      image: virgoPic,

        dates: "August 23 - September 22",
        element: "Earth",
        symbol: "Maiden",
        traits: "Analytical, detail-oriented, and organized",
        strengths: ["Reliable", "Analytical", "Hardworking", "Practical"],
        challenges: ["Overly critical", "Perfectionist", "Worrier"],
        description: "Virgo is the perfectionist of the zodiac, with a keen eye for detail and a methodical approach to life. They are highly analytical and take pride in their ability to solve problems with precision and practicality. Their hardworking nature makes them reliable and trustworthy, always striving for excellence in everything they do. However, their high standards can lead them to be overly critical of themselves and others, and their tendency to worry can sometimes overshadow their achievements."
    },
    {
      name: "Libra",
      sign: libra,
      image: libraPic,

        dates: "September 23 - October 22",
        element: "Air",
        symbol: "Scales",
        traits: "Values balance, harmony, and justice",
        strengths: ["Diplomatic", "Fair-minded", "Social", "Gracious"],
        challenges: ["Indecisive", "Avoids confrontations", "Self-pitying"],
        description: "Libra is the diplomat of the zodiac, always striving for balance and harmony in their relationships and surroundings. They have a strong sense of justice and are often seen as peacemakers, using their charm and social skills to mediate conflicts. Libras are sociable and enjoy being around others, valuing beauty and aesthetics in all forms. However, their desire to keep everyone happy can lead to indecision and a tendency to avoid confrontations, sometimes leaving them feeling unfulfilled."
    },
    {
      name: "Scorpio",
      sign: scorpion,
      image: scorpionPic,

        dates: "October 23 - November 21",
        element: "Water",
        symbol: "Scorpion",
        traits: "Intense, passionate, and deeply emotional",
        strengths: ["Resourceful", "Brave", "Passionate", "Determined"],
        challenges: ["Jealous", "Secretive", "Resentful"],
        description: "Scorpio is known for their intensity and passion, diving deep into whatever they set their minds to. They are fiercely determined and resourceful, often thriving in situations that require bravery and resilience. Scorpios have a magnetic presence, drawing people in with their mysterious and powerful energy. However, their strong emotions can sometimes lead to jealousy and resentment, and their secretive nature can make it difficult for others to truly understand them."
    },
    {
      name: "Sagittarius",
      sign: sagittarius,
      image: sagittariusPic,

        dates: "November 22 - December 21",
        element: "Fire",
        symbol: "Archer",
        traits: "Adventurous, optimistic, and loves freedom",
        strengths: ["Independent", "Enthusiastic", "Curious", "Adventurous"],
        challenges: ["Impatient", "Tactless", "Unreliable"],
        description: "Sagittarius is the explorer of the zodiac, always seeking new adventures and experiences. They have an optimistic outlook on life and a strong desire for freedom, often pushing boundaries to see what lies beyond. Their curiosity and enthusiasm make them lifelong learners, constantly expanding their horizons. However, their restless nature can lead to impatience and a tendency to be tactless, sometimes causing friction in their relationships."
    },
    {
      name: "Capricorn",
      sign: capricorn,
      image: capricornPic,

        dates: "December 22 - January 19",
        element: "Earth",
        symbol: "Goat",
        traits: "Disciplined, ambitious, and highly responsible",
        strengths: ["Disciplined", "Patient", "Responsible", "Practical"],
        challenges: ["Pessimistic", "Stubborn", "Workaholic"],
        description: "Capricorn is the achiever of the zodiac, known for their discipline and ambition. They have a strong sense of responsibility and are often seen as the backbone of any group or organization. Capricorns are patient and methodical in their approach, always working towards their long-term goals with determination and practicality. However, their focus on success can sometimes lead to a pessimistic outlook, and their workaholic tendencies may cause them to neglect their personal lives."
    },
    {
      name: "Aquarius",
      sign: aquarius,
      image: aquariusPic,

        dates: "January 20 - February 18",
        element: "Air",
        symbol: "Water Bearer",
        traits: "Innovative, independent, and progressive thinker",
        strengths: ["Innovative", "Humanitarian", "Independent", "Original"],
        challenges: ["Unpredictable", "Detached", "Stubborn"],
        description: "Aquarius is the visionary of the zodiac, always looking to the future with innovative ideas and a strong sense of social justice. They are independent thinkers who value freedom and originality, often challenging the status quo to bring about change. Aquarians are humanitarian at heart, driven by a desire to improve the world around them. However, their detached and unpredictable nature can make them seem aloof, and their stubbornness can sometimes hinder their ability to compromise."
    },
    {
      name: "Pisces",
      sign: pisces,
      image: piscesPic,
        dates: "February 19 - March 20",
        element: "Water",
        symbol: "Fish",
        traits: "Compassionate, intuitive, and artistic",
        strengths: ["Compassionate", "Artistic", "Intuitive", "Gentle"],
        challenges: ["Escapist", "Overly trusting", "Indecisive"],
        description: "Pisces is the dreamer of the zodiac, known for their deep compassion and artistic sensibilities. They are highly intuitive, often picking up on the emotions and energies around them, which makes them empathetic and understanding. Pisces are drawn to creative pursuits and often find solace in expressing themselves through art, music, or writing. However, their tendency to escape reality and their overly trusting nature can leave them vulnerable, and their indecisiveness can sometimes make it difficult for them to take decisive action."
    }
];


export {zodiacSigns, horoscopeButtons, horoscopeCategoryButtons, zodiacSignsInfo }