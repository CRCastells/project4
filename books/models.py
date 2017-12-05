from django.db import models
from django.contrib import admin

# Create your models here.
class Book(models.Model):
	title = models.CharField(max_length=30)
	author = models.CharField(max_length=30)
	published_date = models.DateTimeField()

	def __str__(self):
		return self.title

class BookAdmin(admin.ModelAdmin):
	list_display = ('book_title' , 'author_name', 'published_on')

	def author_name(self, obj):
		return obj.author
	author_name.short_description = 'Author Name'

	def book_title(self, obj):
		return obj.title
	book_title.short_description = 'Book Title'

	def published_on(self, obj):
		return obj.published_date.strftime("%B %d, %Y")

	published_on.short_description = 'Published on'

class Link(models.Model):
	title = models.CharField(max_length=120)
	book = models.ForeignKey(Book, on_delete=models.CASCADE)
	content = models.TextField(default='')
	links = models.ManyToManyField('self', blank=True, symmetrical=False)
	
	def __str__(self):
		return self.title

class LinkAdmin(admin.ModelAdmin):
	list_display = ('link_title', 'book_title')

	def book_title(self, obj):
		return obj.book

	def link_title(self, obj):
		return obj.title

