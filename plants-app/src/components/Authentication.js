import React from 'react';

export default class MyFilteringComponent extends React.Component {
    state = {
        initialPlants: [],
        plants: []
    }

    filterList = (event) => {
      let plants = this.state.initialPlants;
      plants = plants.filter((plants) => {
        return plants.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({plants: plants});
    }

    componentWillMount = () => {
      this.setState({
          initialPlants: this.props.content,
          plants: this.props.content
      })
    }

    render() {
      return (
        <div>
          <form>
                <input type="text" placeholder="Search" onChange={this.filterList}/>
          </form>
          <div>
            {
                this.state.plants.map(function(item) {
                    return <div key={item}>{item}</div>
                })
            }
            </div>
        </div>
      );
    }
};