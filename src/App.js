import logo from './logo.svg';
import './App.css';
import Mobile from './components/mobile';
 
let info = [
  { head : "Mobile Operating System", 
  names : {
    a: "Android",
    b: "Blackberry",
    c: "IPhone",
    d: "Windows Phone",
  } },
  { head : "Mobile Manufacturers", 
  names : {
    a: "Samsung",
    b: "HTC",
    c: "Micromax",
    d: "Apple",
  } },
]

function App() {
  return (
    <div>
      <Mobile {...info[0]}/>
      <Mobile {...info[1]}/>
     {/* {info.map((el) => {
       <>
        <Mobile {...el}/>
       </>
      })} */}
    </div>
  );
}

export default App;
