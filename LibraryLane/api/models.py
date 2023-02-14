from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    category_name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.category_name

    
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=200, default='author')
    category = models.ForeignKey(Category, related_name='books', on_delete=models.CASCADE)
    pages = models.IntegerField()
    price = models.IntegerField()
    stock = models.IntegerField()
    description = models.TextField()
    image_url = models.URLField()
    status = models.BooleanField(default=True)
    date_created = models.DateField(auto_now_add=True)
    
    class Meta:
        ordering = ['-date_created']
        
    def __str__(self):
        return self.title

# class Cart(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='carts')
#     created_at = models.DateTimeField(auto_now_add=True)
#     books = models.ManyToManyField(Book)
    
#     class Meta:
#         ordering = ['-created_at']

#     def __str__(self):
#         return f'{self.user}'

class Order(models.Model):
    user = models.CharField( max_length=255)
    books = models.CharField(max_length=255)
    address = models.TextField()
    pin_code = models.CharField(max_length=10)
    delivery_charge = models.FloatField(default=49)
    total_amount = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(choices=[('ordered', 'Ordered'), ('delivered', 'Delivered'), ('cancelled', 'Cancelled')], max_length=10, default='ordered')
    
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Order with id {self.id}"
    

    
    
