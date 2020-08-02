Collection: Customer;

let customer = {
  googleId: "string",
  name: {
    first: "string",
    last: "string",
    username: "string",
  },
  nozama_bucks: "int32",
};

let customerCart = {
  googleId: "string",
  specific_product_id: "objectID",
};

let customerInventory = {
  googleId: "string",
  specific_product_id: "objectID",
};

let specificProduct = {
  specific_product_id: "objectID",
  general_product_id: "objectID",
};

let generalProduct = {
  general_product_id: "objectID",
  product_name: "string",
  price: "double",
  description,
  imgSrc,
};
