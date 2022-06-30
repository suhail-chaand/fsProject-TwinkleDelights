from django.contrib import admin
from django.urls import path

from api import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('products_list/', views.ProductsListView.as_view()),
    path('product/<int:pk>', views.ProductView.as_view()),
    path('earrings/',views.EarringsView.as_view()),
    path('necklaces/',views.NecklacesView.as_view()),
    path('rings/',views.RingsView.as_view()),
    path('bracelets/',views.BraceletsView.as_view()),
    path('cart/',views.CartView.as_view()),
    path('wishlist/',views.WishlistView.as_view()),

    path('update_wishlist/<int:pk>', views.UpdateWishlistView.as_view()),
    path('update_cart/<int:pk>', views.UpdateCartView.as_view()),

    path('coupons/',views.CouponsView.as_view()),
]
