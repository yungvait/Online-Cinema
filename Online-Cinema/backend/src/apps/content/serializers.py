from rest_framework import serializers

from apps.content.models import HeaderContent


class HeaderContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeaderContent
        fields = ['id', 'name']
