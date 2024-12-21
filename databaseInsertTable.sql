#Group1 Insert 
ALTER TABLE orders
MODIFY COLUMN order_status VARCHAR(50) DEFAULT 'New Order';
select * from orders;
UPDATE orders
SET order_status = 'Processing' 
WHERE order_id = 2;
UPDATE orders 
SET order_status = 'Shipped' 
WHERE order_id = 1;
UPDATE orders
SET order_status = 'Shipped' 
WHERE order_id = 3;
UPDATE orders
SET order_status = 'Delivered' 
WHERE order_id = 4;
UPDATE orders
SET order_status = 'Delivered' 
WHERE order_id = 5;

update orders set order_status = 'New Order' where order_id >5;
use dbaseGroup1;

INSERT INTO customers (first_name, last_name, email, phone_number, shipping_address)
VALUES 
('John', 'Doe', 'john.doe@example.com', '123-456-7890', '123 Elm St'),
('Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', '456 Oak St'),
('Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012', '789 Pine St'),
('Bob', 'Brown', 'bob.brown@example.com', '456-789-0123', '101 Maple St'),
('Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234', '202 Birch St');

-- Sample data for products
INSERT INTO products (product_name, category, price, stock_quantity)
VALUES 
('Smartphone', 'Electronics', 699.99, 50),
('Laptop', 'Electronics', 999.99, 30),
('T-shirt', 'Clothing', 19.99, 200),
('Shoes', 'Clothing', 49.99, 100),
('Washing Machine', 'Home Appliances', 499.99, 20);

-- Sample data for orders
INSERT INTO orders (customer_id, shipping_address)
VALUES 
(1, '123 Elm St'),
(2, '456 Oak St'),
(3, '789 Pine St'),
(4, '101 Maple St'),
(5, '202 Birch St');

-- Sample data for order items
INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES 
(1, 1, 1, 699.99),
(2, 2, 1, 999.99),
(3, 3, 2, 19.99),
(4, 4, 1, 49.99),
(5, 5, 1, 499.99);

-- Sample data for payments
INSERT INTO payments (order_id, amount, payment_method)
VALUES 
(1, 699.99, 'Credit Card'),
(2, 999.99, 'PayPal'),
(3, 39.98, 'Credit Card'),
(4, 49.99, 'Debit Card'),
(5, 499.99, 'Credit Card');

-- Sample data for product reviews
INSERT INTO product_reviews (customer_id, product_id, review, rating)
VALUES 
(1, 1, 'Great smartphone!', 5),
(2, 2, 'Expensive but very fast.', 4),
(3, 3, 'Soft and comfortable.', 5),
(4, 4, 'Nice shoes, but a bit tight.', 3),
(5, 5, 'Good washing machine.', 4);

-- Sample data for product images
INSERT INTO product_images (product_id, image_url)
VALUES 
(1, 'https://s3.amazonaws.com/bucket/product_1.jpg'),
(2, 'https://s3.amazonaws.com/bucket/product_2.jpg'),
(3, 'https://s3.amazonaws.com/bucket/product_3.jpg'),
(4, 'https://s3.amazonaws.com/bucket/product_4.jpg'),
(5, 'https://s3.amazonaws.com/bucket/product_5.jpg');

-- Sample data for discounts
INSERT INTO discounts (discount_code, discount_percentage, start_date, end_date)
VALUES 
('SUMMER10', 10.00, '2024-06-01', '2024-08-01'),
('WINTER15', 15.00, '2024-12-01', '2024-12-31');

-- Sample data for categories
INSERT INTO categories (category_name)
VALUES 
('Electronics'),
('Clothing'),
('Home Appliances'),
('Sports'),
('Health & Beauty');

-- Sample data for order files
INSERT INTO order_files (order_id, file_path)
VALUES 
(1, 'https://s3.amazonaws.com/bucket/invoice_1.pdf'),
(2, 'https://s3.amazonaws.com/bucket/invoice_2.pdf'),
(3, 'https://s3.amazonaws.com/bucket/invoice_3.pdf'),
(4, 'https://s3.amazonaws.com/bucket/invoice_4.pdf'),
(5, 'https://s3.amazonaws.com/bucket/invoice_5.pdf');
