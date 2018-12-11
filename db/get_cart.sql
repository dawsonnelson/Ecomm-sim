select * 
from Products
inner join Cart
on Products.id = Cart.product_id
where Products.id in($1)