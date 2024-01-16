describe('автотест форма логина', function () {
   it('верный логин верный пароль', function () {
        cy.visit('https://login.qa.studio/');
})

 })  

describe('автотест форма логина', function () {
   it('верный логин верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //вход на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); //вводим валидный логин
        cy.get('#pass').type("iLoveqastudio1"); //вводим валидный пароль
        cy.get('#loginButton').click(); //клик по войти 
        cy.get('#messageHeader').should("be.visible"); //видна надпись авторизации 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем теес
        cy.get('#exitMessageButton > .exitIcon').should("be.visible");
})

 })  

describe('автотест форма логина', function () {
   it('автотест логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //вход на сайт 
        cy.get('#forgotEmailButton').click(); //клик забыли пароль
        cy.get('#mailForgot').type('smokid@yandex.ru') //ввел имейл
        cy.get('#restoreEmailButton').click(); //кликнул по кнопке
        cy.get('#messageHeader').should("be.visible"); //вижу надпись
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); //вижу крестик 
})

 })  


describe('автотест форма логина', function () {
   it('негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); //вход на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); //вводим валидный логин
        cy.get('#pass').type("iLoveqastudio5"); //вводим  не валидный пароль
        cy.get('#loginButton').click(); //клик по войти 
        cy.get('#messageHeader').should("be.visible"); //видна надпись авторизации 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем теес
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); //вижу крестик 
})

 })  


describe('автотест форма логина', function () {
   it('негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); //вход на сайт 
        cy.get('#mail').type('german@dolnikovм.ru'); //вводим   не валидный логин
        cy.get('#pass').type("iLoveqastudio1"); //вводим  валидный пароль
        cy.get('#loginButton').click(); //клик по войти 
        cy.get('#messageHeader').should("be.visible"); //видна надпись авторизации 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяем текс
        cy.get('#exitMessageButton > .exitIcon').should("be.visible"); //вижу крестик 
})

 })  

describe('автотест форма логина', function () {
   it('негативный кейс валидации @', function () {
        cy.visit('https://login.qa.studio/'); //вход на сайт 
        cy.get('#mail').type('germandolnikov.ru'); //вводим емейл не валид без @
        cy.get('#pass').type("iLoveqastudio1"); //вводим  валидный пароль
        cy.get('#loginButton').click(); //клик по войти 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //видим тест 
       
})

 })  

describe('автотест форма логина', function () {
   it('приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //вход на сайт 
        cy.get('#mail').type(' GerMan@Dolnikov.ru'); //вводим валидный логин
        cy.get('#pass').type("iLoveqastudio1"); //вводим валидный пароль
        cy.get('#loginButton').click(); //клик по войти 
        cy.get('#messageHeader').should("be.visible"); //видна надпись авторизации 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем теес
        cy.get('#exitMessageButton > .exitIcon').should("be.visible");
})

 })  
