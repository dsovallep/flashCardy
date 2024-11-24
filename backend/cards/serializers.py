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
    card_question = serializers.CharField(source='card.questionCard', read_only=True)
    tag_name = serializers.CharField(source='tag.name', read_only=True)

    class Meta:
        model = CardTag
        fields = '__all__'
        extra_fields = ['card_question', 'tag_name']
