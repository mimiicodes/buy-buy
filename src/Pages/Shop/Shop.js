import React, {Component} from 'react'
import './Shop.scss'
import ItemsGrid from '../../Components/ItemsGrid/ItemsGrid'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
// import Filter from '../../Components/FilterComponent/Filter';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items:[]
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({ 
          isLoaded: true, 
          items: result 
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Navbar />
          <ItemsGrid items={items}/>
          <Footer/>
        </div>
      );
    }
  }
}

export default Shop