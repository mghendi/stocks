from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):
    name = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    symbol = models.CharField(max_length=200)
    last_price = models.CharField(max_length=200)
    change = models.CharField(max_length=200)
    shares = models.CharField(max_length=200)
    cost_basis = models.CharField(max_length=200)
    mkt_value = models.CharField(max_length=200)
    gain = models.CharField(max_length=200)
    gain_pct = models.CharField(max_length=200)
    days_gain = models.CharField(max_length=200)
    date = models.CharField(max_length=200)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
