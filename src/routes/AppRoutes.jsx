import { Route, Routes } from "react-router-dom"
import Banner from './../components/Banner/Banner';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Project';

function AppRoutes() {

    return (
        <Routes>
            <Route>
                <Route exact path='/banner' element={<Banner />} />
                <Route exact path='/skills' element={<Skills />} />
                <Route exact path='/projects' element={<Projects />} />
            </Route>

        </Routes>

    )
}
export default AppRoutes