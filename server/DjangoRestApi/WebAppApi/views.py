from rest_framework import status
from rest_framework.response import Response
from WebAppApi.models import product
from WebAppApi.serializers import webAppApiSerializer
from rest_framework.decorators import api_view

# from django.http import HttpResponse
# def api_view(request):
#     return HttpResponse("Hello, world. You're at the polls index.")

@api_view(['POST'])
def create_post(request):
    if request.method == 'POST':
        serializer = webAppApiSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def get_posts(request):
    if request.method == 'GET':
        products = product.objects.all()
        serializer = webAppApiSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
