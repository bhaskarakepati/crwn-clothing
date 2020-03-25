import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, indx) => indx < 4)
        .map(({ id, ...otherCollectionProperties }) => (
          <CollectionItem key={id} {...otherCollectionProperties} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
