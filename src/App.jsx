import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/index";
import {
  History,
  Home,
  LikedVideo,
  Trending,
  WatchLater,
  MyPlayList,
  watchpage,
} from "./Pages/index";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Sidebar/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trending" element={<Trending />} />
          <Route path="watchlater" element={<WatchLater />} />
          <Route path="history" element={<History />} />
          <Route path="myPlayList" element={<MyPlayList />} />
          <Route path="likedVideos" element={<LikedVideo />} />
          {/* <Route path="watchPage/:id" element={<WatchPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
