from django.shortcuts import redirect, render
from django.http import HttpResponse

from django.contrib.auth import authenticate, login, logout

from django.shortcuts import redirect
import json
from django.shortcuts import render, get_object_or_404
from .models import Artigo, Categoria
from .forms import ComentarioForm, SearchForm



# Create your views here.
# Criação de views para o site

def index(request):
    categorias = Categoria.objects.all()
    artigos_por_categoria = {}
    artigos_principais = Artigo.objects.order_by('-data')[:4]
    artigos_secundarios = Artigo.objects.all()[:4]
    artigos_destacados = Artigo.objects.filter(destaque=True)[:3]  # Exemplo: artigos em destaque
    artigos_mais_vistos = Artigo.objects.order_by('-visualizacoes')[:3]  # Exemplo: artigos mais vistos
   
    for categoria in categorias:
        artigos_por_categoria[categoria.nome] = Artigo.objects.filter(categoria=categoria)

    context = {
        'categorias': categorias,
        'artigos_por_categoria': artigos_por_categoria,
        'artigos_principais': artigos_principais,
        'artigos_secundarios': artigos_secundarios,
        'artigos_destacados': artigos_destacados,
        
        'artigos_mais_vistos': artigos_mais_vistos,
        
    }
    return render(request, 'portal/index.html', context)




def artigo_detalhe(request, id):
    artigo = get_object_or_404(Artigo, id=id)
    comentarios = artigo.comentarios.filter(ativo=True)
    novo_comentario = None

    if request.method == 'POST':
        form = ComentarioForm(request.POST)
        if form.is_valid():
            novo_comentario = form.save(commit=False)
            novo_comentario.artigo = artigo
            novo_comentario.save()
    else:
        form = ComentarioForm()

    return render(request, 'portal/artigo_detalhe.html', {
        'artigo': artigo,
        'comentarios': comentarios,
        'novo_comentario': novo_comentario,
        'form': form
    })
    
    
def visualizar_artigo(request, artigo_id):
    artigo = get_object_or_404(Artigo, pk=artigo_id)
    artigo.aumentar_visualizacao()  # Incrementa as visualizações do artigo

    context = {
        'artigo': artigo,
    }
    return render(request, 'portal/artigo_detalhe.html', context)


def search(request):
    form = SearchForm()
    query = None
    category = None
    results = []

    if 'query' in request.GET or 'category' in request.GET:
        form = SearchForm(request.GET)
        if form.is_valid():
            query = form.cleaned_data.get('query')
            category = form.cleaned_data.get('category')
            results = Artigo.objects.all()
            
            if query:
                results = results.filter(titulo__icontains=query)
            
            if category:
                results = results.filter(categoria=category)

    return render(request, 'portal/search_results.html', {
        'form': form,
        'query': query,
        'category': category,
        'results': results
    })