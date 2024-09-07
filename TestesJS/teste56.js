/*
Usando new Map()
Você deve considerar usar new Map() em JavaScript quando:

Precisa de chaves que podem ser de qualquer tipo.
A ordem de inserção é importante.
Precisa de métodos adicionais de manipulação que não estão disponíveis em objetos literais.
Deseja uma iteração mais eficiente e direta sobre pares chave-valor.
Necessita garantir chaves únicas e gerenciá-las de forma eficaz.
O Map é uma estrutura de dados poderosa e versátil que pode simplificar muitas operações envolvendo coleções de pares chave-valor.
*/
//So posso usar dois valores no set(), o objeto e sua chave

const mapa=new Map()
mapa.set('Joao','ID 4565')
mapa.set('Corsa','Placa: FCD4565')

console.log(mapa)

console.log(mapa.get('Joao')) //Com get() pesquisei qual era a chave de 'Joao' em mapa
console.log(mapa.get('Corsa'))