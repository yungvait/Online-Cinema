from apps.content.models import HeaderContent


def get_headers():
    return HeaderContent.objects.filter(is_active=True)
