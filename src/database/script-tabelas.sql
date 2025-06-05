-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE techleague;

USE techleague;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	senha VARCHAR(50) NOT NULL
	);
    
    select * from usuario;

CREATE TABLE resultado_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pontuacao INT NOT NULL,
    totalQuestoes INT NOT NULL,
    rank VARCHAR (45),
	fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario (id));

