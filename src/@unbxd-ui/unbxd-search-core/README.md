# search-JS-core
Core library for Search JS

## Getting started

  

Library can be used in 2 ways

  

### ES6

Install `@unbxd-ui/unbxd-search-core` using npm.

  

```shell

npm install @unbxd-ui/unbxd-search-core --save

```

  

Import the UnbxdSearchCore function in your project

  

```js

import  UnbxdSearchCore  from  "@unbxd-ui/unbxd-search-core";

```

 <h3>Basic Implementation</h3>
  <div>
  <pre style="white-space: pre;">
      const unbxdCore =  new UnbxdSearch({
          siteKey: "demo-unbxd700181503576558",
          apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
          searchEndPoint:"https://search.unbxd.io/",
          productType:"SEARCH",
          searchQueryParam:"q",
          browseQueryParam:"p",
          updateUrls:true,
          productAttributes: ['title','uniqueId'],
          platform: "IO",
          onEvent:unbxdCallback,
          facetMultiSelect: true,
          defaultFilters :null,
          spellCheck: true,
          pageSize: 5,
          sortOptions : [
              {
                  value:"price desc",
                  text:"Price High to Low"
              },
              {
                  value:"price asc",
                  text:" Price Low to High"
              }
          ],
          variants:{
            enabled:false,
            count:1,
            groupBy:'',
            attributes:[],
            mapping:{
                "image_url":"v_image_url"
            }
        },
          facetMultilevel: true,
          facetMultilevelName: 'category',
          multiLevelFacetSelector:"bucketFacetElem",
          extraParams :{
              "version":"V2",
              "facet.multilevel":"categoryPath",
              "f.categoryPath.displayName":"category",
              "f.categoryPath.max.depth":"4",
              "f.categoryPath.facet.limit":"100"
          },
          facetDepth:4,
          breadcrumb:true,
          showSwatches:false,
          swatchMap:{
              "swatchList":"colours",
              "swatchImgs":"variant_metadata",
              "swatchColors":"unbxd_parentcolours"
          },
          hashMode:false,
          applyMultipleFilters:false,
          getCategoryId:()=>{
              return encodeURIComponent(window.UnbxdAnalyticsConf["page"])
          },
          setCategoryId:(param, self)=>{
            //you can set your category page ids
          },
          onQueryRedirect:(self, redirect)=>{
              //have your logic here to handle the redirect 
          }
      });
  </pre>
</div>

## SDK Apis

The available apis are listed <a href="https://cxdoc.unbxd.io/search-JS-core/global.html">here.</a>

