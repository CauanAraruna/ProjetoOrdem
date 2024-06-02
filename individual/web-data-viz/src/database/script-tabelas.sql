-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projetoOrdem;
use projetoOrdem;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    elemento varchar(50)
);

select * from usuario;
select * from mensagemHome;



create table mensagemHome (
idMensagem int primary key auto_increment,
mensagem varchar(250));

select * from aviso;
select * from quiz;

 CREATE TABLE aviso (
 	id INT PRIMARY KEY AUTO_INCREMENT,
 	titulo VARCHAR(100),
 	descricao VARCHAR(150),
 	fk_usuario INT,
 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
 );

create table quiz (
	idQuiz int primary key auto_increment,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(id),
    pontucao int
);

select u.nome, q.pontucao from quiz as q join usuario as u on q.fkUsuario = u.id order by pontucao desc;

select max(pontucao) from quiz where fkUsuario = 1;