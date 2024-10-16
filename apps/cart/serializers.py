from rest_framework import serializers
from .models import Cart, CartItem
from apps.product.serializers import ProductSerializer

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = ['product', 'quantity', 'get_total_item_price']

class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True, read_only=True)
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = ['id', 'cart_items', 'total_price', 'created_at']

    def get_total_price(self, obj):
        return obj.get_total_price()
