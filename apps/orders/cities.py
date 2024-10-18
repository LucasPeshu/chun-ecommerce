from django.db import models


class Cities(models.TextChoices):
    RetiroLocal = 'Retiro Local',
    VillaMaria = 'Villa María',
    VillaNueva = 'Villa Nueva',
    Cordoba = 'Córdoba',