from django.contrib import admin
from .models import Artigo, Categoria

# Register your models here.
admin.site.register(Categoria)
admin.site.register(Artigo)