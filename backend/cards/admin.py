from django.contrib import admin
from .models import Category, Card, Tag, CardTag

admin.site.register(Category)
admin.site.register(Card)
admin.site.register(Tag)
admin.site.register(CardTag)