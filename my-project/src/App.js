import logo from './dock-of-flowers.png';
import './App.css';

function App() {
  return (
    <div className="App App-header">
      
      <div class="p-3 max-w-sm mx-auto bg-white rounded-xl shadow-md  items-center space-x-4 m-1 filter drop-shadow-lg">
        <div class="">
          <img src={logo} className="items-center" alt="Logo"/>
        </div>
        <div>
          <div class="text-xl font-medium text-black m-1">A dock full of flowers</div>
          <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
          <div class="mt-5 grid grid-cols-3 gap-2 place-items-center" >
            <p class="bg-green-300 font-bold text-black">#chill</p>
            <p class="bg-green-300 font-bold text-black">#nature</p>
            <p class="bg-green-300 font-bold text-black">#concept</p>

          </div>
      </div>
      
    </div>
  );
}

export default App;
