import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout"
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  return (
    <ScrollToTop>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </ScrollToTop>

  )
}
export default App