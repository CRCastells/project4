from rest_framework import serializers
from books.models import Book,Link

class BookSerializer(serializers.ModelSerializer):
	class Meta:
		model = Book
		fields = ('id', 'title','author','published_date')
	
class LinkSerializer(serializers.ModelSerializer):
	class Meta:
		model = Link
		fields = ('id','title','content', 'book','links')
		depth = 1