import './App.css';
import DrivenProducts from './Components/DrivenProducts';
import PreviousWorkSection from './Components/PreviousWorkSection';
import PreviousWorkSectionSecond from './Components/PreviousWorkSectionSecond';
import ProductExperienceSection from './Components/ProductExperienceSection';
import TechnologyUse from './Components/TechnologyUse';
import TechnoPartners from './Components/TechnoPartners';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import 'swiper/swiper-bundle.css';
import DevEnterprise from './Components/DevEnterprise';

function App() {
  return (
    <div className="App">
      <Header/>
      <DrivenProducts/>
      <PreviousWorkSection/>
      <PreviousWorkSectionSecond/>
      <PreviousWorkSection/>
      <DevEnterprise/>
      <TechnologyUse/>
      <TechnoPartners/>
      <ProductExperienceSection/>
      <Footer/>
    </div>
  );
}

export default App;
