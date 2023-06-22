# 23-mar-icantbelievewehavethisinstock

## API documentation

***Products***

-   [Get all products](#get-all-products)
-   [Add a product](#add-a-product)
-   [Update a product](#update-a-product)
-   [Delete a product](#delete-a-product)
-   [Get stock levels](#get-stock-levels)
-   [Update stock levels](#update-stock-levels)

***Orders***
-   [Get all orders](#get-all-orders)
-   [Place an order](#place-an-order)
-   [Cancel an order](#cancel-an-order)
---

### Get all products
[Back to top](#api-documentation)

* **URL**

  /products

* **Method:**

  `GET`

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
[Back to top](#api-documentation)

* **URL**

  /products

* **Method:**

  `POST`

* **Request Body**

```json
{
    "name": "Cheeseballs",
    "stock_level": 3,
    "price": 1 
}
```

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
[Back to top](#api-documentation)

* **URL**

  /products/:SKU

* **Method:**

  `PUT`

* **Request Body**

```json
{
    "SKU": "ICBWHTIS0010",
    "updatedData": {
        "name": "Sky Hooks",        
        "price": 1
    }
}
```

* **Example:**

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

**NOTE: You can optionally update more than one field per request.**


### Delete a product
[Back to top](#api-documentation)

* **URL**

  /products/:SKU

* **Method:**

  `DELETE`

* **Example:**

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
[Back to top](#api-documentation)

* **URL**

  /products/:SKU

* **Method:**

  `GET`

* **Example:**

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
      **Content:** `{"message": "Invalid SKU.", "data": []}`* 

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error.", "data": []}`


### Update stock levels
[Back to top](#api-documentation)

* **URL**

  /update/:SKU

* **Method:**

  `PUT`

* **Request Body**

```json
{ 
    "stock_level": 3
}
```
__NOTE: `stock_level` takes positive *and* negative numbers.__ 

* **Example:**

  `/update/ICBWHTIS0004`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

  ```json
  {"message": "Successfully updated stock levels for product."}
  ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{"message": "Invalid SKU.", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error."}`


### Get all orders
[Back to top](#api-documentation)

* **URL**

  /orders

* **Method:**

  `GET`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

  ```json
  {
      "orders": [
          {
              "order_number": "ORDER0001",
              "customer_email": "jeff@amazeon.com",
              "products": [
                  {
                      "name": "Odd Socks",
                      "quantity": "3"
                  },
                  {
                      "name": "Blunt Pencils",
                      "quantity": "4"
                  }
              ]
          },
          {
              "order_number": "ORDER0002",
              "customer_email": "jeff@amazeon.com",
              "products": [
                  {
                      "name": "Odd Socks",
                      "quantity": "1"
                  },
                  {
                      "name": "Blunt Pencils",
                      "quantity": "1"
                  }
              ]
          }
      ]
  }
  ```

* **Error Response:**

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error."}`


### Place an order
[Back to top](#api-documentation)

* **URL**

  /orders

* **Method:**

  `PUT`

* **Request Body**

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
  {"message": "Successfully placed order."}
  ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      `{"message": "Invalid order number - Already exists in database.", "data": []}`
      `{"message": "Not enough stock of Blunt Pencils.", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error."}`


### Cancel an order 
[Back to top](#api-documentation)

* **URL**

  /orders/:order_number

* **Method:**

  `DELETE`

* **Example:**

  `/orders/ORDER0001`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

  ```json
  {"message": "Successfully cancelled order."}
  ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{"message": "Invalid order number.", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error.", "data": []}`

