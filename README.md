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
</p>

</br>

![nlw-copa](https://user-images.githubusercontent.com/72872854/200069701-7026d50a-2959-485a-9383-be4163ac9411.png)

<p align="center">
<a href="https://img.shields.io/github/watchers/shunny2/nlw-copa?style=social"><img src="https://img.shields.io/github/watchers/shunny2/nlw-copa?style=social" alt="Watchers"/></a>
<a href="https://img.shields.io/github/stars/shunny2/nlw-copa?style=social"><img src="https://img.shields.io/github/stars/shunny2/nlw-copa?style=social" alt="Repo Stars"/></a>
<a href="https://img.shields.io/github/license/shunny2/nlw-copa?label=license"><img src="https://img.shields.io/github/license/shunny2/nlw-copa?label=license" alt="License"/></a>
</p>

## About Application

Nlw-copa is a project to create polls of cup teams and share them among your friends. The project was created at the Next Level Week event by [Rocketseat](https://www.rocketseat.com.br/).

## Technologies
  - [NextJS](https://nextjs.org/)
  - [ReactNative](https://reactnative.dev/)
  - [SQLite](https://www.sqlite.org/)
  - [Tailwindcss](https://tailwindcss.com/)
  - [Fastify](https://www.fastify.io/)
  - [Prisma](https://www.prisma.io/)
  - [Zod](https://github.com/colinhacks/zod)
  - [Figma](https://www.figma.com/)
  
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

> Status: Developing

<hr></hr>

<p align="center">Created by <a href="https://github.com/shunny2"><b>Alexander Davis<b></a>.</p>
