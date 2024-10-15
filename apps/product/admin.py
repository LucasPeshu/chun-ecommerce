from django.contrib import admin
from apps.product.models import Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug', 'compare_price',
                    'price', 'quantity', 'sold', )
    list_display_links = ('id', 'name', )
    list_filter = ('category', )
    list_editable = ('compare_price', 'price', 'quantity', )
    search_fields = ('name', 'description', 'slug', )
    list_per_page = 25

    # Para autocompletar el slug basado en el nombre del producto
    prepopulated_fields = {"slug": ("name",)}

admin.site.register(Product, ProductAdmin)
