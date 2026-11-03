from django.http import HttpResponse

# Create your views here.
def inicio(request:HttpResponse):
    return HttpResponse("CANES | Protótipo do " \
    "catálago em desenvolvimento")

def catalogo(request: HttpResponse):
    return HttpResponse("Produtos serão exibidos futuramente " \
    "catálogo em desenvolvimento")

def saudacao(request: HttpResponse, nome: str):
    return HttpResponse(f"Olá, {nome}! Bem-vindo ao catálogo CANES.")

def sobre(request: HttpResponse):
    return HttpResponse(f"Sobre o site: esse tem a proposta de ser um catálogo de filmes e series.")
