const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(
    __dirname,
    "src/assets/images/projects"
);

const files = fs
    .readdirSync(inputDir)
    .filter((file) => file.endsWith(".png"));

async function optimizeImages() {
    for (const file of files) {
        const input = path.join(inputDir, file);

        const output = path.join(
            inputDir,
            file.replace(".png", ".webp")
        );

        await sharp(input)
            .resize({
                width: 1200,
                withoutEnlargement: true,
            })
            .webp({
                quality: 70,
            })
            .toFile(output);

        console.log(`✓ ${file} → ${path.basename(output)}`);
    }
}

optimizeImages().catch(console.error);