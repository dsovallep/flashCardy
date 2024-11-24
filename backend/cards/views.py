from rest_framework import viewsets
from .models import Category, Card, Tag, CardTag
from .serializers import CategorySerializer, CardSerializer, TagSerializer, CardTagSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class CardTagViewSet(viewsets.ModelViewSet):
    queryset = CardTag.objects.all()
    serializer_class = CardTagSerializer
