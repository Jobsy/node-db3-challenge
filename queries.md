# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT *
FROM products
JOIN categories


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT * FROM orders
WHERE OrderDate 
BETWEEN "1996-07-04" AND "1997-01-08";

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT products.ProductName, orderDetails.Quantity
FROM orderDetails
JOIN  products on orderDetails.Quantity = products.ProductID
WHERE OrderID = 10251
GROUP BY products.ProductName;


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT orders.OrderID as "Order ID", customers.CustomerName as "Customer Full Name", employees.LastName as "Employee Last Name"
from orders
JOIN customers
JOIN employees
GROUP BY orders.OrderId



### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 