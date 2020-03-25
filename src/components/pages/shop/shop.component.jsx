import React from "react";

import CollectionPreview from "../../collection-preview/collection-preview.component";
import "./shop.styles.scss";
import SHOP_DATA from "./shop.data.js";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProperties }) => (
          <CollectionPreview key={id} {...otherProperties} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
