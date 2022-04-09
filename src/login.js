// hide Login Page
loginPage.style.display = 'none'
    // hide Company Page
companyPage.style.display = 'none'
coSignupBox.style.display = 'none'
coPassForgetBox.style.display = 'none'
callCoLoginBox.style.display = 'none'
    // hide elements from Person Page
perSignupBox.style.display = 'none'
perPassForgetBox.style.display = 'none'
callPerLoginBox.style.display = 'none'
    // call Login Page
loginBtn.addEventListener('click', () => {
        loginPage.style.display = null
    })
    //.user-buttons
toPerson.addEventListener('click', () => {
    personPage.style.display = null
    toPerson.className = 'active'
    companyPage.style.display = 'none'
    toCompany.className = ''
})
toCompany.addEventListener('click', () => {
    personPage.style.display = 'none'
    toPerson.className = ''
    companyPage.style.display = null
    toCompany.className = 'active'
})
closeLogin.addEventListener('click', () => {
        loginPage.style.display = 'none'
    })
    // inside switch
const perSwitcherBtns = personPage.querySelectorAll('.login-buttons li')
const perForms = personPage.querySelectorAll('form')
callPerLoginBox.addEventListener('click', () => {
    perSwitcherBtns.forEach(element => {
        element.style.display = null
    });
    callPerLoginBox.style.display = 'none'
    perForms.forEach(element => {
        element.style.display = 'none'
    });
    perLoginBox.style.display = null
})
callPerSignupBox.addEventListener('click', () => {
    perSwitcherBtns.forEach(element => {
        element.style.display = null
    });
    callPerSignupBox.style.display = 'none'
    perForms.forEach(element => {
        element.style.display = 'none'
    });
    perSignupBox.style.display = null
})
callPerPassForgetBox.addEventListener('click', () => {
    perSwitcherBtns.forEach(element => {
        element.style.display = null
    });
    callPerPassForgetBox.style.display = 'none'
    perForms.forEach(element => {
        element.style.display = 'none'
    });
    perPassForgetBox.style.display = null
})
const coSwitcherBtns = companyPage.querySelectorAll('.login-buttons li')
const coForms = companyPage.querySelectorAll('form')
callCoLoginBox.addEventListener('click', () => {
    coSwitcherBtns.forEach(element => {
        element.style.display = null
    });
    callPerLoginBox.style.display = 'none'
    coForms.forEach(element => {
        element.style.display = 'none'
    });
    coLoginBox.style.display = null
})
callCoSignupBox.addEventListener('click', () => {
    coSwitcherBtns.forEach(element => {
        element.style.display = null
    });
    callCoSignupBox.style.display = 'none'
    coForms.forEach(element => {
        element.style.display = 'none'
    });
    coSignupBox.style.display = null
})
callCoPassForgetBox.addEventListener('click', () => {
    coSwitcherBtns.forEach(element => {
        element.style.display = null
    });
    callCoPassForgetBox.style.display = 'none'
    coForms.forEach(element => {
        element.style.display = 'none'
    });
    coPassForgetBox.style.display = null
})