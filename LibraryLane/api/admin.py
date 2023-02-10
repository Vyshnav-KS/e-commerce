from django.contrib import admin
from .models import Category, Book, Cart, Order

# Register your models here.

admin.site.register(Category)
admin.site.register(Book)
admin.site.register(Cart)
admin.site.register(Order)