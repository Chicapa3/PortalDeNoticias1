from django.db import models


#Classe para criar categorias
class Categoria(models.Model):
    nome = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome


#Classe para criar artigos
class Artigo(models.Model):
    titulo = models.CharField(max_length=200)
    nome_autor = models.CharField(max_length=50)
    conteudo = models.TextField()
    data = models.DateTimeField(auto_now_add=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='artigos/%Y/%m/%d/', blank=True, null=True)
    destaque = models.BooleanField(default=False)
    
    visualizacoes = models.IntegerField(default=0)

    def __str__(self):
        return self.titulo
    
    def aumentar_visualizacao(self):
        self.visualizacoes += 1
        self.save(update_fields=['visualizacoes'])
    
#Classe para criar comentários
class Comentario(models.Model):
    artigo = models.ForeignKey(Artigo, on_delete=models.CASCADE, related_name='comentarios')
    nome = models.CharField(max_length=50)
    email = models.EmailField()
    corpo = models.TextField()
    data_criacao = models.DateTimeField(auto_now_add=True)
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return f'Comentário por {self.nome} em {self.artigo}'
        