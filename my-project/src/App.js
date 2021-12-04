import logo from './icon_account.png';
import netlogo from './netflix-logo.png';
import beach from './beach.jpg';
import tw from './logo.svg';
import Tabs from "./components/Tabs";
import './App.css';

function App() {
  return (
    
    <body class="background">
      <Tabs class="">
        <div label="card 1" class="">
          <div class="p-3 w-52 max-w-sm mx-auto bg-yellow-400 rounded-xl shadow-md  items-center  m-1 filter drop-shadow-lg">
            <div id="okaka">
              <img src={logo} className="items-center object-scale-down h-28 w-full filter drop-shadow-lg" alt="Logo"/>
            </div>
            <div class="text-center items-center flex mx-auto">
              <img src={tw} className=" object-scale-down h-8 w-full filter drop-shadow-lg" alt="Logo"/>
              <img src={tw} className=" object-scale-down h-8 w-full filter drop-shadow-lg" alt="Logo"/>
              <img src={tw} className=" object-scale-down h-8 w-full filter drop-shadow-lg" alt="Logo"/>
              <img src={tw} className=" object-scale-down h-8 w-full filter drop-shadow-lg" alt="Logo"/>

            </div>
            <div class="m-2 grid gap-4 grid-cols-2 flex flex-wrap  text-center">
              <div>51
                <p>Upvoted</p>
              </div>
              <div>9
                <p>Created</p>

              </div>
              <div>9
                <p>Showcased</p>

              </div>
              <div>1
                <p>Collections</p>

              </div>
              <div>2
                <p>Followers</p>

              </div>

              <div>5
                <p>Following</p>

              </div>

            </div>
          </div>

        </div>

        <div label="card 2">
          <div class="p-1 w-1/2 h-96  mx-auto bg-white  shadow-md  items-center  m-1 filter drop-shadow-lg flex">
            <div class="w-1/2 h-full">
              <img src={beach} className="object-fill h-full" alt="beach"/>

            </div>
            <div class="w-1/2 h-full p-3 text-center">
              <div class="text-xs">Feature</div>
              <h2 class="font-serif m-1 mt-8 text-xl">BLUE OCEAN WAVES CRASH</h2>
              <div class="m-4">_</div>
              <div class="font-mono h-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div>V</div>

            </div>

          </div>
          
        </div>
        
        <div label="card 3" >
          <div class="p-1 w-1/3 h-96  mx-auto bg-white  shadow-md  items-center  m-1 filter drop-shadow-lg flex">
            <div class="w-3/5 h-full">
            <div class="h-3/5 w-full">
              <div class="h-4/5 w-full flex items-center">
                <img src={logo} className=" object-scale-down h-28 w-full filter drop-shadow-lg" alt="Logo"/>

              </div>
              <div class="h-1/5 w-full">
                <h1 class="text-center">Ben Dover</h1>
                <p class="text-center">Janitor</p>

              </div>
              
            </div>
            <div class="h-2/5 flex items-center">
              <div class="relative flex flex-col  w-full ">
                <div class="rounded-full m-1 mx-auto py-2 px-6 bg-blue-500 text-center w-1/2">Follow</div>
                <div class="rounded-full m-1 mx-auto py-2 px-6 bg-red-500 text-center w-1/2">Report</div>

              </div>
            </div>
            

            </div>
            <div class="w-2/5 h-full">
              <div class="w-full h-1/3 mb-px flex items-center bg-green-400">
                <div class="mx-auto">
                  <h1>500</h1>
                  <p>Posts</p>
                </div>
              </div>

              <div class="w-full h-1/3 mb-px flex items-center bg-green-400">
                <div class="mx-auto">
                  <h1>500</h1>
                  <p>Posts</p>
                </div>
              </div>

              <div class="w-full h-1/3 mb-px flex items-center bg-green-400">
                <div class="mx-auto">
                  <h1>500</h1>
                  <p>Posts</p>
                </div>
              </div>
              

            </div>

          </div>
        </div>
        
        <div label="card 4"> four
          <div class="w-52 h-96 max-w-sm mx-auto bg-white rounded-xl shadow-md  items-center  m-1 filter drop-shadow-lg">
            <div class="h-2/5 w-full">
              <img src={beach} className="items-center object-scale-down rounded-xl w-full filter drop-shadow-lg" alt="Logo"/>

            </div>
            <div class="h-2/5 w-full">
              <div class="h-1/2">
                <div class="flex items-center h-full">
                  <div class="mx-auto ">
                    <p class="text-pink-600 text-center">4 years ago</p>
                    <h1 class="text-center">Ass</h1>
                  </div>
                </div>
              </div>
              <div class="h-1/2">
                <p class="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div class="bg-pink-600 w-full h-1/5 rounded-xl inset-x-0 bottom-0 absolute">
                <div class="h-full flex items-center">
                  <div class="w-1/3 m-px h-full flex items-center">
                    <div class="flex flex-col w-full">
                      <h1 class="mx-auto text-white">4M</h1>
                      <p class="mx-auto text-gray-200">READ</p>
                    </div>
                  </div>

                  <div class="w-1/3 m-px h-full flex items-center">
                    <div class="flex flex-col w-full">
                      <h1 class="mx-auto text-white">32</h1>
                      <p class="mx-auto text-gray-200">COMMENTS</p>
                    </div>
                  </div>

                  <div class="w-1/3 m-px h-full flex items-center">
                    <div class="flex flex-col w-full">
                      <h1 class="mx-auto text-white">5154</h1>
                      <p class="mx-auto text-gray-200">VIEWS</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div label="card 5" >
          <div class="mx-auto items-center h-full w-full">
            <div class="jinx-bg mx-auto object-fill h-96">
              <div class="h-1/2"></div>
              <div class="h-1/2 bg-gradient-to-t from-indigo-500 flex items-center">
                <div class="w-1/3 h-full flex items-center">
                  <img src={netlogo} className="mx-auto object-cover h-20 filter drop-shadow-lg" alt="nefli"/>

                </div>
                <div class="w-full h-full ">
                  <div class="h-4/5 flex items-center">
                    <p class="mx-auto text-pink-500 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  </div>
                  <div class="mr-10 float-right">
                    <button class= "">Learn more</button>
                  </div>
                </div>
                
               
              </div>


            </div>
            
          </div>
        </div>



      </Tabs>

    
      
    </body>
  );
}



export default App;
