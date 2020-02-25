import React from "react";
import ReactDOM from "react-dom";
import plantList from './plantList'



    const plants = plantList
      function Search() {
        const [searchTerm, setSearchTerm] = React.useState("");
        const [searchResults, setSearchResults] = React.useState([]);
        const handleChange = e => {
          setSearchTerm(e.target.value);
        };
        React.useEffect(() => {
          const results = plants.filter(plant =>{
            return Object.keys(plant).some(key =>
                typeof plant[key]=== 'string' && plant[key].toLowerCase().includes(searchTerm)
              );
          }
           
          );
          setSearchResults(results);
        }, [searchTerm]);
        return (
          <div className="App">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
            <ul>
              {searchResults.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        );
      }
    
    
export default Search

 