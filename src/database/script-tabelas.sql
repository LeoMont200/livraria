create database livraria;
use livraria;

create table genero(
idGenero int primary key auto_increment,
nome varchar(45)
);

create table autor(
idAutor int primary key auto_increment,
nome varchar(45)
);

create table livro (
idLivro int primary key auto_increment,
precoCompra decimal(4,2),
precoVenda decimal(4,2),
qtd int,
fkGenero int,
	foreign key (fkGenero) references genero(idGenero),
fkAutor int,
	foreign key (fkAutor) references autor(idAutor)
);