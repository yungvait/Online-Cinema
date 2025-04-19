from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from apps.content import selectors
from apps.content.serializers import HeaderContentSerializer


class ContentViewSet(viewsets.GenericViewSet):

    def get_queryset(self):
        if self.action == self.header.__name__:
            return selectors.get_headers()

    @action(detail=False)
    def header(self, request):
        serializer = HeaderContentSerializer(self.get_queryset(), many=True)
        return Response(serializer.data)
