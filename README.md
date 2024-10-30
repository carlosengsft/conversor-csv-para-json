# Conversor de CSV para JSON

Este projeto é um **Conversor de CSV para JSON** criado como parte do meu aprendizado sobre manipulação de dados com **streams** no Node.js apos as aulas do Rocketseat. A aplicação lê um arquivo CSV, transforma seu conteúdo e grava o resultado em um arquivo JSON.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração e Instalação](#configuração-e-instalação)
- [Como Usar](#como-usar)
- [Melhorias Futuras](#melhorias-futuras)

---

## Sobre o Projeto

O objetivo principal deste projeto é aprender e aplicar conceitos de **streams** em Node.js para manipulação de arquivos de maneira eficiente. Streams são particularmente úteis para lidar com grandes quantidades de dados, permitindo que o arquivo seja processado aos poucos, sem carregar todo o conteúdo na memória.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Módulo fs (File System)**: Para manipulação de arquivos.
- **csv-parser**: Biblioteca para parsing de arquivos CSV.

---

## Configuração e Instalação
Observação: estou usando npm como exemplo, mais sinta-se a vontade para usar qualquer um outro gerenciador.

1. **Clone o Repositório**:

   * git clone 
   
   * cd conversor-csv-json
   
3. **Instale as Dependências**:

  Certifique-se de ter o Node.js instalado.
  
  * npm install

3. **Prepare o Ambiente**:

  * Coloque o arquivo **input.csv** com os dados que deseja converter na mesma pasta do código.
    
  * Defina o nome do arquivo de saída JSON no código ou utilize o nome padrão **output.json**.


## Como Usar

1. **Execute o Conversor**:
   
  * node index.js
   
2. **Resultado**:
   
  * O arquivo **output.json** será gerado na pasta do projeto com os dados convertidos.
    
  * No console, uma mensagem confirmará o sucesso da conversão e mostrará os dados convertidos.

## Explicação do Código

  * Ler o arquivo CSV: Utiliza readStream para ler o arquivo input.csv de maneira eficiente.
    
  * Conversão: Cada linha do CSV é convertida em um objeto e adicionada ao array results.
    
  * Gravação no JSON: No evento end, que indica o término da leitura, o array results é convertido em JSON e gravado em output.json.

## Boas Práticas em Streams

  * Leitura e Escrita: Usar streams evita sobrecarregar a memória, especialmente para arquivos grandes.
    
  * Pipe: readStream.pipe(csv()) é utilizado para conectar o fluxo de leitura ao parser, otimizando a conversão.

## Melhorias Futuras

  * Validação de Dados: Implementar validações para garantir a consistência dos dados antes de converter.
    
  * Suporte a Outros Formatos: Expandir a funcionalidade para converter arquivos em outros formatos (como XML).
    
  * Testes Automatizados: Adicionar testes para verificar a integridade dos dados no arquivo JSON gerado.




**Contribuição**
* Sinta-se à vontade para fazer um fork do projeto e enviar  melhorias!
