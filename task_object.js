//
const motor = {
    banDepan: "dunlop",
    banBelakang: "dunlop",
    isSport: false,
    getObjMotor: function () {
        console.log(motor.banDepan)
        console.log(motor["banBelakang"])

        motor.bensin = "Pertalite"
        motor["cc"] = "125"
        console.log(motor.isSport)
        console.log(motor.bensin)
        console.log(motor.cc + "\n")
    }
}

//
const mobil = {
    merk: "Honda",
    type: "Hatcback",
    isSport: false,
    getObjMobil: function () {
        console.log(mobil.merk)
        console.log(mobil["type"])

        mobil.bensin = "Pertamax"
        mobil["cc"] = "1500"
        console.log(mobil.isSport)
        console.log(mobil.bensin)
        console.log(mobil.cc + "\n")
    }
}

const laptop = {
    merk: "HP",
    type: "Touch Screen",
    isGaming: false,
    getObjLaptop: function () {
        console.log(laptop.merk)
        console.log(laptop["type"])

        laptop.proc = "Intel i9"
        laptop["ram"] = "16GB"
        console.log(laptop.isGaming)
        console.log(laptop.proc)
        console.log(laptop.ram + "\n")
    }
}

motor.getObjMotor()
mobil.getObjMobil()
laptop.getObjLaptop()
