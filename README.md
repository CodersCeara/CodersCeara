# Comunidade de Desenvolvedores - Projeto do Site

Olá! Seja bem-vindo ao nosso projeto. Aqui estão algumas informações importantes sobre a nossa comunidade e o objetivo do nosso site.

## Objetivos do Site

O principal objetivo do nosso site é servir como uma plataforma para divulgar eventos locais para desenvolvedores e promover o networking entre a comunidade local. O site é aberto a todos os desenvolvedores e é totalmente gratuito.

## Estrutura do Site

O site será bastante simples, será uma página única, a header terá a nossa logo no lado esquerdo, um botão para quem somos, o botão para regras, outro para comunidade e por fim, um para o mostrar os eventos!
```
├── Coders Ceará
  └── Cabeçalho
    └── Sobre
    └── Comunidade (get down)
      └── Participar
      └── Regras
      └── Eventos
      └── Newsletter
```
Usaremos o sistema de scrollto para manter tudo na mesma página:
```$("#button").click(function() {
  $('html, body').animate({
    scrollTop: $("#anchor").offset().top
  }, 2000);
});
```
O conteúdo do Footer poderá conter:
```
├── Coders Ceará
  └── Footer (Apenas âncoras)
    └── Mapa do site
    └── Comunidade
    └── Política de privacidade
    └── Termos de uso
    └── Feedback
    └── Contato
```

## Design

O design será simples e funcional, com foco na facilidade de uso. As cores, animações, textos e botões serão escolhidos para facilitar a navegação e a leitura. (Reunião)

## Figma

Estamos usando o Figma para o design. Wireframes e protótipos serão compartilhados conforme o projeto avança.

## Responsividade

O site será otimizado para todos os dispositivos para garantir que todos possam acessar as informações, independentemente do dispositivo que estão usando.
(Mas principalmente para mobile)

## Funcionalidades

O site terá uma lista de eventos e talvez um formulário de contato. Não planejamos ter um fórum de discussão ou um sistema de login.

## SEO

Vamos otimizar o site para mecanismos de busca para garantir que as pessoas possam encontrar facilmente as informações sobre os nossos eventos.
(Apenas garantir que codersceara nós ache(coders, ceara, comunidade dev, coderceara são adicionais))
## Manutenção e Atualizações

A manutenção do site será feita por voluntários da comunidade. As atualizações serão feitas conforme necessário, principalmente para adicionar novos eventos.
(É preciso decidir como fazer isso inserindo apenas as informações, sem por a mão no código em si)

## Cronograma e Orçamento

Como a comunidade é gratuita e aberta, não temos um orçamento específico para o site. O cronograma será discutido e atualizado conforme o projeto avança.
(Porém, acredito que em uma semana, possamos ter o prototipo no figma completo, vou estudar um pouco mais sobre scrum pra fazer isso caber no dia a dia de todo mundo sem atrapalhar)

## Feedback e Iteração

Estamos sempre abertos a feedback e faremos melhorias com base nele. Acreditamos que o site deve evoluir com a comunidade.

Esperamos que essas informações sejam úteis para entender o nosso projeto. Estamos ansiosos para colaborar com você!
