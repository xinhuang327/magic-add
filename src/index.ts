
/**
 * Perform a magical add operation
 * @param {number} numberA
 * @param {number} numberB
 * @return {number}
 */
export function magicAdd(numberA: number, numberB: number): number {
	return numberA + numberB
}

export interface People {
	name: string
	age: number
}

export function magicAddPeople(a: People, b: People): People {
	return {
		name: a.name,
		age: a.age + b.age
	}
}