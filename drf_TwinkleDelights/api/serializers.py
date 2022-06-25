from rest_framework import serializers

from .models import Product, Offer

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        depth = 1

class UpdateWishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','in_wishlist']

class UpdateCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','in_cart']

class CouponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['coupon_code']