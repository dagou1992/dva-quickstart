import React from 'react';
import {connect} from 'dva';
import ProductList from '../components/ProductList';

class Products extends React.Component {

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete} products={list}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { list } = state.products;
  return {
    list
  };
}

// export default Products;
export default connect(mapStateToProps)(Products);
