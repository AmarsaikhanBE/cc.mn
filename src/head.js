const headerText = ['Ажлын зар авахад илүү хялбар боллоо.', 'Та зараа ганц мессэж бичээд аваарай.', 'Ажил хайхад интернет хэрэггүй.', 'Хариуг тэр дор нь', 'Монголын анхны нэгдсэн ажлын зарын платформ г.м', 'Хамгийн олон ажлын байрны зарыг нэг дороос']
const printSMS = () => {
    setInterval(function() {
        headerText.forEach(element => {
            smsTxt.textContent = element
        }, 1000)
    });
    setInterval(printSMS, 7000)
}
printSMS()