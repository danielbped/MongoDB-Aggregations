# Projeto [MongoDB Aggregations](https://github.com/tryber/sd-012-mongodb-aggregations/pull/39)
  - Módulo 3: Desenvolvimento Back-end
  - Bloco 23: MongoDB: Updates Simples e Complexos
### Requisitos
- [x] Desafio 1 - Ajude a Trybe a escolher um filme para a próxima noite! Baseado em uma pesquisa, decidimos que os filmes em potencial devem atender alguns critérios, vejamos:

#### Retorne todos os filmes que satisfaça, através de uma  _pipeline_, as condições abaixo

* `imdb.rating` deve ser maior ou igual a `7`;
* `genres` não deve conter `Crime` ou `Horror`;
* `rated` deve ser igual a `PG` ou `G`;
* `languages` contém `English` e `Spanish`.
* Utilize a coleção `movies`.

- [x] Desafio 2 - A escolha do filme da noite foi um sucesso, mas infelizmente ficamos com nossa banda de internet quase esgotada, e ainda precisamos de uma nova recomendação de filme. Para diminuir o volume de dados trafegados:

#### Utilizando o mesmo _pipeline_ anterior, retorne apenas os campos `title`, `rated`, `imdb.rating`, `imdb.votes` e `year`, modificando seus nomes para `titulo`, `avaliado`, `notaIMDB`, `votosIMDB` e `ano`, respectivamente.

- [x] Desafio 3 - Agora que você tem os campos essenciais, aplique mais um estágio na pipeline do desafio anterior que atenda a seguinte demanda:

#### Retorne esses filmes ordenados por ano e nota IMDB de forma decrescente e título por ordem alfabética.

- [x] Desafio 4 - Nossa coleção de filmes tem muitos documentos diferentes, alguns com títulos "mais complexos" do que outros. Se quisermos analisar nossa coleção para encontrar títulos de filmes que têm uma só palavra no título, poderíamos buscar todos os filmes da coleção e processar isso na aplicação, mas o `Aggregation Framework` nos permite fazer isso diretamente no lado do banco de dados.

#### Crie uma _pipeline_ que retorna documentos  com o novo campo `title_split`, ela deve seguir as seguintes condições:

- `title_split` deve conter uma lista de palavras presentes em `title`.
- A pipeline deve retornar apenas filmes com o título composto apenas de uma palavra.
- A pipeline deve ser ordenada por `title` em ordem alfabética.
- A pipeline deve retornar apenas o campo `title_split`.

- [x] Desafio 5 - Temos outra noite de filme aqui na Trybe e, desta vez, nós perguntamos à equipe quais são suas pessoas preferidas como atores e/ou atrizes. Aqui está o resultado:

* Sandra Bullock
* Tom Hanks
* Julia Roberts
* Kevin Spacey
* George Clooney

#### Considerando esta lista, crie uma _pipeline_ que retorne o `title` do vigésimo quinto filme da agregação que satisfaz as seguintes condições:
- [x] Desafio 6 - Vamos explorar mais operadores aritméticos!

#### Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule o **maior valor**, **menor valor**, **média** e o **desvio padrão** das avaliações (informação do campo `imdb.rating` no banco)
- [x] Desafio 7 - Vamos nos aprofundar um pouco mais em nossa coleção de filmes. 

#### Conte quantos filmes cada um dos atores e atrizes do elenco (`cast` no banco) já participou e obtenha uma média do campo `imdb.rating` para cada um desses atores e atrizes.

- Traga o nome do ator ou atriz;
- Número de filmes em que participou
- Média do imdb desses filmes arredondada para uma casa decimal usando o operador [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).
- Considere somente os membros do elenco de filmes com o idioma inglês (`English`). 
- Exiba a lista em ordem decrescente de documentos pelo número de filmes e nome do ator ou atriz.

- [x] Desafio 8 - Trocando de contexto, vamos utilizar nossa outra coleção que contém dados de empresas aéreas, suas rotas, seus voos e parcerias.

#### Liste todas as parcerias da coleção `air_alliances`, que voam rotas com um Boing 747 ou um Airbus A380 , para descobrir qual delas tem o maior número de rotas com esses aviões.

No campo `airplane`, na coleção `air_routes`: 
- Boing 747 está abreviado para `747`
- Airbus A380 está abreviado para `380`
- [x] Desafio 9 - A partir da coleção `trips`, determine o menor e o maior ano de nascimento. 

- Guarde essa informação, você precisará dela mais tarde.

- Não considere documentos com valores vazios (`""`) e em que o campo não existe!

- Para este desafio utilize o operador [`$toInt`](https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/index.html) para converter de string para valor inteiro.
- [x] Desafio 10 - Encontre a duração média de viagens por tipo de usuário. 

- Exiba o valor em horas com apenas duas casas decimais 
- Exiba a média de viagens ordenada de forma crescente. 

- [x] Desafio 11 - Determine qual o dia da semana com maior número de viagens iniciadas.
- [x] Desafio 12 - Usando a pipeline anterior que retorna o dia com mais viagens, determine qual estação tem o maior número de viagens nesse dia da semana.

- Exiba apenas o nome da estação e o total de viagens.
- [x] Desafio 13 - Determine a duração média das viagens iniciadas no dia `10/03/2016`, em minutos.
- [x] Desafio 14 - Baseado na duração média das viagens, determine quais são as `5` bicicletas que foram mais utilizadas. 
