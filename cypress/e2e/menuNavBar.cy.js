describe('Category Navigation Tests', () => {
  
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        // skincareLink.click();

        //The following will pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click();

        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //Following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text())

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    });

    
  

  it('should navigate to login page on click', () => {})
  it('should navigate to product/category&path page >> APPAREL & ACCESSORIES', () => {})
  it('should navigate to product/category&path page >> MAKEUP', () => {})

  it('should navigate to product/category&path page >> SKINCARE', () => {})

  it('should navigate to product/category&path page >> FRAGRANCE', () => {})

  it('should navigate to product/category&path page >> MEN', () => {})

  it('should navigate to product/category&path page >> HAIR CARE', () => {})

  it('should navigate to product/category&path page >> BOOKS', () => {})
})
