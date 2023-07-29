const dayjs = require('dayjs')

function calculateAge (dateBirth) {
   
    const today = dayjs()
    const birth = dayjs(dateBirth)
    const ageInYears = today.diff(birth, 'year')
    const nextBirthDay = birth.add(parseInt(ageInYears) + 1, 'year')
    const daysForNextBirth = nextBirthDay.diff(today, 'day') + 1


    console.log(`Sua idade é de ${ageInYears}`)
    console.log(`Seu próximo aniversário é em ${nextBirthDay.format('YYYY-MM-DD')}`)
    console.log(`Faltam ${daysForNextBirth} dias para o seu aniversário`)
}

calculateAge('2008-01-29')
