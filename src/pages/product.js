import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/context.js';
import { CATEGORY_TYPE } from '../constants/index.js';
import unbxdSearchConfig from '../unbxd-search.config.json';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { waitForGlobal } from '../utils.js';

// const loadRecs = (productId) => {
//   var context = {
//     widgets: {
//       widget1: {
//         name: 'recommendations1',
//       },
//       widget2: {
//         name: 'recommendations',
//       },
//       widget3: {
//         name: 'recommendations3',
//       },
//     },
//     userInfo: {
//       siteKey: unbxdSearchConfig.siteKey,
//       apiKey: unbxdSearchConfig.apiKey,
//       uid: Unbxd ? Unbxd.getUserId() : '',
//     },
//     pageInfo: {
//       pageType: 'PRODUCT',
//       productIds: [productId],
//     },
//     unbxdDeviceType: {
//       desktopBrowser: true,
//       mobileBrowser: false,
//     },
//     itemClickHandler: function (product) {
//       // product information will be provided here
//       alert(JSON.stringify(product));
//     },
//     dataParser: function (templateData) {
//       // modify the data received from recommendation API in case required.
//       // console.log("template data");
//       return templateData;
//     },
//   };
//   window._unbxd_getRecommendations(context);
// };

export default function Product(props) {
  const { state, dispatch } = useContext(AppContext);
  let params = useParams();
  console.log(params, 'params');
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(
      `${unbxdSearchConfig.searchEndPoint}${unbxdSearchConfig.apiKey}/${unbxdSearchConfig.siteKey}/search?q=*&filter=uniqueId:${params.productId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          response: { products },
        } = data;
        setProduct(products[0]);
        waitForGlobal("getUnbxdRecommendations", function () {
          console.log("found getUnbxdRecommendations");
          getUnbxdRecommendations();
        });
      });
  }, []);

  return (
    <div className="pdp">
      <section className="product-wrapper">
        {product ? (
          <Card className="hero-product">
            <CardHeader title={product.title} />
            <CardMedia
              component="img"
              image={product.imageUrl[0]}
              alt={product.description}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Skeleton animation="wave" />
        )}
      </section>
      <section className="recs-widget">
        <div id="recommendations1"></div>
        <div id="recommendations"></div>
        <div id="recommendations3"></div>
      </section>
    </div>
  );
}
