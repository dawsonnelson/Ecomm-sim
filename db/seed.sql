Create table Cart(
    id serial Primary key,
    product_id integer

)

Create table Products(
    id serial Primary key,
    image varchar(10000),
    name varchar(200),
    price varchar

)



-- select * 
-- from Products
-- inner join Cart
-- on Products.id = Cart.product_id
-- where Products.id in(2, 7, 9)


