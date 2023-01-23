import './App.css';
import Navigation from './components/navigation/navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Project';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <AppRoutes></AppRoutes>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>


    </div>



  );
}

export default App;
