from django.contrib import admin

from apps.content.models import HeaderContent


@admin.register(HeaderContent)
class HeaderContentAdmin(admin.ModelAdmin):
    list_display = ('name',)
