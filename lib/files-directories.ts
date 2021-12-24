import fs from 'fs'
import { join } from 'path'

export function getDirSlugs(path: string) {
  const directory = join(process.cwd(), path)
  const dirSync = fs.readdirSync(directory)

  return dirSync.filter((item) => !item.includes('.tsx'))
}