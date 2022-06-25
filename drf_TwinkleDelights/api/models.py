from django.db import models

# Create your models here.

class Offer(models.Model):
    discount_percentage = models.IntegerField()
    coupon_code = models.CharField(max_length=8)

    def __str__(self):
        return self.coupon_code

class Product(models.Model):
    CATEGORIES = (
        ('Earring','Earring'),
        ('Necklace','Necklace'),
        ('Ring','Ring'),
        ('Bracelet','Bracelet')
    )
    category = models.CharField(max_length=10, choices=CATEGORIES, default='NotDefined')
    
    name = models.CharField(max_length=100)
    price = models.FloatField()

    image = models.URLField()
    dimension = models.CharField(max_length=10)
    weight = models.FloatField()
    material = models.CharField(max_length=30)
    description = models.CharField(max_length=500)
    
    in_wishlist = models.BooleanField()
    in_cart = models.BooleanField()

    offers = models.ManyToManyField(Offer)

    def __str__(self):
        return self.name
