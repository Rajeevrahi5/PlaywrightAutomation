import { Locator, Page } from "@playwright/test";
const { expect } = require('@playwright/test');

class SignupPage {
  page: Page
  textSignupTitle:Locator
  textName: Locator
  textEmailId: Locator
  ButtonSignup: Locator
  textAccountInformation:Locator
  textTitle:Locator
  radioButtonMr:Locator
  radioButtonMrs:Locator
  textNameVerify:Locator
  textEmailidVerify:Locator
  textPassword:Locator
  textDateOfBirthTitle:Locator
  buttonDays:Locator
  buttonMonths:Locator
  buttonYears:Locator
  buttonSignupForNewsletter:Locator
  buttonRecieveSpecialOffers:Locator
  textAddinformationTitle:Locator
  textFirstName:Locator
  textLastName:Locator
  textCompanyName:Locator
  textAddress:Locator
  textAddress2:Locator
  dropdownSelectCountry:Locator
  textState:Locator
  textCity:Locator
  textZipcode:Locator
  textMobileNumber:Locator
  buttonCreateAccount:Locator
  popupAccountCreatedMessage:Locator
    

    constructor(page: Page) {
      this.page = page;
      this.textSignupTitle = page.getByRole('heading', { name: 'New User Signup!' })
      this.textName = page.getByPlaceholder('Name')
      this.textEmailId = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
      this.ButtonSignup = page.getByRole('button',{name: 'Signup'})
      this.textAccountInformation=page.getByText('Enter Account Information')
      this.textTitle =  page.getByText('Title')
      this.radioButtonMr= page.getByLabel('Mr.')
      this.radioButtonMrs= page.getByLabel('Mrs.')
      this.textNameVerify = (page.getByLabel('Name *',{exact:true}))
      this.textEmailidVerify =  (page.getByLabel('Email *',{exact:true}))
      this.textPassword = page.getByLabel('Password *')
      this.textDateOfBirthTitle = page.getByText('Date of Birth')
      this.buttonDays = page.locator('#days')
      this.buttonMonths = page.locator('#months')
      this.buttonYears = page.locator('#years')
      this.buttonSignupForNewsletter =  page.getByLabel('Sign up for our newsletter!')
      this.buttonRecieveSpecialOffers = page.getByLabel('Receive special offers from our partners!')
      this.textAddinformationTitle = page.getByText('Address Information')
      this.textFirstName = page.getByLabel('First name *')
      this.textLastName = page.getByLabel('Last name *')
      this.textCompanyName = page.getByLabel('Company', { exact: true })
      this.textAddress = page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)')
      this.textAddress2 = page.getByLabel('Address 2')
      this.dropdownSelectCountry = page.getByLabel('Country *')
      this.textState = page.getByLabel('State *')
      this.textCity = page.getByLabel('City *' )
      this.textZipcode = page.locator('#zipcode')
      this.textMobileNumber = page.getByLabel('Mobile Number *')
      this.buttonCreateAccount = page.getByRole('button', { name: 'Create Account' })
      this.popupAccountCreatedMessage = page.getByText('Account Created!')
    }

    async signupAutomationExercise(name: string, emailId: string) {
      await this.textSignupTitle.isVisible()
      await this.textName.fill(name)
      await this.textEmailId.fill(emailId)
      await this.ButtonSignup.click()
    }

    async enterAccountInformationDetails(title:string, password:string, day:string, month:string, year:string) {
      await this.textAccountInformation.isVisible() 
      this.chooseTitle(title)
      await expect (this.textNameVerify).toBeVisible()
      await expect(this.textEmailidVerify).toBeVisible()
      await this.textPassword.fill(password)
      this.selectDateOfBirth(day, month,year)
      await this.buttonSignupForNewsletter.click()
      await this.buttonRecieveSpecialOffers.isVisible()  
    }

    async selectDateOfBirth(day:string, month:string, year:string) {
      await this.textDateOfBirthTitle.isVisible()
      await this.buttonDays.selectOption(day)
      await this.buttonMonths.selectOption(month)
      await this.buttonYears.selectOption(year)
    }

    async chooseTitle(title: string) {
        if(title === 'Mr.') {
           await this.radioButtonMr.click()
        } else {
            await this.radioButtonMrs.click()
        }
      }

    async fillAdressInformation(firstName:string, lastName:string, company:string, address:string, address2:string, country:string, state:string, city:string, zipcode:string, mobileNumber:string) {
      await this.textAddinformationTitle.isVisible()
      await this.textFirstName.fill(firstName)
      await this.textLastName.fill(lastName)
      await this.textCompanyName.fill(company)
      await this.textAddress.fill(address)
      await this.textAddress2.fill(address2)
      await this.dropdownSelectCountry.selectOption(country)
      await this.textState.fill(state)
      await this.textCity.fill(city)
      await this.textZipcode.fill(zipcode)
      await this.textMobileNumber.fill(mobileNumber) 
    }

    async createAccountAndVerify() {
      await this.buttonCreateAccount.click()
      await expect(this.popupAccountCreatedMessage).toBeVisible()
    }
}
export default SignupPage