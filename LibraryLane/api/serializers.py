from rest_framework import serializers
from .models import Category, Book, Order
from django.contrib.auth.models import User

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = (
            'id',
            'category_name',
        )

class UserRegistrationSerializer(serializers.ModelSerializer):
    
    email = serializers.EmailField(max_length=50, min_length=6)
    username = serializers.CharField(max_length=50, min_length=6)
    password = serializers.CharField(max_length=50, write_only=True)
    
    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'username',
            'password',
        )
        
    def validate(self, attrs):
        
        email = attrs.get('email', None)
        username = attrs.get('username', None)
        if User.objects.filter(email = email).exists():
            raise serializers.ValidationError({'email':('email already exists')})
        if User.objects.filter(username = username).exists():
            raise serializers.ValidationError({'username':('username already exists')})
        
        return super().validate(attrs)
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
class UsersListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
        )
        
class BookSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Book
        fields = (
            'id',
            'title',
            'author',
            'category',
            'pages',
            'price',
            'stock',
            'description',
            'image_url',
            'status',
            'date_created'
        )

# class CartSerializer(serializers.ModelSerializer):
    
#     user = serializers.PrimaryKeyRelatedField(read_only=True)
#     books = BookSerializer(read_only = True, many = True)
    
#     class Meta:
#         fields = (
#             'user',
#             'created_at',
#             'books',
#         )
#         model = Cart

class OrderSerializer(serializers.ModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Order
        fields = (
            'id', 
            'user', 
            'books', 
            'address',
            'pin_code',
            'delivery_charge',
            'total_amount',
            'created_at', 
            'status',
        )
    
    