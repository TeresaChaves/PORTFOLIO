import { Route, Routes } from "react-router-dom"
import Banner from './../components/Banner/Banner';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Project';

function AppRoutes() {

    return (
        <Routes>
            <Route>
                <Route path='/banner' element={<Banner />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />

            </Route>

        </Routes>

    )
}
export default AppRoutes