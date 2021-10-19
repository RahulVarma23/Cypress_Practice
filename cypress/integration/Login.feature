@UI
Feature: Flipkart Login

    As a QA , I want to login flipkart app and search for desired product

 Background: login
   Given I open the application

 Scenario Outline: Verify if user is logged in successfully
   When I login application using username as <Username> and password as <Password>
   Then I am on home page
   Then I logout from application

   Examples:
   | Username   | Password |
   | 9146130133 | wefnsfni |