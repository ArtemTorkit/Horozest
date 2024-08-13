import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import TodaysHoroscope from "./pages/horoscope/TodaysHoroscope";
import MonthlyHoroscope from "./pages/horoscope/MonthlyHoroscope";
import WeeklyHoroscope from "./pages/horoscope/WeeklyHoroscope";
import ZodiacSign from "./pages/ZodiacSign";
import LoveCompatibility from "./pages/compatibility/LoveCompatibility";
import CareerCompatibility from "./pages/compatibility/CareerCompatibility";
import FriendshipCompatibility from "./pages/compatibility/FriendshipCompatibility";
import Article from "./pages/articles/Article";
import Articles from "./pages/articles/Articles";
import QuoteOfTheDay from "./pages/articles/QuoteOfTheDay";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import YesterdaysHoroscope from "./pages/horoscope/YesterdaysHoroscope";
import TommorowsHorscope from "./pages/horoscope/TommorowsHorscope";


const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getDates = () => {
  const today = new Date();
  const yesterday = new Date(today);
  const tomorrow = new Date(today);

  yesterday.setDate(today.getDate() - 1);
  tomorrow.setDate(today.getDate() + 1);

  return {
    today: formatDate(today),
    yesterday: formatDate(yesterday),
    tomorrow: formatDate(tomorrow),
  };
};

function App() {
  const { today, yesterday, tomorrow } = getDates();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/horoscopes/daily/today/:zodiacSign"
            element={<TodaysHoroscope date={today} />}
          />
          <Route
            path="/horoscopes/daily/yesterday/:zodiacSign"
            element={<YesterdaysHoroscope date={yesterday} />}
          />
          <Route
            path="/horoscopes/daily/tomorrow/:zodiacSign"
            element={<TommorowsHorscope date={tomorrow} />}
          />
          <Route
            path="/horoscopes/weekly/:zodiacSign"
            element={<WeeklyHoroscope />}
          />
          <Route
            path="/horoscopes/monthly/:zodiacSign"
            element={<MonthlyHoroscope />}
          />
          <Route path="/zodiac-signs/:zodiacSign" element={<ZodiacSign />} />
          <Route
            path="/zodiac-signs/love/compatibility"
            element={<LoveCompatibility />}
          />
          <Route
            path="/zodiac-signs/career/compatibility"
            element={<CareerCompatibility />}
          />
          <Route
            path="/zodiac-signs/friendship/compatibility"
            element={<FriendshipCompatibility />}
          />
          <Route path="/articles/:articleId" element={<Article />} />
          <Route path="/articles" element={<Articles />} />
          <Route
            path="/articles/quotes/quote-of-the-day"
            element={<QuoteOfTheDay />}
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
