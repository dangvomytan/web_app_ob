from rest_framework import serializers 
from WebAppApi.models import product
 
 
class webAppApiSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = product
        fields = ('id',
                  'product_name',
                  'create_at',
                  'update_at',
                  'is_delete')