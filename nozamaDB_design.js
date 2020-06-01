Collection: Customer;

let collectionCustomer = {
  googleId: "string",
  name: {
    first: "string",
    last: "string",
    username,
  },
  cart: [{ specific_product_id: "objectID" }],
  nozama_bucks: "int32",
  inventory: [{ specific_product_id: "objectID" }],
};

let collectionSpecificProduct = {
  specific_product_id: "objectID",
  general_product_id: "objectID",
};

let generalProduct = {
  general_product_id: "objectID",
  product_name: "string",
  price: "double",
};

let session = {};
