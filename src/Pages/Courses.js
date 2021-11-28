import {React,useState} from 'react;'
import Button from "./Components/Button";
import Course from "./Components/Course";
import  items from '../Data';


function Courses(){
    const [menuItem, setMenuItem] = useState(items);
    return (
        <div className="pages">
            <h2>The worlds Best Coures</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec lacus blandit, consectetur tellus nec, sollicitudin augue. Etiam quis turpis tristique, rutrum nisi faucibus, hendrerit justo. Fusce quis augue elementum,</p>
            <Button/>
            <Course menuItem={menuItem}/>
        </div>
    )
}

export default Courses