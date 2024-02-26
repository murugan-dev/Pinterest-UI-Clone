import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddIcon from '@mui/icons-material/Add';
import './App.css';
import logo from "./assets/images/logo.jpeg";
import search from "./assets/images/forward.png";
import MenuContainer from './component/MenuContainer';
import { useEffect } from 'react';
import Images from './component/Images';
import Data from './component/Data';

function App() {
  useEffect(()=>{
    const allIcon = document.querySelectorAll(".menu-icons")
    function setClick(){
      allIcon.forEach((Element) => Element.classList.remove("active"))
      this.classList.add("active");
    }
    allIcon.forEach((Element)=> Element.addEventListener("click", setClick))
  },[])
  

  return (
    <div className="App">
      <div className="menuContainer">
        <img src={logo} alt="pinterest_logo" id='logo' />
        <div className='submenu'>
          <div>
          <MenuContainer Icon={<PersonIcon />} />
          <MenuContainer Icon={<NotificationsIcon />} />
          <MenuContainer Icon={<ChatIcon />} />
          </div>
          <div>
          <MenuContainer Icon={<FavoriteIcon />} />
          </div>
          <div>
          <MenuContainer Icon={<QuestionMarkIcon />} />
          <MenuContainer Icon={<AddIcon />} />
          </div> 
        </div>
      </div>
      
      <main>
        <div className="searchBox">
          <input type="text" placeholder='Search Your Image...' />
          <div className='search'>
            <img src={search} alt="Search" />
          </div>
        </div>
        <div className="mainContainer">
          {
            Data.map((Element, index)=>(
              <Images  pinSize={Element.size} key={index} name={Element.name} imgSrc={Element.imgSrc}/>
            ))
          }
        </div>
      </main>
      
    </div>
  )
}

export default App
