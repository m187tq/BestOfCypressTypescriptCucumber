/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class FooterComponent {
  aboutUsLink() {
    return cy.get('.info_links_footer > :nth-child(1) > .dropdown > a');
  }

  privacyPolicyLink() {
    return cy.get('.info_links_footer > :nth-child(2) > .dropdown > a');
  }

  returnPolicyLink() {
    return cy.get(':nth-child(3) > .dropdown > a');
  }

  shippingLink() {
    return cy.get(':nth-child(4) > .dropdown > a');
  }

  contactUsLink() {
    return cy.get('.info_links_footer > :nth-child(5) > a');
  }

  siteMapLink() {
    return cy.get('.info_links_footer > :nth-child(6) > a');
  }

  loginLink() {
    return cy.get('.info_links_footer > :nth-child(7) > a');
  }

  aboutUsTxt() {
    return cy.get('#block_frame_html_block_2078 > h2');
  }

  contactUsTxt() {
    return cy.get('#block_frame_html_block_2079 > h2');
  }

  testimonialsTxt() {
    return cy.get('#block_frame_html_block_2080 > h2');
  }

  newsletterSignupTxt() {
    return cy.get('#newslettersignup > h2');
  }

  phoneTxt() {
    return cy.get('.contact > :nth-child(1)');
  }

  emailTxt() {
    return cy.get('.contact > :nth-child(2)');
  }
  msgIcon() {
    return cy.get('#newslettersignup > .pull-left');
  }
  processingIcon() {
    return cy.get('.flex-control-nav');
  }
  subscribeNewsletterBox() {
    return cy.get('#appendedInputButton');
  }
  subscribeBtn() {
    return cy.get('.input-group-btn > .btn');
  }
  paypalIcon() {
    return;
  }
  facebookIcon() {
    return cy.get('.footer_block > .social_icons > .facebook');
  }

  twitterIcon() {
    return cy.get('.footer_block > .social_icons > .twitter');
  }

  linkedinIcon() {
    return cy.get('.footer_block > .social_icons > .linkedin');
  }

  linkedinIcon() {
    return cy.get('.b_block > a > img');
  }
}

export default FooterComponent;
