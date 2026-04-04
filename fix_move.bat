cd /d C:\Users\GAMER01\Louis3701.github.io
if exist Portfolio-sio\* (
  move Portfolio-sio\* .
)
if exist Portfolio-sio\.nojekyll move Portfolio-sio\.nojekyll .
if exist Portfolio-sio\README.md move Portfolio-sio\README.md .
if exist Portfolio-sio\README.pdf move Portfolio-sio\README.pdf .
if exist Portfolio-sio rd /s /q Portfolio-sio
cd /d C:\Users\GAMER01\Louis3701.github.io
git add .
git commit -m "Move tracked site files from Portfolio-sio folder to root"
git push origin main
