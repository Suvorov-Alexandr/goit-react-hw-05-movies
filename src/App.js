import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import GlobalStyle from "./GlobalStyle";

const HomePage = lazy(() =>
  import("./pages/HomePage")
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage")
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage")
);

function App() {
  return (
    <Container>
      <GlobalStyle />
      <AppBar />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
