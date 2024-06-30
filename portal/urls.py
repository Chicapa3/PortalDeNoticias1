from . import views
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path
from django.views.generic.base import RedirectView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    #path('redirect-admin', RedirectView.as_view(url="/admin"),name="redirect-admin"),
    path('', views.index, name="index-page"),
    path('artigo/<int:id>/', views.artigo_detalhe, name='artigo_detalhe'),
    path('search/', views.search, name='search'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
