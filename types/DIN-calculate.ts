export type SkierInput = {
  units?: string | string[]
  type?: string | string[]
  height?: string | string[]
  weight?: string | string[]
  age?: string | string[]
  bsl?: string | string[]
}

export type SkierResponse = {
  status: number
  units: string
  type: number
  height: number
  weight: number
  age: number
  bsl: number
  skierCode: string
  din: number
}

export type ErrorResponse = {
  status: number
  message: string
}
