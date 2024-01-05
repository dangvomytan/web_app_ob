from django.db import models

# Create your models here.
class product(models.Model):
    product_name = models.CharField(max_length=200)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    is_delete  = models.BooleanField(default=True)
    class Meta:
        db_table = 'product'