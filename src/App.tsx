import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';
import About from 'pages/About/About';
import Users from 'pages/Users/Users';
import Home from 'pages/Home/Home';
import Clients from "pages/Clients/Clients";
import Avacon from 'pages/Clients/components/Avacon/Avacon';
import Netflix from 'pages/Clients/components/Netflix/Netflix';
import Rebax from 'pages/Clients/components/Rebax/Rebax';

//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson10 from 'lessons/Lesson10/Lesson10';
// import Lesson11 from 'lessons/Lesson11/Lesson11';

//homeworks
// import Homework07 from './homeworks/Homework07/Homework07';
// import Homework08 from "./homeworks/Homework08/Homework08";
// import Homework09cw from './homeworks/Homework09cw/Homework09cw';
// import Homework09 from 'homeworks/Homework09/Homework09';
// import Homework10 from 'homeworks/Homework10/Homework10';
// import Homework11cw from 'homeworks/Homework11cw/Homework11cw';
import Homework11 from 'homeworks/Homework11/Homework11';

//consultations
// import Consultation04 from './consultations/Consultation04/Consultation04';
// import Consultation05 from './consultations/Consultation05/Consultation05';

function App() {
  return (
    <BrowserRouter> 
      <GlobalStyles />
       <Layout>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/users' element={<Users />} />
           <Route path="/clients" element={<Clients />} />
           <Route path="/clients/avacon" element={<Avacon />} />
           <Route path="/clients/netflix" element={<Netflix />} />
           <Route path="/clients/rebax" element={<Rebax />} />
           <Route path='*' element='Page not found' />
         </Routes> 
       </Layout>
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Lesson08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Homework07 /> */}
      {/* <Homework08 /> */}
      {/* <Homework09cw /> */}
      {/* <Homework09 /> */}
      {/* <Homework10 /> */}
      {/* <Homework11cw /> */}
           <Homework11 />
      {/* <Consultation04 /> */}
      {/* <Consultation05 /> */}
    </BrowserRouter> 
  );
}

export default App;
