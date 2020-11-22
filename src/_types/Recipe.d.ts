export default interface IRecipe {
    beerName: string
    boilTime: number
    brewTime: number
    maturationTime: number
    yeast: string | ""
    ramps: IRamps
    malts: IMalts
    hops: IHops
    hopsTime: IHopsTime
}

interface IRamps {
    quantityRamps: number
    tempRampOne: number | ""
    tempRampTwo: number  | ""
    tempRampThree: number  | ""
    tempRampFour: number  | ""
    tempRampFive: number  | ""
    timeRampOne: number  | ""
    timeRampTwo: number  | ""
    timeRampThree: number  | ""
    timeRampFour: number  | ""
    timeRampFive: number  | ""
}

interface IMalts {
    quantityMalts: number
    nameMaltOne: string | ""
    nameMaltTwo: string | ""
    nameMaltThree: string | ""
    nameMaltFour: string | ""
    nameMaltFive: string | ""
    weightMaltOne: number | ""
    weightMaltTwo: number | ""
    weightMaltThree: number | ""
    weightMaltFour: number | ""
    weightMaltFive: number | ""
}

interface IHops {
    quantityHops: number
    nameHopOne: string | ""
    nameHopTwo: string | ""
    nameHopThree: string | ""
    nameHopFour: string | ""
    nameHopFive: string | ""
    weightHopOne: number | ""
    weightHopTwo: number | ""
    weightHopThree: number | ""
    weightHopFour: number | ""
    weightHopFive: number | ""
}

interface IHopsTime {
    timeHopOne: number | ""
    timeHopTwo: number | ""
    timeHopThree: number | ""
    timeHopFour: number | ""
    timeHopFive: number | ""
}

