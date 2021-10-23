import { useState } from "react";

const NewTab = () => {
    const [scale, setScale] = useState("");
    const handleClick = (click) => {
        let major = [0, 2, 4, 5, 7, 9, 11]; 
	    let minor = [0, 2, 3, 5, 7, 8, 10]; 
	    if (scale === "major") { //uses fisher-yates algorithm to randomise array 
	        for (let i = major.length - 1; i > 0; i--) {
   	            let j = Math.floor(Math.random() * (i + 1));
   		        let temp = major[i];
   		        major[i] = major[j];
   		        major[j] = temp;
		    }
		    let riff = major.join("-"); 
            click.preventDefault();
            alert('Your new melody is ' + riff);
	    }
	    else if (scale === "minor") {  
	    	for (let i = minor.length - 1; i > 0; i--) {
   	        	let j = Math.floor(Math.random() * (i + 1));
         		let temp = minor[i];
         		minor[i] = minor[j];
         		minor[j] = temp;
    		}
		let riff = minor.join("-");
        click.preventDefault();
        alert('Your new melody is ' + riff);
	    } 
    	else {
    	    document.getElementById("intro").innerHTML = "Please enter either major or minor";
	    }
    } 
    return (
        <form onSubmit = {handleClick}>
            <label>Enter your scale:
                <input
                    type="text" 
                    value={scale}
                    onChange={(e) => setScale(e.target.value)}
                />
            </label>
            <input type = "submit" value = "Go"/>
        </form>
    )
}

export default NewTab; 