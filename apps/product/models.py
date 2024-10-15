from django.db import models
from django.utils.text import slugify  # Importa slugify para generar el slug automáticamente
from datetime import datetime
from apps.category.models import Category
from cloudinary.models import CloudinaryField

class Product(models.Model):
    name = models.CharField(max_length=255)
    photo = CloudinaryField('image')
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    compare_price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=datetime.now)

    def get_thumbnail(self):
        if self.photo:
            return self.photo.url
        return ''

    def save(self, *args, **kwargs):
        # Generar el slug automáticamente si está vacío
        if not self.slug:
            self.slug = slugify(self.name)
        
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
