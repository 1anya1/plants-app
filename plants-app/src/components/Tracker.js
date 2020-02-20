import React from 'react'

class Tracker extends React.Component {
    render() {
        return (
            <div>

            <div className = 'newPlants'>
                <form id='plant' >
                    <label>Plants Name</label>
                    <input id='name' name='name' type='text' />

                    <label>Plants image</label>
                    <input type="file" id="img" name="img" accept="image/*" />
                </form>
                <button type="submit" form="plant" value="Submit">Submit</button>
            </div>

            <h1>My Plants</h1>
            </div>
        )
    }
}

export default Tracker; 