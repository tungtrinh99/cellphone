# Setting project
## run docker 
- docker compose build
- docker compose up -d 
***
### MacOS + Linux
-  docker run --rm -v $(pwd):/app -w /app node:16-alpine npm install

### Window Git bash
-  docker run --rm -v "/$(pwd)":/app -w //app node:16-alpine npm install

### Window PowerShell
-  docker run --rm -v "$(pwd):/app" -w /app node:16-alpine npm install

### Window Command Prompt
docker run --rm -v "%cd%:/app" -w /app node:16-alpine npm install
***
## run migrate 
- docker compose exec app sh
- cd src
- npx sequelize-cli db:migrate

***
![](public/image.png)
***
[github.com/tungtrinh99](https://github.com/tungtrinh99)