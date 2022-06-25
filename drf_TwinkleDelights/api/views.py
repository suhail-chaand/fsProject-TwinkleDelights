from django.shortcuts import render
from rest_framework import generics

# Create your views here.
from .models import Offer, Product
from .serializers import CouponsSerializer, ProductsSerializer, UpdateWishlistSerializer, UpdateCartSerializer

class ProductsListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer

class UpdateWishlistView(generics.UpdateAPIView):
    serializer_class = UpdateWishlistSerializer

    def get_queryset(self):
        product_id = self.kwargs['pk']
        return Product.objects.filter(id=product_id)

class UpdateCartView(generics.UpdateAPIView):
    serializer_class = UpdateCartSerializer

    def get_queryset(self):
        product_id = self.kwargs['pk']
        return Product.objects.filter(id=product_id)

class EarringsView(generics.ListAPIView):
    serializer_class = ProductsSerializer

    def get_queryset(self):
        return Product.objects.filter(category = 'Earring')

class NecklacesView(generics.ListAPIView):
    serializer_class = ProductsSerializer

    def get_queryset(self):
        return Product.objects.filter(category = 'Necklace')

class RingsView(generics.ListAPIView):
    serializer_class = ProductsSerializer

    def get_queryset(self):
        return Product.objects.filter(category = 'Ring')

class BraceletsView(generics.ListAPIView):
    serializer_class = ProductsSerializer

    def get_queryset(self):
        return Product.objects.filter(category = 'Bracelet')

class CartView(generics.ListAPIView):
    serializer_class = ProductsSerializer

    def get_queryset(self):
        return Product.objects.filter(in_cart = True)

class WishlistView(generics.ListAPIView):
    serializer_class = ProductsSerializer

    def get_queryset(self):
        return Product.objects.filter(in_wishlist = True)

class CouponsView(generics.ListAPIView):
    queryset = Offer.objects.all()
    serializer_class = CouponsSerializer