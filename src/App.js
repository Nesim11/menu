import './App.css';
import { ReactComponent as MenuIcon} from './icons/Menu.svg';
import { ReactComponent as FlagIcon} from './icons/Flag.svg';
import { ReactComponent as HelpIcon} from './icons/Help.svg';


import React, {useState} from  'react'
import{CSSTransition} from 'react-transition-group';



function App() {
  return (
   <Navbar>
    <NavItem icon= {<MenuIcon/>}/>
    

   
     {/*Dropdown goes here */}

    <DropdownMenu />

  

   </Navbar>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu ] = useState('Geri Bildirim');  // settings, animals
  const[menuHeight, setMenuHeight]= useState(null);

  function calcHeight(el) {
     const height = el.offsetHeight; 
     setMenuHeight(height)
  }

    function DropdownItem (props) {
      return(

          <a href= "#"  className= "menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>

            <span className= "icon-button">{props.leftIcon} </span>

            {props.children}

            <span className= "icon-button">{props.rightIcon} </span>
            
          </a>
      );
       
    }
  return(

    <div className= "dropdown" style={{height: menuHeight}}>
      <CSSTransition 
      in ={activeMenu === 'feedback'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-primary"
      onEnter={calcHeight}
      >
        <div className="menu">

        

      <DropdownItem>feedback</DropdownItem>
      <DropdownItem rightIcon= {< FlagIcon/>}
      goToMenu="feedback">

      </DropdownItem>

     <DropdownItem
      leftIcon= {<HelpIcon/>}
      
      goToMenu="help"> 
      
      
      </DropdownItem>
      </div>

      </CSSTransition>

      <CSSTransition 
      in ={activeMenu === 'help'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-secondary"
      >
        <div className="menu">

        

     

     <DropdownItem
      leftIcon= {<FlagIcon/>} goToMenu="feedback"/>
      <DropdownItem>feedback</DropdownItem>
      <DropdownItem>feedback </DropdownItem>
      <DropdownItem>feedback</DropdownItem>
      <DropdownItem>feedback </DropdownItem>
      </div>

      </CSSTransition>




    </div>

    

  );
}

function Navbar(props) {

  return(
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}

      </ul>

    </nav>
  );
}

function NavItem(props) {
  const[open, setopen] = useState(false);
  return(
    <li className= "nav-item">
      <a href="#" className="icon-button" onClick={() => setopen(!open)}>
        {props.icon}

      </a>
      {open , props.children}

    </li>

  );


}

export default App;
