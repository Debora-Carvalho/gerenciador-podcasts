# Podcast Manager

### Descrição 
Um aplicativo ao estilo Netflix, aonde se possa centralizar diferentes episódios de podcasts classificados por categorias.

### Domínio 
Podcasts feitos em vídeo

### Features
- Listar os episódios de podcasts em sessões de categorias
 - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcasts 

### Processo de desenvolvimento

#### Feature 1:
Listar os episódios de podcasts em sessões de categorias

#### Imprementação 1:
GET: Retornar em uma api rest (json) o Nome do podcast, Nome do episódio, Imagem de capa, Link, Categoria

response:
```js
[
    {
        podcastName: "Eslen Podcast",
        episode: "Psicólogo: Aprenda a Manejar o Estresse - Dr. Ramiro Coni [Ep. 129]",
        videoId: "etPtb-nua8Y",
        cover: "https://i.ytimg.com/vi/etPtb-nua8Y/maxresdefault.jpg",
        link: "https://youtu.be/etPtb-nua8Y?si=pF-EnY47hGn2jhiv",
        categories: ["psicologia", "saúde"]
    },
    {
        podcastName: "Eslen Podcast",
        episode: "Física e Matemática: A Chave Para Entender o Universo - Felipe Guisoli [Ep. 102]",
        videoId: "nQmamKKQH80",
        cover: "https://i.ytimg.com/vi/nQmamKKQH80/maxresdefault.jpg",
        link: "https://youtu.be/nQmamKKQH80?si=Hp3MK6U4V9DIpp5L",
        categories: ["física", "matemática", "universo"]
    }
]

```

#### Feature 2:
Filtrar episódios por nome de podcasts 

#### Imprementação 1:
GET: Retornar lista de episódios com base em um parâmetro enviado pelo client do nome do podcast
