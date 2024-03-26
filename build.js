import boxen from 'boxen'
import chalk from 'chalk'
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const body = `                  ${chalk.cyan(chalk.bold('Stefan Mirck'))}
       ${chalk.blue('Staff+ Full-Stack Software Engineer')}

${chalk.white(`  GitHub: ${chalk.gray('https://github.com/')}${chalk.blue(chalk.bold('StefanMirck'))}`)}
${chalk.white(`LinkedIn: ${chalk.gray('https://www.linkedin.com/in/')}${chalk.blue(chalk.bold('StefanMirck'))}`)}
${chalk.white(` Website: ${chalk.gray('https://')}${chalk.blue(chalk.bold('stefanmirck.com'))}`)}
${chalk.white(`      CV: ${chalk.gray('https://')}${chalk.blue(chalk.bold('stefanmirck.com/cv/'))}`)}

${chalk.white(`    Card: ${chalk.red('npx @stefanmirck/card')}`)}`

const card = boxen(body, {
	borderStyle: 'double',
	padding: 1,
})

writeFileSync(join(__dirname, 'bin/card'), chalk.green(card))
