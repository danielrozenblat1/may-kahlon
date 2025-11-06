
import './App.css';
import EarningsCalculator from './components/AfterSillabus/After';
import ByMe from './components/ByMe/ByMe';
import TreatmentsShowcase from './components/CoolTreats/CoolTreats';
import StepScroll from './components/CourseSteps/Steps';
import WhoFits from './components/Fits/Fits';
import FloatingWhatsAppButton from './components/FloatingButton/FloatingButton';
import AboutMe from './components/me/Me';
import FifthScreen from './screens/FifthScreen';
import FirstScreen from './screens/FirstScreenNew';
import ForthScreen from './screens/ForthScreen';
import SecondScreen from './screens/SecondScreen';
import SixthScreen from './screens/SixthScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
  <FirstScreen/>
<SecondScreen/>
<AboutMe/>

<ThirdScreen/>
<StepScroll/>
<EarningsCalculator/>
<FifthScreen/>
<ForthScreen/>
<WhoFits/>
<TreatmentsShowcase/>
<SixthScreen/>

<ByMe/>
  {/* <PrivacyPolicy 
  ownerName="מאי כחלון" 
  email="" 
  phone="" 
  domain="https://maykahlon.co.il/" 
/> */}
  </>
}

export default App;
