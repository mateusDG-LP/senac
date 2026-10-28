nome = input("Nome: ")
preco = input("Preço: ")
qtd = input("Quantidade: ")

preco = float(preco)
qtd = int(qtd)


total = preco * qtd

print("\n ----------- Resumo do Produto-----------")
print("Produto:", nome)
print(f"Produto: R$ {preco:.2f}")
print("Quantidade:", qtd)
print(f"Total: R$ {total:.2f}")
