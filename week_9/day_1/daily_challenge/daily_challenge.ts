function validateUnionType(value: any, allowedTypes: string[]): boolean {
    return allowedTypes.some(type => typeof value === type)
}

let test = validateUnionType(2, ['number', 'boolean'])
console.log(test)