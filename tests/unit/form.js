export function required(value) {
    if (!value) {
        return {
            valid: false,
            message: 'Required'
        }
    }
    return { valid: true }
}

export function isBetween(value, constraints) {
    let { min, max } = constraints
    if (!min || !max) {
        min = constraints[0][min]
        max = constraints[0][max]
    }
    if (value === 65) {
        console.log(constraints)
        console.log(min, max)
    }
    if (value < min || value > max) {
        return {
            valid: false,
            message: `Must be between ${min} and ${max}`
        }
    }
    console.log('bitch ass', value, constraints)
    return { valid: true }
}

export function validateMeasurement(value, { constraints }) {
    const result = required(value)
    if (!result.valid) {
        return result
    }
    return isBetween(value, constraints)
}

export function isFormValid(form) {
    return form.name.valid && form.weight.valid
}

const limits = {
    kg: { min: 30, max: 200 },
    lb: { min: 66, max: 440 }
}

export function patientForm(patient) {
    const name = required(patient.name)
    const weight = validateMeasurement(patient.weight.value, {
        nullable: false,
        constraints: [limits[patient.weight.units]]
    })
    return {
        name,
        weight
    }
}

