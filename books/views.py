from django.shortcuts import render
from django.http import HttpResponse
from books.models import Book,Link
from books.serializers import BookSerializer,LinkSerializer
from rest_framework.renderers import JSONRenderer
from pprint import pprint
# Create your views here.
def getAllBooks(request):
	books = Book.objects.all()
	data = [BookSerializer(book).data for book in books]
	return HttpResponse(JSONRenderer().render({'books':data}))

def getOneBook(request):
	path = request.path.split('/api/books/')[1]
	book = Book.objects.get(id=path)
	return HttpResponse(JSONRenderer().render({'book':BookSerializer(book).data}))

def getAllPages(request):
	pages = Link.objects.all()
	data = [LinkSerializer(link).data for link in pages]
	return HttpResponse(JSONRenderer().render({'pages':data}))

def getOnePage(request):
	path = request.path.split('/api/pages/')[1]
	page = Link.objects.get(id=path)
	return HttpResponse(JSONRenderer().render({'page':LinkSerializer(page).data}))