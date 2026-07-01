import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import puppeteer from "puppeteer"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, "..", "public")
const htmlPath = path.join(publicDir, "social-card.html")

async function generateSocialCard() {
  console.log("Generating Accel Radius social cards...")

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })

  try {
    const page = await browser.newPage()

    await page.goto(`file://${htmlPath}`, {
      waitUntil: ["networkidle0", "domcontentloaded"],
      timeout: 30000,
    })

    await new Promise((resolve) => setTimeout(resolve, 1500))

    const formats = [
      { name: "og-image", width: 1200, height: 630 },
      { name: "twitter-card", width: 1200, height: 600 },
    ]

    for (const format of formats) {
      console.log(`Generating ${format.name}.png (${format.width}x${format.height})...`)

      await page.setViewport({
        width: format.width,
        height: format.height,
        deviceScaleFactor: 2,
      })

      await page.evaluate((width, height) => {
        const card = document.querySelector(".social-card")
        if (!card) return
        card.style.width = `${width}px`
        card.style.height = `${height}px`
      }, format.width, format.height)

      await new Promise((resolve) => setTimeout(resolve, 500))

      const screenshotPath = path.join(publicDir, `${format.name}.png`)
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
        type: "png",
      })

      console.log(`Created ${screenshotPath}`)
    }

    console.log("Social card generation complete.")
  } catch (error) {
    console.error("Error generating social card:", error)
    process.exit(1)
  } finally {
    await browser.close()
  }
}

generateSocialCard()