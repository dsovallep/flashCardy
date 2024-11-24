from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, CardViewSet, TagViewSet, CardTagViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'cards', CardViewSet)
router.register(r'tags', TagViewSet)
router.register(r'cardtags', CardTagViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
