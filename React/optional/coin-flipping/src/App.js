import './App.css';


function App() {
  

  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }

  function fiveHeads() {
    
    return new Promise((resolve, reject) => {

      let headsCounter=0;
  let attempts=0;
  let maxAttempts=50;

     while (headsCounter < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
          headsCounter++;
          
        } else {
          
          headsCounter=0;
        }
        
      
    }
    if (attempts <= maxAttempts) {
      resolve(`It took ${attempts} tries to flip five "heads"`);
    } else {
      reject(`Attempts have exceeded ${maxAttempts} flips.`);
    }
    });
   };

  fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    console.log("When does this run now?");

  return (
    <div className="App">

    </div>
  );
}

export default App;