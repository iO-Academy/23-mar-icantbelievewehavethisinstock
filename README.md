# 23-mar-icantbelievewehavethisinstock

## API documentation

### Get all products

* **URL**

  /products

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

  **Example:**

  `/products`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

```json
{
  "products": [
      { "id": 1,
        "SKU": "ICBWHTIS0001",
        "name": "Odd Socks",
        "price": 125
      },
      { "id": 2,
        "SKU": "ICBWHTIS0002",
        "name": "Blunt Pencils",
        "price": 1200
      }
  ]
}
```

* **Error Response:**

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error"}`

### Add a product

* **URL**

  /products

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  There are no required URL params


  **Optional:**
  
  There are no optional URL params

  * **Body Data**

  Must be sent as JSON with the correct headers

  **Required:**

    ```json
    {
      "SKU": "String",
      "stock_level": "Number",
      "name": "String",
      "price": "Number"
    }
    ```

  **Example:**

  `/products`

* **Success Response:**

    * **Code:** 201 CREATED <br />
      **Content:** <br />

  ```json
  {"message": "Successfully added item."}
  ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{"message": "Invalid or missing item information", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error", "data": []}`

### Update a product

* **URL**

  /products/{SKU}

* **Method:**

  `PUT`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

  * **Body Data**
 
  ```json
  { 
    "SKU": "SKU",
      [
        {
          "name": "String",
          "value": "String"
        },
        {
          "price": "String",
          "value": "Number"
        }
      ]
  }
  ```

  **Example:**

  `/products/ICBWHTIS0004`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

  ```json
    {"message": "Successfully updated product."}
  ```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
  **Content:** `{"message": "Invalid product data", "data": []}`

  * **Code:** 500 SERVER ERROR <br />
  **Content:** `{"message": "Unexpected error"}`

* **NOTE: You can optionally update more than one field per request**

### Delete a product

* **URL**

  /products/{SKU}

* **Method:**

  `DELETE`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

  * **Body Data**
 
  ```json
  { 
    "SKU": "SKU"
  }
  ```

  **Example:**

  `/products/ICBWHTIS0004`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

  ```json
  {"message": "Successfully deleted product."}
  ```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
  **Content:** `{"message": "Invalid SKU", "data": []}`

  * **Code:** 500 SERVER ERROR <br />
  **Content:** `{"message": "Unexpected error"}`


### Get stock levels

* **URL**

  /products/{SKU}

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

  **Example:**

  `/products/ICBWHTIS0009`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

```json
{
  "product": 
      { 
        "name": "Broken Keyboard",
        "price": 350,
        "stock_level": 5
      }
}
```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{"message": "Invalid SKU", "data": []}`* 

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{"message": "Unexpected error"}`


### Update stock levels

* **URL**

  /update/{SKU}

* **Method:**

  `PUT`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

  * **Body Data**
 
  ```json
  { 
    "SKU": "SKU",
        {
          "name": "String",
          "stock_level": "Number"
        }
  }
  ```

  **Example:**

  `/update/ICBWHTIS0004`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

  ```json
    {"message": "Successfully updated stock levels for product."}
  ```

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
  **Content:** `{"message": "Invalid sku", "data": []}`

  * **Code:** 500 SERVER ERROR <br />
  **Content:** `{"message": "Unexpected error"}`

