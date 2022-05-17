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

const loadRecs = (productId) => {
  var context = {
    widgets: {
      widget1: {
        name: 'recommendations1',
      },
      widget2: {
        name: 'recommendations',
      },
      widget3: {
        name: 'recommendations3',
      },
    },
    userInfo: {
      siteKey: unbxdSearchConfig.siteKey,
      apiKey: unbxdSearchConfig.apiKey,
      uid: Unbxd ? Unbxd.getUserId() : '',
    },
    pageInfo: {
      pageType: 'PRODUCT',
      productIds: [productId],
    },
    unbxdDeviceType: {
      desktopBrowser: true,
      mobileBrowser: false,
    },
    itemClickHandler: function (product) {
      // product information will be provided here
      alert(JSON.stringify(product));
    },
    dataParser: function (templateData) {
      // modify the data received from recommendation API in case required.
      // console.log("template data");
      return templateData;
    },
  };
  window._unbxd_getRecommendations(context);

  // console.log("nc recs")
  //   function abc() {
  //       window.BXUBX = !0,
  //       window.BXUBX_UID = "uid-1619003810227-80514",  // need to update w.r.t unbxd
  //       window.BXUBX_UD = {
  //       customerid: "demo-unbxd700181503576558" // need to update w.r.t unbxd
  //       };
  //       var t, e = document.body, n = document.createElement("script"), r = "https://js.boxx.ai/js_init/?", i = {
  //       client_id: "demo-unbxd700181503576558",
  //       unbxdrecs : true,
  //       host: window.location.hostname,
  //       }, r = r + (t = i,
  //       Object.keys(t).map(function(e) {
  //       return [e, t[e]].map(encodeURIComponent).join("=")
  //       }).join("&"));
  //       n.type = "text/javascript",
  //       n.src = r,
  //       e.insertBefore(n, e.childNodes[0])
  //   }
  //       abc()
};

export default function Product(props) {
  const { state, dispatch } = useContext(AppContext);
  let params = useParams();
  console.log(params, 'params');
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(
      `https://search.unbxd.io/${unbxdSearchConfig.apiKey}/${unbxdSearchConfig.siteKey}/search?q=*&filter=uniqueId:${params.productId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          response: { products },
        } = data;
        setProduct(products[0]);
        loadRecs(params.productId);
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
