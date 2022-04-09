const headerText = ['Ажлын зар авахад илүү хялбар боллоо.', 'Та зараа ганц мессэж бичээд аваарай.', 'Ажил хайхад интернет хэрэггүй.', 'Хариуг тэр дор нь.', 'Монголын анхны нэгдсэн ажлын зарын платформ.', 'Хамгийн олон ажлын байрны зарыг нэг дороос.']
let index = 0
let i = 0
const write = () => {
    const text = headerText[index]
    const txt = text.split('')
    if (i == txt.length) {
        setTimeout(() => {
            i = 0
            index++
            if (index == headerText.length) {
                index = 0
            }
            smsTxt.textContent = ''
            setTimeout(write, 100)
        }, 1000)
    } else {
        smsTxt.textContent += txt[i]
        i++
        setTimeout(write, 100)
    }
}
write()