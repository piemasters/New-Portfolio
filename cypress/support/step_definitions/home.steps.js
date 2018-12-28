/* global Given, When, Then */

import { getPageHeading } from "../page_objects/headings.po";

beforeEach(function() {
  cy.visit('');
});

Given('I open the {string} homepage', (title) => {
  cy.title().should('include', title);
});

Then('the page heading should be {string}', (pageHeading) => {
  getPageHeading().contains(pageHeading);
});
