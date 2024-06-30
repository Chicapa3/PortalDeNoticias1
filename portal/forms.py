from django import forms
from .models import Comentario, Categoria

class ComentarioForm(forms.ModelForm):
    class Meta:
        model = Comentario
        fields = ('nome', 'email', 'corpo')
        
class SearchForm(forms.Form):
    query = forms.CharField(max_length=100, required=False, label='Palavra Chave')
    category = forms.ModelChoiceField(queryset=Categoria.objects.all(), required=False, label='Categoria')