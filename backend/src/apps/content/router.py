from rest_framework.routers import DefaultRouter

from apps.content.viewsets import ContentViewSet


router = DefaultRouter()
router.register(r'content', ContentViewSet, basename='contentview')

urlpatterns = router.urls
