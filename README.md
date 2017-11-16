# Exemplo de paginação utilizando a lógica do google

Um exemplo de como criar uma paginação utilizando angular + lógica que o google utiliza...

## Lógica para paginação utilizada pelo google

A lógica na paginação do Google é a seguinte:

há 10 links de páginas exibidos em qualquer momento (por exemplo, 1 2 3 4 5 6 7 8 9 10) a menos que haja menos de 10 páginas totais
o link ativo (página atual) está na 6ª posição, exceto quando o link ativo está abaixo de 6 ou menos de 4 da última posição

[1] 2 3 4 5 6 7 8 9 10
1 [2] 3 4 5 6 7 8 9 10
1 2 [3] 4 5 6 7 8 9 10
1 2 3 [4] 5 6 7 8 9 10
1 2 3 4 [5] 6 7 8 9 10
1 2 3 4 5 [6] 7 8 9 10
2 3 4 5 6 [7] 8 9 10 11
3 4 5 6 7 [8] 9 10 11 12
4 5 6 7 8 [9] 10 11 12 13
5 6 7 8 9 [10] 11 12 13 14
6 7 8 9 10 [11] 12 13 14 15
6 7 8 9 10 11 [12] 13 14 15
6 7 8 9 10 11 12 [13] 14 15
6 7 8 9 10 11 12 13 [14] 15
6 7 8 9 10 11 12 13 14 [15] 


