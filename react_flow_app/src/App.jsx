import Blog from "./Blog";
import BrightText from "./BrightText";
import CourseGoal from "./CourseGoal";
import Example1 from "./Example1";
import Example3 from "./Example3";
import Example4 from "./Example4";
import MovieCard from "./Moviecard";
import MovieGrid from "./MovieGrid";
import Status from "./Status";
import Status2 from "./Status2";


function App(){
  return(
    <>
   <h1>This is App.jsx</h1>
   {/* <AboutUs/>
   <ContactUs/>
   <Greeting/> */}
   {/* <Status/>
   <Example1/>
   <Status2 />
   <Example4 />
   <Example3 /> */}
   {/* <CourseGoal title="learn React"description ="In-depth"/>
   <CourseGoal title="about ratan sir"description="ratan sir is very nice"/> */}
  
  {/* <Blog title="jaya" body="rjaya is nice"/> */}

{/* <BrightText color="orange"/>
<BrightText color="green"/>
<BrightText color="blue"/> */}
<MovieGrid movies={[
   {Title:"ganga",description:"horrer",releaseDate:2007,rating:7},
   {Title:"ganga",description:"horrer",releaseDate:2007,rating:7},
  ]}/>



    </>
  )
}
export default App;