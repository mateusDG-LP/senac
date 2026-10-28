estoque = float(input("estoque: "))
preco = float(input("preço: "))
if preco >= 100:
    estoque * 0.10

preco_final = preco + estoque 
print(f"preco_final {preco_final:.2f}")