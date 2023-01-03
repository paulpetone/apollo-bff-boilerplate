import { writeFile } from "fs"
import { ExampleMutation, ExampleQuery } from "./src"

const Schema = `
  ${ExampleQuery.schema}
  ${ExampleMutation.schema}
`

writeFile('./schema.graphql', Schema, (err) => {
  if (err) throw err
  console.log('Schema updated!')
})
