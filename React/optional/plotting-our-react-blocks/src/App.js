import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
 
                
function App() {
  const stylesapp = {
    width: '950px',
    backgroundColor: 'silver',
    margin: '0 auto',
    padding: '20px',
  };


  return (
    <div style={stylesapp}>
        <Header />
        <Navigation />
        <Main >
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
       </Main>
       
    </div>
  );
}
                
export default App;

