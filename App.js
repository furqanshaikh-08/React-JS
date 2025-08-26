
import './App.css'
import ComponentC from './hoc/ComponentC';
import { ChannelProvider, UserProvider } from './hoc/userContext';




function App() {
  return( 
<div className="App">
<UserProvider value='Furqan'>
  <ChannelProvider value='Shaikh'>
    <ComponentC/>
  </ChannelProvider>
</UserProvider>

  </div>
  );
}
export default App;

 
