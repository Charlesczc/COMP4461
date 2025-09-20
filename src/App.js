// // filepath: c:\Users\charl\Comp4461\portfolio\src\App.js
// import { HashRouter as Router } from 'react-router-dom'
// import { useContext } from 'react'
// import { ThemeContext } from './contexts/theme'
// import Header from './components/Header/Header'
// import About from './components/About/About'
// import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
// import './App.css'

// const App = () => {
//   const [{ themeName }] = useContext(ThemeContext)

//   return (
//     <Router>
//       <div id='top' className={`${themeName} app`}>
//         <Header />

//         <main>
//           <About />
//           <Projects />
//           <Skills />
//           <Contact />
//         </main>

//         <ScrollToTop />
//         <Footer />
//       </div>
//     </Router>
//   )
// }

// export default App

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Project1 from './components/ProjectPages/Project1'
import Project2 from './components/ProjectPages/Project2'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          <Switch>
            <Route exact path='/'>
              <About />
              <Projects />
              <Skills />
              <Contact />
            </Route>

            <Route path='/project/project-1' component={Project1} />
            <Route path='/project/project-2' component={Project2} />
          </Switch>
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App
