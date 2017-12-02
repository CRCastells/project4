from django.contrib import admin
from .models import Book, BookAdmin, Link, LinkAdmin

# Register your models here.
admin.site.register(Book, BookAdmin)
admin.site.register(Link, LinkAdmin)
