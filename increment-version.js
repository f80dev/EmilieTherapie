const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');

try {
  const fileData = fs.readFileSync(packageJsonPath, 'utf8');
  const pkg = JSON.parse(fileData);

  // Découpage SemVer (ex : 1.0.0 -> [1, 0, 0])
  const versionParts = pkg.version.split('.').map(Number);
  versionParts[2] += 1; // Incrémentation du patch

  pkg.version = versionParts.join('.');

  fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`[Version Bump] Nouvelle version : ${pkg.version}`);
} catch (error) {
  console.error('Erreur lors de la mise à jour du package.json :', error);
  process.exit(1);
}
