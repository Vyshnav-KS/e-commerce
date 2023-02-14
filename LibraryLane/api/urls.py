from django.urls import path
from .views import ListCategory, DetailCategory, UserRegisterationView, UserListView, UserDetailView, ListBookView, DetailBookView, ListOrderView, DetailOrderView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    
    path('auth/register/', UserRegisterationView.as_view(), name='register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='login'),
    
    path('categories/', ListCategory.as_view(), name='category'),
    path('categories/<int:pk>/', DetailCategory.as_view(), name='single-category'),
    
    path('user/', UserListView.as_view(), name='users'),
    path('user/<int:pk>', UserDetailView.as_view(), name='user'),
    
    path('book/', ListBookView.as_view(), name='books'),
    path('book/<int:pk>/', DetailBookView.as_view(), name='book'),
    
    # path('cart/', ListCartView.as_view(), name='carts'),
    # path('cart/<int:pk>/', DetailCartView.as_view(), name='cart'),
    
    path('order/', ListOrderView.as_view(), name='orders'),
    path('order/<int:pk>/', DetailOrderView.as_view(), name='order'),
]
