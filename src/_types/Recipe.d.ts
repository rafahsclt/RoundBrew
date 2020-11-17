export default interface IRecipe {
    beerName: string
    boilTime: number
    brewTime: number
    maturationTime: number
    yeast: string
    ramps: IRamps
    malts: IMalts
    hops: IHops
    hopsTime: IHopsTime
}

interface IRamps {
    quantityRamps: number
    tempRampOne: number | undefined
    tempRampTwo: number  | undefined
    tempRampThree: number  | undefined
    tempRampFour: number  | undefined
    tempRampFive: number  | undefined
    timeRampOne: number  | undefined
    timeRampTwo: number  | undefined
    timeRampThree: number  | undefined
    timeRampFour: number  | undefined
    timeRampFive: number  | undefined
}

interface IMalts {
    quantityMalts: number
    nameMaltOne: number | undefined
    nameMaltTwo: number | undefined
    nameMaltThree: number | undefined
    nameMaltFour: number | undefined
    nameMaltFive: number | undefined
    weightMaltOne: number | undefined
    weightMaltTwo: number | undefined
    weightMaltThree: number | undefined
    weightMaltFour: number | undefined
    weightMaltFive: number | undefined
}

interface IHops {
    quantityHops: number
    nameHopOne: number | undefined
    nameHopTwo: number | undefined
    nameHopThree: number | undefined
    nameHopFour: number | undefined
    nameHopFive: number | undefined
    weightHopOne: number | undefined
    weightHopTwo: number | undefined
    weightHopThree: number | undefined
    weightHopFour: number | undefined
    weightHopFive: number | undefined
}

interface IHopsTime {
    timeHopOne: number | undefined
    timeHopTwo: number | undefined
    timeHopThree: number | undefined
    timeHopFour: number | undefined
    timeHopFive: number | undefined
}

