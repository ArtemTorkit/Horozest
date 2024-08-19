import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const TodaysHoroscope = lazy(() => import("./pages/horoscope/TodaysHoroscope"));
const MonthlyHoroscope = lazy(() => import("./pages/horoscope/MonthlyHoroscope"));
const WeeklyHoroscope = lazy(() => import("./pages/horoscope/WeeklyHoroscope"));
const ZodiacSign = lazy(() => import("./pages/ZodiacSign"));
const LoveCompatibility = lazy(
  () => import("./pages/compatibility/LoveCompatibility")
);
const SexCompatibility = lazy(
  () => import("./pages/compatibility/SexCompatibility")
);
const FriendshipCompatibility = lazy(
  () => import("./pages/compatibility/FriendshipCompatibility")
);
const Article = lazy(() => import("./pages/articles/Article"));
const Articles = lazy(() => import("./pages/articles/Articles"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const YesterdaysHoroscope = lazy(
  () => import("./pages/horoscope/YesterdaysHoroscope")
);
const TommorowsHorscope = lazy(
  () => import("./pages/horoscope/TommorowsHorscope")
);
const CoffeeCupReading = lazy(
  () => import("./pages/articles/CoffeeCupReading")
);
const MonthlySummary = lazy(() => import("./pages/articles/MonthlySummary"));



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
      <Suspense fallback={<div></div>}>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/horoscopes/daily/today/:category/:zodiacSign"
              element={<TodaysHoroscope date={today} />}
            />
            <Route
              path="/horoscopes/daily/yesterday/:category/:zodiacSign"
              element={<YesterdaysHoroscope date={yesterday} />}
            />
            <Route
              path="/horoscopes/daily/tomorrow/:category/:zodiacSign"
              element={<TommorowsHorscope date={tomorrow} />}
            />
            <Route
              path="/horoscopes/weekly/:category/:zodiacSign"
              element={<WeeklyHoroscope />}
            />
            <Route
              path="/horoscopes/monthly/:category/:zodiacSign"
              element={<MonthlyHoroscope />}
            />
            <Route path="/zodiac-signs" element={<ZodiacSign />} />
            <Route
              path="/zodiac-signs/love/compatibility"
              element={<LoveCompatibility />}
            />
            <Route
              path="/zodiac-signs/career/compatibility"
              element={<SexCompatibility />}
            />
            <Route
              path="/zodiac-signs/friendship/compatibility"
              element={<FriendshipCompatibility />}
            />
            <Route path="/articles/:articleId" element={<Article />} />
            <Route path="/articles" element={<Articles />} />
            <Route
              path="/articles/coffee-cup-reading"
              element={<CoffeeCupReading />}
            />
            <Route
              path="/articles/monthly-summary"
              element={<MonthlySummary />}
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
