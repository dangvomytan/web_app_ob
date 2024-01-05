from django.urls import path
from WebAppApi import views 
 
urlpatterns = [ 
    path(r'products', views.create_post,name='create_post'),
    path(r'getproduct', views.get_posts,name='get_product'),
]