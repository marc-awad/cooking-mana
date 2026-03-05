import fs from "node:fs"
import path from "node:path"
import PDFDocument from "pdfkit"

const outputPath = path.resolve("public", "cookingmama-menu.pdf")

fs.mkdirSync(path.dirname(outputPath), { recursive: true })

const document = new PDFDocument({ margin: 50, size: "A4" })
const stream = fs.createWriteStream(outputPath)
document.pipe(stream)

document
  .fontSize(24)
  .fillColor("#7f1d1d")
  .text("Cookingmama", { align: "left" })
  .moveDown(0.25)

document
  .fontSize(14)
  .fillColor("#111827")
  .text("Menu Gastronomique (factice)")
  .moveDown(0.25)

document
  .fontSize(10)
  .fillColor("#4b5563")
  .text("Le menu du jour est disponible uniquement en semaine durant le midi.")
  .moveDown(1.2)

const sections = [
  {
    title: "Entrées",
    items: [
      "Velouté de châtaignes, éclats de noisettes",
      "Tartare de daurade, agrumes et aneth",
      "Carpaccio de betterave, chèvre frais",
    ],
  },
  {
    title: "Plats",
    items: [
      "Suprême de volaille, purée de panais, jus réduit",
      "Risotto aux cèpes, parmesan affiné",
      "Cabillaud rôti, quinoa aux herbes, sauce vierge",
    ],
  },
  {
    title: "Desserts",
    items: [
      "Tarte fine aux pommes, caramel beurre salé",
      "Mousse chocolat grand cru, fleur de sel",
      "Panna cotta vanille, coulis fruits rouges",
    ],
  },
]

for (const section of sections) {
  document.fontSize(13).fillColor("#7f1d1d").text(section.title).moveDown(0.2)

  for (const item of section.items) {
    document.fontSize(11).fillColor("#1f2937").text(`• ${item}`, { indent: 12 })
  }

  document.moveDown(0.9)
}

document
  .fontSize(10)
  .fillColor("#6b7280")
  .text("Document de démonstration - Cookingmama", { align: "center" })

document.end()

await new Promise((resolve, reject) => {
  stream.on("finish", resolve)
  stream.on("error", reject)
})

console.log(`PDF generated: ${outputPath}`)
