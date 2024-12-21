create database dbaseGroup1;

use dbaseGroup1;

select * from customers;
select * from orders;
select * from products;
select * from order_items;
select * from categories;
select * from product_images;
select * from product_reviews;
select * from PAYMENTS;
select * from order_files;
select * from discounts;

CREATE TABLE customers (
    customer_id  INT auto_increment PRIMARY KEY ,
    first_name VARCHAR(255) not null ,
    last_name VARCHAR(255) not null,
    email VARCHAR(255) not null,
    phone_number VARCHAR(20),
    shipping_address Varchar (255) not null,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders(
	order_id int auto_increment primary key,
    customer_id int,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    order_date timestamp DEFAULT CURRENT_TIMESTAMP,
    shipping_address varchar(255) not null,
    order_status varchar (50)
    );
    
  
    Create table products(
		product_id int auto_increment primary key,
        product_name varchar (255) not null,
        category varchar (255) not null,
        price decimal (10,2) not null,
        stock_quantity int,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE order_items(
		order_item int auto_increment primary key,
        order_id int,
        foreign key(order_id) references orders(order_id),
        product_id int,
        foreign key(product_id) references products(product_id),
        quantity int,
        price decimal (10,2)
    );
    
    create table categories(
		categories_id int auto_increment PRIMARY KEY,
        category_name varchar(255) not null
    );
    
    create table product_images(
		image_id int auto_increment primary key,
        product_id int,
        foreign key(product_id) references products(product_id),
        image_url varchar(255),
        created_at timestamp DEFAULT CURRENT_TIMESTAMP
    );
    
    create table product_reviews(
		review_id int auto_increment primary key,
         customer_id int,
		FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
        product_id int,
        foreign key(product_id) references products(product_id),
        review TEXT,
        rating INT,
        review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE PAYMENTS(
		payment_id INT auto_increment primary key,
         order_id int,
        foreign key(order_id) references orders(order_id),
        amount decimal(10,2),
        payment_method varchar(50),
        payment_date timestamp DEFAULT CURRENT_TIMESTAMP
    );
    
    create table order_files(
		file_id INT auto_increment primary key,
         order_id int,
        foreign key(order_id) references orders(order_id),
        file_path VARCHAR (255),
        file_type VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE discounts(
		discount_code VARCHAR (50) primary key,
        discount_percentage DECIMAL(5,2),
        start_date DATE ,
        end_date DATE
    );
    