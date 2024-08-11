import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import DailyHoroscope from "./pages/horoscope/DailyHoroscope";
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


function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/horoscopes/daily/:zodiacSign"
            element={<DailyHoroscope />}
          />
          <Route
            path="/horoscopes/weekly/:zodiacSign"
            element={<WeeklyHoroscope />}
          />
          <Route
            path="/horoscopes/monthly/:zodiacSign"
            element={<MonthlyHoroscope />}
          />
          <Route
            path="/zodiac-signs/:zodiacSign"
            element={<ZodiacSign />}
          />
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
          <Route
            path="/articles/:articleId"
            element={<Article />}
          />
          <Route
            path="/articles"
            element={<Articles />}
          />
          <Route
            path="/articles/quotes/quote-of-the-day"
            element={<QuoteOfTheDay />}
          />
          <Route
            path="/privacy"
            element={<PrivacyPolicy />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
