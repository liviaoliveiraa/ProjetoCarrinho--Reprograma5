### {reprograma} week 05 - Projeto Guiado :rocket: 
---
<p align = "center">
<a align href = "#Sobre">Sobre</a> │
<a align href = "#Objetivo">Objetivo</a> │
<a align href = "#Regras">Regras</a> │
<a align href = "#Resultado">Resultado</a> │
<a align href = "#Tecnologias">Tecnologias</a> │
<a align href = "#Pré-requisitos">Pré-requisitos</a> │
<a align href = "#Autora">Autora</a>
</p>

---

## Sobre
<p>Exercício desenvolvido no bootcamp da {reprograma} onde tivemos o nosso primeiro <b>projeto guiado</b> na linguagem JavaScript e utilizando a extensão nodemoon </p>

## Objetivo
<p>O objetivo desse projeto foi consolidadar todo o aprendizado que tivermos nessas 4 semanas de curso através da resolução do seguinte desafio:</p>
<p>
  <b>Criar um carrinho de compra!</b>

Ps: Parece fácil, né? Mas não foi!E confesso que esse projeto é o meu favorito dentre tantos que há no meu repositório.
</p>

## Regras

- Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo `database.js`

- Receber via terminal as entradas de `id` e `quantidade` dos produtos a serem adquiridos.

- Perguntar se a cliente possue cupom de desconto. Caso a cliente digite 10, significa que terá 10% de desconto.

- Calcular o valor do subtotal (sem considerar o desconto)

- Calcular o valor de desconto

- Calcular o valor total (considerando o desconto do cupom)

- Apresentar no console:
  - a tabela contendo a lista de produtos adquiridos, incluindo a quantidade de cada produto
  - o valor subtotal em Reais
  - o valor do desconto em Reais
  - o valor total em Reais
  - a data da compra

- Validação de produto existente pelo `id`. Caso não encontre o produto, apresentar uma mensagem de erro e solicitar novamente um `id` válido.

- Validação de `quantidade` para não permitir valores negativos.

- Validação de cupom de desconto. Não aceitar cupom acima de 15% de desconto.

- Criação de uma classe chamada `Pedido` contendo no `constructor` pelo menos as seguintes informações:
  - a lista de produtos
  - o valor de cupom
  
- A classe `Pedido` deve conter os métodos:
  - que calcule a quantidade de itens totais no carrinho
  - que calcule o valor subtotal (quantidade de itens multiplicado pelo preço unitário)
  - que calcule o valor de desconto (subtotal multiplicado pelo desconto)
  - que calcule o valor total (subtotal menos o desconto)

## Resultado

<p>Nada melhor que mostrar o resultado com um vídeo, o que acham?

Infelizmente eu não consegui colocar o vídeo aqui :frowning_face:   mas segue o link do resultado no [Youtube](https://www.youtube.com/embed/9WxFaX0tYN0)</p>


## Tecnologias
- [VsCode](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/)

## Pré-requisitos

    npm i nodemoon

## Autora
Made with :purple_heart: by [Lívia Oliveira](https://www.linkedin.com/in/l%C3%ADvia-de-oliveira-almeida/)
