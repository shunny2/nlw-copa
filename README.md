<p align="center">
  <a href="#about-application">About Application</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-run">How to Run</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#figma">Figma</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project-status">Project Status</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

</br>

![nlw-copa](https://user-images.githubusercontent.com/72872854/200069701-7026d50a-2959-485a-9383-be4163ac9411.png)

<p align="center">
 <a href="https://img.shields.io/github/stars/shunny2/nlw-copa?style=social"><img src="https://img.shields.io/github/stars/shunny2/nlw-copa?style=social" alt="Repo Stars"/></a>
 <a href="https://img.shields.io/github/forks/shunny2/nlw-copa?style=social"><img src="https://img.shields.io/github/forks/shunny2/nlw-copa?style=social" alt="Repo Forks"/></a>
 <a href="https://img.shields.io/github/license/shunny2/nlw-copa?style=social"><img src="https://img.shields.io/github/license/shunny2/nlw-copa?style=social" alt="License"/></a>
</p>

## About Application

<b>NLW-copa</b> is a project to create polls of cup teams and share them among your friends. The project was created at the Next Level Week event by [Rocketseat](https://www.rocketseat.com.br/).

## Technologies

### Frontend

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://nextjs.org/" title="Nextjs"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="Nextjs logo image." /></a>
    </td>
    <td>
      <a href="" title="React Native"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" alt="React Native logo image." /></a>
    </td>
    <td>
      <a href="https://tailwindcss.com/" title="Tailwindcss"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwindcss logo image." /></a>
    </td>
  </tbody>
</table>

### Backend

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://nodejs.org/en/" title="NodeJS"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="Node.js logo image." /></a>
    </td>
    <td>
      <a href="https://fastify.dev/" title="Fastify"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/fastify.svg" alt="Fastify logo image." /></a>
    </td>
    <td>
      <a href="https://www.prisma.io/" title="Prisma ORM"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" alt="Prisma ORM logo image." /></a>
    </td>
  </tbody>
</table>

### Database

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://www.sqlite.org/" title="SQLite"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/sqlite.svg" alt="SQLite logo image." /></a>
    </td>
  </tbody>
</table>
  
## How to Run

First, start by cloning the repository:
```shell
git clone https://github.com/shunny2/nlw-copa
```

Now, we must get the backend running. Then, enter the backend folder and run:
```bash
npm run dev
```

Run migrations to create the database tables:
```bash
npx prisma generate
```

Enter test data:
```bash
npx prisma db seed
```

Then enter the frontend folder and install your dependencies:
```bash
npm install
```

Run it:
```bash
npm run dev
```

Your backend apps and your website are working. </br> 
Finally, we must put the cell phone to work too. Then enter the mobile folder and install your dependencies:
```bash
npm install
```

Run it:
```bash
npx expo start
```

## Figma
See the project prototype in [figma](https://www.figma.com/file/MbLPiWxdF21YtWQAGvh9bb/Bol%C3%A3o-da-Copa-(Community)?node-id=0%3A1).

## Project Status

> Status: Completed.

## License

This project is under an [MIT](https://opensource.org/licenses/MIT) license.

<hr></hr>

<p align="center">Created by <a href="https://github.com/shunny2"><b>Alexander Davis<b></a>.</p>
