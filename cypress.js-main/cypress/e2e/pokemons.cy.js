describe('один длинный автотест для [Покемонов]', function () {
   it('на покупку нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/'); 
        cy.get(':nth-child(1) > .auth__input').type('berya209@yandex.ru'); //вводим валидный логин
        cy.get('#password').type('1234Papa');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(2) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); //ввод номера карты 
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); //ввод срок карты 
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ввод код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov'); //ввод имя
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should("be.visible");
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');


 })    


})