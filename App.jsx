import { useState } from 'react'

import './App.css'
import  { Link } from 'react-router-dom'
import Lab1 from './components/Lab1'
import { Lab4 } from './Components/Lab4';
import { Lab2 } from './Components/Lab2';
import { Lab3 } from './Components/Lab3';
//import { Lab5, Bootstrap } from './Components/Lab5';
//import { Bootstrap } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';  // ✅ Correct way to import styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // ✅ Import JS components if needed
import { Lab5 } from './Components/Lab5';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to Lab Experiments(S-07)</h1>
      <table border={"3"} width={"50%"} > 
        
        <tr>
          
          <td>S.NO</td>
          <td>LAB</td>
          <td>DESCRIPTION</td>

       </tr>

        <tr>
          <td>1</td>
          <td>
          <Link to="/lab1">Lab1</Link>
          </td>
          <td>allignment and css</td>
          

       </tr>
       <tr>
          <td>2</td>
          <td>
          <Link to="/lab2">Lab2</Link>
          </td>
          <td>DOM-Trees,Media class,flex</td>
        </tr>
        <tr>
          <td>3</td>
          <td>
          <Link to="/lab3">Lab3</Link>
          </td>
          <td>DESCRIPTION</td>
        </tr>
        <tr>
          <td>4</td>
          <td>
          <Link to="/lab4">Lab4</Link>
          </td>
          <td>DESCRIPTION</td>
        </tr>

        <tr>
          <td>5</td>
          <td>
          <Link to="/lab5">Lab5</Link>
          </td>
          <td>User</td>
        </tr>

        <tr>
          <td>6</td>
          <td>
          <Link to="/lab6">Lab6</Link>
          </td>
          <td>Userrr</td>
        </tr>

        <tr>
          <td>7</td>
          <td>
          <Link to="/lab7">Lab7</Link>
          </td>
          <td>No description</td>
        </tr>

        <tr>
          <td>8</td>
          <td>
          <Link to="/lab8">Lab8</Link>
          </td>
          <td>No description</td>
        </tr>
        <tr>
          <td>10</td>
          <td>
            <Link to="/lab10a">Lab 10a</Link>
          </td>
          <td>
            Role based navigation
          </td>
        </tr>




      </table>
      
    </>
  )
}

export default App
