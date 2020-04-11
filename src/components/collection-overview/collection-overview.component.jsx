import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopColelctionForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherProperties }) => (
      <CollectionPreview key={id} {...otherProperties} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopColelctionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
