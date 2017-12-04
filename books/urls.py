from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^books/?$',views.getAllBooks),
	url(r'^books/.+$',views.getOneBook),
	url(r'^pages/.+$', views.getOnePage),
]