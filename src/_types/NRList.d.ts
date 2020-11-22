export interface INRListOne {
    beerName: string
    yeast: string | undefined
    boilTime: string | undefined
    brewTime: number | undefined
    maturationTime: number | undefined
}

export interface INRListTwo {
    quantityMalts: number
    nameMaltOne: string 
    nameMaltTwo: string | undefined
    nameMaltThree: string | undefined
    nameMaltFour: string | undefined
    nameMaltFive: string | undefined
    weightMaltOne: number 
    weightMaltTwo: number | undefined
    weightMaltThree: number | undefined
    weightMaltFour: number | undefined
    weightMaltFive: number | undefined
}

export interface INRListThree {
    quantityHops: number
    nameHopOne: string 
    nameHopTwo: string | undefined
    nameHopThree: string | undefined
    nameHopFour: string | undefined
    nameHopFive: string | undefined
    weightHopOne: number 
    weightHopTwo: number | undefined
    weightHopThree: number | undefined
    weightHopFour: number | undefined
    weightHopFive: number | undefined
}

export interface INRListFour {
    quantityRamps: number
    timeRampOne: number
    timeRampTwo: number | undefined
    timeRampThree: number | undefined
    timeRampFour: number | undefined
    timeRampFive: number | undefined
    tempRampOne: number
    tempRampTwo: number | undefined
    tempRampThree: number | undefined
    tempRampFour: number | undefined
    tempRampFive: number | undefined
}

export interface INRListFive {
    timeHopOne: number
    timeHopTwo: number | undefined
    timeHopThree: number | undefined
    timeHopFour: number | undefined
    timeHopFive: number | undefined
}