import { Route, Routes } from "react-router-dom"
import Banner from './../components/Banner/Banner';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Project';
import Images from './../components/Images/Images'

function AppRoutes() {

    return (
      <Routes>
        <Route>
          <Route exact path="/banner" element={<Banner />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          {/* <Route exact path="/images" element={<Images />} /> */}
        </Route>
      </Routes>
    );
}
export default AppRoutes