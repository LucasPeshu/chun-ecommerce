# Generated by Django 5.1.2 on 2024-10-16 16:22

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0002_remove_cart_total_items_cart_created_at_and_more'),
        ('product', '0004_alter_product_slug'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='products',
        ),
        migrations.RemoveField(
            model_name='cart',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='cart',
            name='updated_at',
        ),
        migrations.AddField(
            model_name='cart',
            name='total_items',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='cart',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField()),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cart.cart')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product')),
            ],
        ),
        migrations.DeleteModel(
            name='CartProduct',
        ),
    ]
