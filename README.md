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
        { 
            "id": 1,
            "SKU": "ICBWHTIS0001",
            "name": "Odd Socks",
            "price": 125
        },
        { 
            "id": 2,
            "SKU": "ICBWHTIS0002",
            "name": "Blunt Pencils",
            "price": 1200
        }
    ]
  }
  ```

* **Error Response:**

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error", "data": []}`


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

  **Required:**

  ```json
  {
      "name": "Cheeseballs",
      "stock_level": 3,
      "price": 1 
  }
  ```

  **Example:**

  `/products`

* **Success Response:**

    * **Code:** 201 CREATED<br />
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
      "SKU": "ICBWHTIS0010",
          "updatedData": {
              "name": "Sky Hooks",        
              "price": 1
          }
  }
  ```

  **Example:**

  `/products/ICBWHTIS0010`

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
      **Content:** `{"message": "Unexpected error", "data": []}`

**NOTE: You can optionally update more than one field per request**


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
      "SKU": "ICBWHTIS0004"
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
      **Content:** `{"message": "Unexpected error", "data": []}`


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
      **Content:** `{"message": "Unexpected error", "data": []}`


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
             "name": "Blunt Pencils",
             "stock_level": 3
        }
  }
  ```
**NOTE: `stock_level` takes positive *and* negative numbers **

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
      **Content:** `{"message": "Invalid SKU", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error"}`


### Place an Order

* **URL**

  /orders

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
     "order": {
        "order_number": "ORDER0001",
        "email_address": "jeff@amazeon.com",
        "shipping_address": {
            "customer_name": "Jeff Bayzos",
            "address_line_1": "1 Jeff Street",
            "town_city": "Jeffsville",
            "postcode": "J3 3FF"
        },
        "products": [
            {
                "name": "Odd Socks",
                "SKU": "ICBWHTIS0001",
                "quantity": 3
            },
            {
                "name": "Blunt Pencils",
                "SKU": "ICBWHTIS0002",
                "quantity": 3
            }
        ]
    }
  }
  ```

* **Success Response:**

    * **Code:** 201 CREATED<br />
      **Content:** <br />

  ```json
  {"message": "Successfully placed order"}
  ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{"message": "Invalid order number - Already exists in database", "data": []}`
                   `{"message": "Not enough stock of Blunt Pencils", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error"}`


