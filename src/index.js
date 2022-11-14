// import ReactDom from "react-dom";
// import './index.css'
// ReactDom.render(<h2>hi</h2>,document.getElementById('root'));
    // react dom method name is render so we call it.the method is call method...compulsary to pass parameter h1 &h2  ,,,,where to import it means whuch folder the name is root foldr so we write root;

    /*...................................................................................*/
     
    /*
    
    //COMPONENT
IF WE WANT TO ADD CSS IN THIS COMPONENT THEN WE HAVE TO CREATE APP.JS ANOTHER JS CODE*/
import ReactDom from "react-dom";
import './index.css'
import App from './App.js';
ReactDom.render(<App />, document.getElementById('root'));