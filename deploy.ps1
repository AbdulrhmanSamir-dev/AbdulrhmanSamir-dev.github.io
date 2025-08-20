flutter build web --release

Remove-Item -Recurse -Force .\docs\*

Copy-Item -Recurse .\build\web\* .\docs\

# رفع على GitHub
git add .
git commit -m "update portfolio"
git push
