import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Component } from 'react';
import MainContainer from './MainContainer'
import About from './About';
import './App.css';

class App extends Component{
  state = {isDark:false}

  changeTheme = ()=>{
    this.setState(prevState=>({isDark:!prevState.isDark}))
  }

  render(){
    const {isDark} = this.state
    const theme = isDark === true ? 'light-text' : 'dark-text';
    return(
       <div className={`${theme}`}>
        {/* <MainContainer changeTheme = {this.changeTheme} isDark = {isDark} />
        <About isDark = {isDark} changeTheme = {this.changeTheme}/> */}
        <BrowserRouter>
           <Routes>
            <Route path = '/' element={<MainContainer changeTheme = {this.changeTheme} isDark = {isDark} />}/>
            <Route path = '/about' element = {<About isDark = {isDark} changeTheme = {this.changeTheme}/>}/>
           </Routes>
        </BrowserRouter>
       </div>
    )
  }
}


export default App;
