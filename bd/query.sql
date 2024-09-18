CREATE DATABASE productos;

USE productos;

CREATE TABLE product (
idProduct INT PRIMARY KEY auto_increment,
name VARCHAR (45) not null,
price FLOAT not null,
stock INT not null,
description text
);

CREATE TABLE users (
idUser INT PRIMARY KEY auto_increment,
user VARCHAR (45) not null,
name VARCHAR (45) not null ,
email VARCHAR (45) not null,
password VARCHAR(45) not null
);

CREATE TABLE pedidos (
idPedidos INT PRIMARY KEY  auto_increment,
nameProduct VARCHAR (45),
price FLOAT not null,
description text
);