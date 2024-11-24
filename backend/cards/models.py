from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Category(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_default = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'category'
        unique_together = ('user', 'name')
        constraints = [
            models.UniqueConstraint(fields=['user'], condition=models.Q(is_default=True), name='unique_default_category_per_user')
        ]
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['name']

@receiver(post_save, sender=User)
def create_default_category(sender, instance, created, **kwargs):
    if created:
        Category.objects.create(name='General', user=instance, is_default=True)


class Card(models.Model):
    questionCard = models.TextField()
    answerCard = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.questionCard

    class Meta:
        db_table = 'card'
        verbose_name = 'Card'
        verbose_name_plural = 'Cards'
        ordering = ['created_at']
        

class Tag(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'tag'
        verbose_name = 'Tag'
        verbose_name_plural = 'Tags'
        ordering = ['name']


class CardTag(models.Model):
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.card.questionCard} - {self.tag.name}'

    class Meta:
        unique_together = ('card', 'tag')
        db_table = 'card_tag'
        verbose_name = 'Card Tag'
        verbose_name_plural = 'Card Tags'

