from rest_framework import serializers
from .models import Category, Card, Tag, CardTag

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class CardTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardTag
        fields = '__all__'
